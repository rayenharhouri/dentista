"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminAppointmentsList({ appointments }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this appointment?");
    if (!confirmed) {
      return;
    }

    setError("");
    setDeletingId(id);

    try {
      const response = await fetch("/api/admin/appointments", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(payload?.error || "Could not delete appointment.");
        return;
      }

      router.refresh();
    } catch {
      setError("Could not delete appointment.");
    } finally {
      setDeletingId("");
    }
  };

  if (appointments.length === 0) {
    return (
      <section className="admin-card">
        <p>No appointments yet.</p>
      </section>
    );
  }

  return (
    <>
      {error ? <p className="admin-error">{error}</p> : null}
      <section className="admin-list">
        {appointments.map((appointment) => (
          <article key={appointment.id} className="admin-item">
            <div className="admin-item-head">
              <h2>{appointment.fullName}</h2>
              <button
                type="button"
                className="admin-delete"
                onClick={() => handleDelete(appointment.id)}
                disabled={deletingId === appointment.id}
              >
                {deletingId === appointment.id ? "Removing..." : "Remove"}
              </button>
            </div>
            <p>
              <strong>Phone:</strong> {appointment.phone || "-"}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email || "-"}
            </p>
            <p>
              <strong>Service:</strong> {appointment.service}
            </p>
            <p>
              <strong>Date:</strong> {appointment.appointmentDate}
            </p>
            <p>
              <strong>Notes:</strong> {appointment.notes || "-"}
            </p>
            <p>
              <strong>Language:</strong> {appointment.locale || "-"}
            </p>
            <p>
              <strong>Received:</strong> {new Date(appointment.createdAt).toLocaleString()}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
