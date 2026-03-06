import { cookies } from "next/headers";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import AdminCreateAppointmentForm from "@/components/admin/AdminCreateAppointmentForm";
import AdminAppointmentsList from "@/components/admin/AdminAppointmentsList";
import { ADMIN_SESSION_COOKIE, isAdminAuthenticated } from "@/lib/admin-auth";
import { getAppointments } from "@/lib/appointments-store";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const authenticated = isAdminAuthenticated(sessionValue);

  if (!authenticated) {
    return (
      <main className="admin-shell">
        <AdminLoginForm />
      </main>
    );
  }

  const appointments = await getAppointments();

  return (
    <main className="admin-shell">
      <section className="admin-header">
        <h1>Appointments Dashboard</h1>
        <AdminLogoutButton />
      </section>

      <AdminCreateAppointmentForm />
      <AdminAppointmentsList appointments={appointments} />
    </main>
  );
}
