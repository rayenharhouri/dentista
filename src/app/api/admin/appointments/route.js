import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isAdminAuthenticated } from "@/lib/admin-auth";
import { addAppointment, removeAppointmentById } from "@/lib/appointments-store";

const MIN_PHONE_DIGITS = 6;

const isPhoneValid = (value) => String(value || "").replace(/\D/g, "").length >= MIN_PHONE_DIGITS;

const isEmailValid = (value) => {
  const email = String(value || "").trim();
  if (!email) {
    return true;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const requireAdminAuth = async () => {
  const cookieStore = await cookies();
  const sessionValue = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return isAdminAuthenticated(sessionValue);
};

export async function POST(request) {
  try {
    const authenticated = await requireAdminAuth();
    if (!authenticated) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }

    const payload = await request.json();
    const fullName = String(payload.fullName || "").trim();
    const phone = String(payload.phone || "").trim();
    const email = String(payload.email || "").trim();
    const service = String(payload.service || "").trim();
    const appointmentDate = String(payload.appointmentDate || "").trim();
    const notes = String(payload.notes || "").trim();
    const locale = String(payload.locale || "").trim();

    if (!fullName || !phone || !service || !appointmentDate) {
      return NextResponse.json(
        { ok: false, error: "Missing required appointment fields." },
        { status: 400 },
      );
    }

    if (!isPhoneValid(phone)) {
      return NextResponse.json(
        { ok: false, error: "Invalid phone number." },
        { status: 400 },
      );
    }

    if (!isEmailValid(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    const appointment = await addAppointment({
      fullName,
      phone,
      email,
      service,
      appointmentDate,
      notes,
      locale,
    });

    return NextResponse.json({ ok: true, appointment });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    const authenticated = await requireAdminAuth();
    if (!authenticated) {
      return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }

    const payload = await request.json();
    const id = String(payload?.id || "").trim();

    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Appointment id is required." },
        { status: 400 },
      );
    }

    const removed = await removeAppointmentById(id);
    if (!removed) {
      return NextResponse.json({ ok: false, error: "Appointment not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
