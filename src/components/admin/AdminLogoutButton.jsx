"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogoutIcon } from "@/components/Icons";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <button
      className="admin-btn admin-btn-ghost"
      type="button"
      onClick={handleLogout}
      disabled={loading}
    >
      <LogoutIcon />
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
