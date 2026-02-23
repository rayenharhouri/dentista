"use client";

import { useState } from "react";

export default function AppointmentForm({ form, services, whatsappNumber, locale }) {
  const [status, setStatus] = useState("idle");

  const buildWhatsappUrl = (message) => {
    const target = String(whatsappNumber || "").replace(/\D/g, "");
    return target
      ? `https://wa.me/${target}?text=${encodeURIComponent(message)}`
      : "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") || "").trim();
    const serviceValue = String(formData.get("service") || "");
    const appointmentDate = String(formData.get("appointmentDate") || "");
    const notes = String(formData.get("notes") || "").trim();

    const selectedService = services.find((service) => service.value === serviceValue);
    const serviceTitle = selectedService ? selectedService.title : serviceValue;

    const messageLines = [
      form.whatsappMessageTitle,
      `${form.nameLabel}: ${fullName}`,
      `${form.serviceLabel}: ${serviceTitle}`,
      `${form.dateLabel}: ${appointmentDate}`,
    ];

    if (notes) {
      messageLines.push(`${form.notesLabel}: ${notes}`);
    }

    const message = messageLines.join("\n");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          message,
          fullName,
          service: serviceTitle,
          appointmentDate,
          notes,
        }),
      });

      if (!response.ok) {
        throw new Error("notify_failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      const whatsappUrl = buildWhatsappUrl(message);
      if (whatsappUrl) {
        const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!popup) {
          window.location.href = whatsappUrl;
        }
      }
    }
  };

  return (
    <form className="appointment-form" id="appointment-form" onSubmit={handleSubmit}>
      <label htmlFor="fullName">{form.nameLabel}</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        placeholder={form.namePlaceholder}
        required
      />

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

      <label htmlFor="appointmentDate">{form.dateLabel}</label>
      <input id="appointmentDate" name="appointmentDate" type="date" required />

      <label htmlFor="notes">{form.notesLabel}</label>
      <textarea
        id="notes"
        name="notes"
        className="notes-input"
        placeholder={form.notesPlaceholder}
      />

      <button type="submit">{form.submit}</button>
      <p className="whatsapp-note">{form.whatsappHint}</p>
      {status === "sending" ? <p className="status-note">{form.sendingNotice}</p> : null}
      {status === "success" ? <p className="status-note success">{form.successNotice}</p> : null}
      {status === "error" ? <p className="status-note error">{form.errorNotice}</p> : null}
    </form>
  );
}
