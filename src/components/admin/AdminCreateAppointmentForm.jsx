"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlusIcon } from "@/components/Icons";

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

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
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
    setIsOpen(true);
  };

  const closeModal = () => {
    if (loading) return;
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(payload?.error || "Could not save appointment.");
        return;
      }

      setFormData(initialState);
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
      <button
        type="button"
        className="admin-btn admin-btn-primary"
        onClick={openModal}
      >
        <PlusIcon />
        New appointment
      </button>

      {isOpen ? (
        <div
          className="admin-modal-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <section
            className="admin-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="admin-modal-head">
              <div>
                <h2>Add appointment</h2>
                <small style={{ color: "var(--ink-soft)", fontSize: "0.84rem" }}>
                  Manually create a new booking entry.
                </small>
              </div>
              <button
                type="button"
                className="admin-modal-close"
                aria-label="Close"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <form className="admin-modal-body" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="create-full-name">Full Name</label>
                  <input
                    id="create-full-name"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="create-phone">Phone</label>
                  <input
                    id="create-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="create-email">Email (optional)</label>
                  <input
                    id="create-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="create-date">Date</label>
                  <input
                    id="create-date"
                    name="appointmentDate"
                    type="date"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="create-service">Service</label>
                  <input
                    id="create-service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
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
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="create-notes">Notes (optional)</label>
                <textarea
                  id="create-notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              {error ? <p className="admin-error">{error}</p> : null}

              <div className="admin-modal-actions">
                <button
                  type="button"
                  className="admin-btn admin-btn-ghost"
                  onClick={closeModal}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-btn admin-btn-primary"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save appointment"}
                </button>
              </div>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
