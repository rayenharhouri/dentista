import { cookies } from "next/headers";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import AdminCreateAppointmentForm from "@/components/admin/AdminCreateAppointmentForm";
import AdminAppointmentsList from "@/components/admin/AdminAppointmentsList";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminStats from "@/components/admin/AdminStats";
import { ADMIN_SESSION_COOKIE, isAdminAuthenticated } from "@/lib/admin-auth";
import { getAppointments } from "@/lib/appointments-store";

export const dynamic = "force-dynamic";

const ADMIN_DISPLAY_EMAIL = process.env.ADMIN_EMAIL || "saffi@dental.it";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const authenticated = isAdminAuthenticated(sessionValue);

  if (!authenticated) {
    return <AdminLoginForm />;
  }

  const appointments = await getAppointments();
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="admin-body">
      <AdminSidebar activeKey="appointments" userEmail={ADMIN_DISPLAY_EMAIL} />

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-text">
            <h1>Appointments Dashboard</h1>
            <p>{today} · Manage incoming bookings and create new ones.</p>
          </div>
          <div className="admin-topbar-actions">
            <AdminCreateAppointmentForm />
          </div>
        </header>

        <AdminStats appointments={appointments} />

        <AdminAppointmentsList appointments={appointments} />
      </main>
    </div>
  );
}
