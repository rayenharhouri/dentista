// Inline SVG icon set used across the site & admin.
// All icons are 24x24 viewBox with currentColor so they inherit text color.

const I = ({ children, viewBox = "0 0 24 24", ...rest }) => (
  <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    {...rest}
  >
    {children}
  </svg>
);

export const ToothIcon = (props) => (
  <I {...props}>
    <path d="M12 2.2c-2.6 0-3.7 1.2-5.5 1.2-2.1 0-4-.6-4 3.4 0 2.4 1 4 1.6 5.4.6 1.4.5 2.9.8 4.7.4 2 1.1 5 2.4 5 1.5 0 1.6-3.2 1.9-4.6.3-1.6.5-2.7 1.6-2.7s1.4 1.1 1.7 2.7c.3 1.4.5 4.6 1.9 4.6 1.3 0 2-3 2.4-5 .3-1.8.2-3.3.8-4.7.6-1.4 1.6-3 1.6-5.4 0-4-1.9-3.4-4-3.4-1.8 0-2.9-1.2-5.2-1.2Z" />
  </I>
);

export const SmileIcon = (props) => (
  <I {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.5 7.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm7 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm-3.5 8.6c-2.7 0-5-1.4-5.7-3.4h11.4c-.8 2-3 3.4-5.7 3.4Z" />
  </I>
);

export const CheckIcon = (props) => (
  <I {...props}>
    <path d="M9.55 17.6 4.4 12.45l1.4-1.4 3.75 3.75 8.65-8.65 1.4 1.4Z" />
  </I>
);

export const CheckCircleIcon = (props) => (
  <I {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 14.4-4.4-4.4 1.4-1.4 3 3 6-6 1.4 1.4Z" />
  </I>
);

export const CalendarIcon = (props) => (
  <I {...props}>
    <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 8H5v10h14Zm-9 2v2H8v-2Zm4 0v2h-2v-2Zm4 0v2h-2v-2Zm-8 4v2H8v-2Zm4 0v2h-2v-2Z" />
  </I>
);

export const ClockIcon = (props) => (
  <I {...props}>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.5 5h-1.6v6.2l5.1 3 .8-1.3-4.3-2.5Z" />
  </I>
);

export const PhoneIcon = (props) => (
  <I {...props}>
    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.55 3.5a1 1 0 0 1-.25 1Z" />
  </I>
);

export const MapPinIcon = (props) => (
  <I {...props}>
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  </I>
);

export const MailIcon = (props) => (
  <I {...props}>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 9.2L4 7v11h16V7Z" />
  </I>
);

export const StarIcon = (props) => (
  <I {...props}>
    <path d="m12 2 3 6.6 7.2.7-5.4 4.8 1.6 7-6.4-3.7L5.6 21l1.6-7L1.8 9.3l7.2-.7Z" />
  </I>
);

export const ShieldIcon = (props) => (
  <I {...props}>
    <path d="M12 2 3 6v6c0 5.5 3.8 10.6 9 12 5.2-1.4 9-6.5 9-12V6Zm-1 14.5L6.5 12l1.4-1.4L11 13.7l5.1-5.1 1.4 1.4Z" />
  </I>
);

export const SparkleIcon = (props) => (
  <I {...props}>
    <path d="M12 2 14 8 20 10 14 12 12 18 10 12 4 10 10 8Zm7 11-1 3-3 1 3 1 1 3 1-3 3-1-3-1Z" />
  </I>
);

export const HeartIcon = (props) => (
  <I {...props}>
    <path d="M12 21s-7-4.6-9.4-9.2C1 8.5 3 5 6.4 5c2 0 3.5 1.1 4.6 2.5C12.1 6.1 13.6 5 15.6 5 19 5 21 8.5 19.4 11.8 17 16.4 12 21 12 21Z" />
  </I>
);

export const UsersIcon = (props) => (
  <I {...props}>
    <path d="M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0 2c4 0 7 2 7 5v2H2v-2c0-3 3-5 7-5Zm9 0c2.8 0 5 1.7 5 4v2h-5v-2c0-1.5-.6-2.8-1.5-3.7C16.6 13.1 17.3 13 18 13Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  </I>
);

export const AwardIcon = (props) => (
  <I {...props}>
    <path d="M12 2a6 6 0 0 1 6 6 6 6 0 0 1-3 5.2V22l-3-2-3 2v-8.8A6 6 0 0 1 6 8a6 6 0 0 1 6-6Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  </I>
);

export const StethoscopeIcon = (props) => (
  <I {...props}>
    <path d="M5 3v6a4 4 0 0 0 8 0V3h-2v6a2 2 0 0 1-4 0V3Zm4 12a6 6 0 0 0 6 6c2.8 0 5-2.2 5-5v-2.2A2.5 2.5 0 1 0 18 13.8V16a3 3 0 0 1-6 0H9Zm9-3.7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
  </I>
);

export const FilingIcon = (props) => (
  <I {...props}>
    <path d="M5 3h14a2 2 0 0 1 2 2v3H3V5a2 2 0 0 1 2-2Zm0 7h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm4 3v2h6v-2Z" />
  </I>
);

export const SyringeIcon = (props) => (
  <I {...props}>
    <path d="M19.7 4.3c.4.4.4 1 0 1.4l-1.4 1.4 1.7 1.7-1.4 1.4-1.7-1.7-7.7 7.7v3l-3-3-3 3-1.4-1.4 3-3-3-3h3l7.7-7.7-1.7-1.7 1.4-1.4 1.7 1.7 1.4-1.4c.4-.4 1-.4 1.4 0Z" />
  </I>
);

export const SearchIcon = (props) => (
  <I {...props}>
    <path d="M10 2a8 8 0 1 1-5.3 14L1 19.7 2.3 21l3.7-3.7A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
  </I>
);

export const PlusIcon = (props) => (
  <I {...props}>
    <path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7Z" />
  </I>
);

export const TrashIcon = (props) => (
  <I {...props}>
    <path d="M9 3h6l1 2h4v2H4V5h4Zm-3 6h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
  </I>
);

export const PencilIcon = (props) => (
  <I {...props}>
    <path d="M3 17.25V21h3.75l11-11-3.75-3.75ZM20.7 7.04a1 1 0 0 0 0-1.4L18.36 3.3a1 1 0 0 0-1.4 0l-1.83 1.83 3.75 3.75Z" />
  </I>
);

export const LogoutIcon = (props) => (
  <I {...props}>
    <path d="M10 17v-2H5V9h5V7l-5-.5C4 6 3 7 3 8v8c0 1 1 2 2 2l5-.5Zm6.6-9.1L15.2 9.3 17 11h-7v2h7l-1.8 1.7 1.4 1.4L21 12Z" />
  </I>
);

export const HomeIcon = (props) => (
  <I {...props}>
    <path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3Z" />
  </I>
);

export const SettingsIcon = (props) => (
  <I {...props}>
    <path d="M19.4 12.9a7.6 7.6 0 0 0 0-1.8l2-1.6-2-3.4-2.4.8a7.4 7.4 0 0 0-1.6-.9L15 3.5h-4l-.4 2.5a7.4 7.4 0 0 0-1.6.9L6.6 6.1l-2 3.4 2 1.6a7.6 7.6 0 0 0 0 1.8l-2 1.6 2 3.4 2.4-.8c.5.4 1 .7 1.6.9l.4 2.5h4l.4-2.5c.6-.2 1.1-.5 1.6-.9l2.4.8 2-3.4ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
  </I>
);

export const InboxIcon = (props) => (
  <I {...props}>
    <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 10v4h14v-4h-4a3 3 0 0 1-6 0Z" />
  </I>
);

export const ChartIcon = (props) => (
  <I {...props}>
    <path d="M3 13h3v8H3Zm6-5h3v13H9Zm6-5h3v18h-3Z" />
  </I>
);

export const TrendUpIcon = (props) => (
  <I {...props}>
    <path d="M3 17 9 11l4 4 7-7v3h2V5h-7v2h3l-5 5-4-4-7 7Z" />
  </I>
);

export const InstagramIcon = (props) => (
  <I {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5Zm5.2-3.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
  </I>
);

export const FacebookIcon = (props) => (
  <I {...props}>
    <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />
  </I>
);

export const ArrowRightIcon = (props) => (
  <I {...props}>
    <path d="M13.3 4.3 11.9 5.7 17.2 11H4v2h13.2l-5.3 5.3 1.4 1.4L21 12Z" />
  </I>
);
