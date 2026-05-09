"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  SearchIcon,
  TrashIcon,
  PhoneIcon,
  MailIcon,
  InboxIcon,
} from "@/components/Icons";

const initials = (name = "") => {
  return (
    name
      .trim()
      .split(/\s+/)
      .map((p) => p[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "—"
  );
};

const formatDate = (raw) => {
  if (!raw) return "—";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const localeBadge = (locale) => {
  const map = {
    it: { label: "IT", tone: "blue" },
    en: { label: "EN", tone: "teal" },
    ar: { label: "AR", tone: "amber" },
  };
  return map[locale] || { label: (locale || "—").toUpperCase(), tone: "neutral" };
};

const computeStatus = (raw) => {
  if (!raw) return { label: "Unscheduled", tone: "neutral" };
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return { label: "Unscheduled", tone: "neutral" };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  if (d < today) return { label: "Past", tone: "neutral" };
  if (d.getTime() === today.getTime()) return { label: "Today", tone: "amber" };
  return { label: "Upcoming", tone: "green" };
};

export default function AdminAppointmentsList({ appointments }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return appointments.filter((appt) => {
      const status = computeStatus(appt.appointmentDate).label.toLowerCase();
      if (filter !== "all" && status !== filter) return false;
      if (!q) return true;
      const haystack = [
        appt.fullName,
        appt.phone,
        appt.email,
        appt.service,
        appt.notes,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [appointments, query, filter]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this appointment?");
    if (!confirmed) return;

    setError("");
    setDeletingId(id);

    try {
      const response = await fetch("/api/admin/appointments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
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

  return (
    <section className="admin-card">
      <header className="admin-card-head">
        <div className="admin-card-title">
          <h2>All Appointments</h2>
          <small>
            {filtered.length} of {appointments.length}
            {query ? ` — "${query}"` : ""}
          </small>
        </div>
        <div className="admin-toolbar">
          <label className="admin-search" aria-label="Search appointments">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search name, phone, service..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <select
            className="admin-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter by status"
          >
            <option value="all">All status</option>
            <option value="today">Today</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="unscheduled">Unscheduled</option>
          </select>
        </div>
      </header>

      {error ? <p className="admin-error" style={{ margin: "12px 20px" }}>{error}</p> : null}

      {filtered.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">
            <InboxIcon />
          </div>
          <h3>No appointments match</h3>
          <p>
            {appointments.length === 0
              ? "New bookings from the website will appear here."
              : "Try clearing the search or filter."}
          </p>
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Lang</th>
                <th>Received</th>
                <th style={{ textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((appt) => {
                const status = computeStatus(appt.appointmentDate);
                const locale = localeBadge(appt.locale);
                return (
                  <tr key={appt.id}>
                    <td data-label="Patient">
                      <div className="admin-cell-name">
                        <span className="admin-cell-avatar">
                          {initials(appt.fullName)}
                        </span>
                        <div className="admin-cell-name-meta">
                          <strong>{appt.fullName || "—"}</strong>
                          <small>
                            {appt.phone ? (
                              <>
                                <PhoneIcon
                                  style={{
                                    width: 10,
                                    height: 10,
                                    fill: "currentColor",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginRight: 4,
                                  }}
                                />
                                {appt.phone}
                              </>
                            ) : null}
                            {appt.email ? (
                              <>
                                {appt.phone ? " · " : null}
                                <MailIcon
                                  style={{
                                    width: 10,
                                    height: 10,
                                    fill: "currentColor",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginRight: 4,
                                  }}
                                />
                                {appt.email}
                              </>
                            ) : null}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td data-label="Service" className="admin-cell-secondary">
                      {appt.service || "—"}
                    </td>
                    <td data-label="Date">
                      <strong>{formatDate(appt.appointmentDate)}</strong>
                    </td>
                    <td data-label="Status">
                      <span className={`admin-badge ${status.tone}`}>
                        {status.label}
                      </span>
                    </td>
                    <td data-label="Lang">
                      <span className={`admin-badge ${locale.tone}`}>
                        {locale.label}
                      </span>
                    </td>
                    <td data-label="Received" className="admin-cell-secondary">
                      {appt.createdAt
                        ? new Date(appt.createdAt).toLocaleDateString()
                        : "—"}
                    </td>
                    <td data-label="Actions">
                      <div className="admin-row-actions">
                        <button
                          type="button"
                          className="admin-icon-btn danger"
                          onClick={() => handleDelete(appt.id)}
                          disabled={deletingId === appt.id}
                          aria-label="Delete appointment"
                          title="Delete appointment"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
