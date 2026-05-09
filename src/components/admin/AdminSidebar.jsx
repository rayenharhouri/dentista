import {
  ToothIcon,
  HomeIcon,
  CalendarIcon,
  InboxIcon,
  ChartIcon,
  SettingsIcon,
} from "@/components/Icons";
import AdminLogoutButton from "./AdminLogoutButton";

export default function AdminSidebar({ activeKey = "dashboard", userEmail = "Saffi Admin" }) {
  const initials = userEmail
    .split("@")[0]
    .split(/[._-]/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase() || "SA";

  const items = [
    { key: "dashboard", label: "Dashboard", icon: HomeIcon },
    { key: "appointments", label: "Appointments", icon: CalendarIcon },
    { key: "inbox", label: "Inbox", icon: InboxIcon },
    { key: "reports", label: "Reports", icon: ChartIcon },
    { key: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <span className="admin-brand-mark">
          <ToothIcon />
        </span>
        <span className="admin-brand-text">
          <strong>Saffi Dental</strong>
          <small>Admin Console</small>
        </span>
      </div>

      <nav className="admin-nav" aria-label="Admin navigation">
        <span className="admin-nav-section">Manage</span>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.key}
              href="#"
              className={`admin-nav-link${item.key === activeKey ? " active" : ""}`}
              aria-current={item.key === activeKey ? "page" : undefined}
            >
              <Icon />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="admin-sidebar-footer">
        <div className="admin-user">
          <span className="admin-user-avatar">{initials}</span>
          <span className="admin-user-meta">
            <strong>{userEmail.split("@")[0]}</strong>
            <small>{userEmail}</small>
          </span>
        </div>
        <AdminLogoutButton />
      </div>
    </aside>
  );
}
