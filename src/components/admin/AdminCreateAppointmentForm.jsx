"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  appointmentDate: "",
  notes: "",
  locale: "it",
};

export default function AdminCreateAppointmentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const openModal = () => {
    setError("");
    setSuccess("");
    setIsOpen(true);
  };

  const closeModal = () => {
    if (loading) {
      return;
    }

    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(payload?.error || "Could not save appointment.");
        return;
      }

      setFormData(initialState);
      setSuccess("Appointment added.");
      setIsOpen(false);
      router.refresh();
    } catch {
      setError("Could not save appointment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="admin-card">
        <div className="admin-create-head">
          <h2>Manage Appointments</h2>
          <button type="button" className="admin-open-create" onClick={openModal}>
            Add appointment
          </button>
        </div>
        {success ? <p className="admin-success">{success}</p> : null}
        {error ? <p className="admin-error">{error}</p> : null}
      </section>

      {isOpen ? (
        <div className="admin-modal-backdrop" role="dialog" aria-modal="true" onClick={closeModal}>
          <section className="admin-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="admin-modal-head">
              <h2>Add Appointment</h2>
              <button
                type="button"
                className="admin-modal-close"
                aria-label="Close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <form className="admin-create-form" onSubmit={handleSubmit}>
              <label htmlFor="create-full-name">Full Name</label>
              <input
                id="create-full-name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label htmlFor="create-phone">Phone</label>
              <input
                id="create-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="create-email">Email (optional)</label>
              <input
                id="create-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="create-service">Service</label>
              <input
                id="create-service"
                name="service"
                type="text"
                value={formData.service}
                onChange={handleChange}
                required
              />

              <label htmlFor="create-date">Date</label>
              <input
                id="create-date"
                name="appointmentDate"
                type="date"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />

              <label htmlFor="create-locale">Language</label>
              <select
                id="create-locale"
                name="locale"
                value={formData.locale}
                onChange={handleChange}
              >
                <option value="it">Italiano</option>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>

              <label htmlFor="create-notes">Notes (optional)</label>
              <textarea
                id="create-notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />

              <div className="admin-modal-actions">
                <button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Add appointment"}
                </button>
                <button
                  type="button"
                  className="admin-cancel"
                  onClick={closeModal}
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
