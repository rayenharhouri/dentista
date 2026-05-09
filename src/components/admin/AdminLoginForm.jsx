"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToothIcon, ShieldIcon } from "@/components/Icons";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError("Invalid email or password.");
        return;
      }

      router.refresh();
    } catch {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-shell">
      <section className="admin-login-card">
        <div className="admin-login-brand">
          <span className="admin-brand-mark">
            <ToothIcon />
          </span>
          <div className="admin-brand-text">
            <strong>Saffi Dental</strong>
            <small>Admin Console</small>
          </div>
        </div>

        <div>
          <h1>Welcome back</h1>
          <p style={{ marginTop: 6 }}>
            Sign in to manage appointment requests.
          </p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@saffidental.it"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error ? <p className="admin-error">{error}</p> : null}

          <button
            type="submit"
            className="admin-btn admin-btn-primary"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="admin-login-foot">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--ink-muted)",
            }}
          >
            <ShieldIcon
              style={{
                width: 14,
                height: 14,
                fill: "var(--accent-strong)",
              }}
            />
            Secure admin area · Saffi Dental Clinic
          </span>
        </div>
      </section>
    </div>
  );
}
