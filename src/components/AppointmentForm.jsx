"use client";

import { useEffect, useState } from "react";
import { CheckCircleIcon, CalendarIcon } from "@/components/Icons";

export default function AppointmentForm({ form, services, locale }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!showSuccessPopup) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setShowSuccessPopup(false);
    }, 2600);

    return () => clearTimeout(timeoutId);
  }, [showSuccessPopup]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const formElement = event.currentTarget;

    const formData = new FormData(formElement);
    const fullName = String(formData.get("fullName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const serviceValue = String(formData.get("service") || "");
    const appointmentDate = String(formData.get("appointmentDate") || "");
    const notes = String(formData.get("notes") || "").trim();

    const selectedService = services.find((service) => service.value === serviceValue);
    const serviceTitle = selectedService ? selectedService.title : serviceValue;

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          fullName,
          phone,
          email,
          service: serviceTitle,
          appointmentDate,
          notes,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || form.errorNotice);
      }

      setStatus("success");
      setShowSuccessPopup(true);
      formElement.reset();
    } catch (error) {
      setStatus("error");
      setShowSuccessPopup(false);
      setErrorMessage(error instanceof Error ? error.message : form.errorNotice);
    }
  };

  return (
    <>
      <form className="appointment-form" id="appointment-form" onSubmit={handleSubmit}>
        {form.heading ? (
          <div className="form-head">
            <h3>{form.heading}</h3>
            {form.subheading ? <p>{form.subheading}</p> : null}
          </div>
        ) : null}

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="fullName">{form.nameLabel}</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder={form.namePlaceholder}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">{form.phoneLabel}</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={form.phonePlaceholder}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">{form.emailLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={form.emailPlaceholder}
            />
          </div>

          <div className="form-field">
            <label htmlFor="appointmentDate">{form.dateLabel}</label>
            <input id="appointmentDate" name="appointmentDate" type="date" required />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="service">{form.serviceLabel}</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              {form.servicePlaceholder}
            </option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="notes">{form.notesLabel}</label>
          <textarea
            id="notes"
            name="notes"
            placeholder={form.notesPlaceholder}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <CalendarIcon />
          {status === "sending" ? form.sendingNotice : form.submit}
        </button>

        {status === "sending" ? <p className="status-note">{form.sendingNotice}</p> : null}
        {status === "success" ? <p className="status-note success">{form.successNotice}</p> : null}
        {status === "error" ? (
          <p className="status-note error">{errorMessage || form.errorNotice}</p>
        ) : null}
      </form>

      {showSuccessPopup ? (
        <div className="success-popup-backdrop" role="dialog" aria-modal="true">
          <div className="success-popup-card">
            <div className="success-popup-icon">
              <CheckCircleIcon />
            </div>
            <h3>{form.successPopupTitle}</h3>
            <p>{form.successPopupText}</p>
            <button
              type="button"
              className="btn btn-primary success-popup-close"
              onClick={() => setShowSuccessPopup(false)}
            >
              {form.successPopupButton}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
