import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  TrendUpIcon,
  InboxIcon,
} from "@/components/Icons";

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export default function AdminStats({ appointments }) {
  const today = startOfDay(new Date());
  const weekAhead = new Date(today);
  weekAhead.setDate(weekAhead.getDate() + 7);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

  let todayCount = 0;
  let weekCount = 0;
  let monthCount = 0;

  for (const appt of appointments) {
    const raw = appt.appointmentDate;
    if (!raw) continue;
    const d = startOfDay(raw);
    if (Number.isNaN(d.getTime())) continue;
    if (d.getTime() === today.getTime()) todayCount += 1;
    if (d >= today && d < weekAhead) weekCount += 1;
    if (d >= monthStart) monthCount += 1;
  }

  const stats = [
    {
      label: "Total appointments",
      value: appointments.length,
      icon: InboxIcon,
      tone: "teal",
      hint: `${monthCount} this month`,
    },
    {
      label: "Scheduled today",
      value: todayCount,
      icon: ClockIcon,
      tone: "blue",
      hint: todayCount > 0 ? "Live · today" : "No bookings today",
    },
    {
      label: "Next 7 days",
      value: weekCount,
      icon: CalendarIcon,
      tone: "amber",
      hint: weekCount > 0 ? "Upcoming visits" : "Calendar is clear",
    },
    {
      label: "This month",
      value: monthCount,
      icon: UsersIcon,
      tone: "green",
      hint: "Total in current month",
    },
  ];

  return (
    <section className="admin-stats" aria-label="Overview">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article key={stat.label} className="admin-stat">
            <div className="admin-stat-head">
              <div className={`admin-stat-icon ${stat.tone}`}>
                <Icon />
              </div>
              <span className={`admin-stat-trend muted`}>
                <TrendUpIcon />
                {stat.hint}
              </span>
            </div>
            <span className="admin-stat-label">{stat.label}</span>
            <span className="admin-stat-value">{stat.value}</span>
          </article>
        );
      })}
    </section>
  );
}
