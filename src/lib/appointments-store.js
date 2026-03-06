import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import os from "os";
import path from "path";

const defaultFilePath = path.join(process.cwd(), "data", "appointments.json");
const fallbackFilePath = path.join(os.tmpdir(), "saffi-dental", "appointments.json");

let resolvedFilePath = "";

const ensureStoreAtPath = async (targetPath) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });

  try {
    await fs.access(targetPath);
  } catch {
    await fs.writeFile(targetPath, "[]", "utf8");
  }
};

const getStorePath = async () => {
  if (resolvedFilePath) {
    return resolvedFilePath;
  }

  const configuredFilePath = String(process.env.APPOINTMENTS_STORE_FILE || "").trim();
  const preferredPath = configuredFilePath
    ? path.resolve(configuredFilePath)
    : defaultFilePath;

  try {
    await ensureStoreAtPath(preferredPath);
    resolvedFilePath = preferredPath;
  } catch {
    await ensureStoreAtPath(fallbackFilePath);
    resolvedFilePath = fallbackFilePath;
  }

  return resolvedFilePath;
};

export const getAppointments = async () => {
  const filePath = await getStorePath();
  const raw = await fs.readFile(filePath, "utf8");

  let parsed = [];
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = [];
  }

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};

export const addAppointment = async ({
  fullName,
  phone,
  email,
  service,
  appointmentDate,
  notes,
  locale,
}) => {
  const filePath = await getStorePath();
  const appointments = await getAppointments();

  const entry = {
    id: randomUUID(),
    fullName: String(fullName || "").trim(),
    phone: String(phone || "").trim(),
    email: String(email || "").trim(),
    service: String(service || "").trim(),
    appointmentDate: String(appointmentDate || "").trim(),
    notes: String(notes || "").trim(),
    locale: String(locale || "").trim(),
    createdAt: new Date().toISOString(),
  };

  appointments.unshift(entry);
  await fs.writeFile(filePath, JSON.stringify(appointments, null, 2), "utf8");

  return entry;
};

export const removeAppointmentById = async (id) => {
  const targetId = String(id || "").trim();
  if (!targetId) {
    return false;
  }

  const filePath = await getStorePath();
  const appointments = await getAppointments();
  const nextAppointments = appointments.filter((appointment) => appointment.id !== targetId);

  if (nextAppointments.length === appointments.length) {
    return false;
  }

  await fs.writeFile(filePath, JSON.stringify(nextAppointments, null, 2), "utf8");
  return true;
};
