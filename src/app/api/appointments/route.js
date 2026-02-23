import { NextResponse } from "next/server";

const DEFAULT_NOTIFY_TO = "393713946628";

const normalizeE164 = (value) => String(value || "").replace(/\D/g, "");

const buildMessage = (payload) => {
  const title = String(payload.message || "").split("\n")[0] || "New appointment request";
  const fullName = String(payload.fullName || "").trim();
  const service = String(payload.service || "").trim();
  const appointmentDate = String(payload.appointmentDate || "").trim();
  const notes = String(payload.notes || "").trim();

  if (!fullName || !service || !appointmentDate) {
    return "";
  }

  const lines = [
    title,
    `Name: ${fullName}`,
    `Service: ${service}`,
    `Date: ${appointmentDate}`,
  ];

  if (notes) {
    lines.push(`Notes: ${notes}`);
  }

  return lines.join("\n");
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const message = buildMessage(payload);

    if (!message) {
      return NextResponse.json(
        { ok: false, error: "Missing required appointment fields." },
        { status: 400 },
      );
    }

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const graphVersion = process.env.WHATSAPP_GRAPH_VERSION || "v22.0";
    const notifyTo = normalizeE164(process.env.WHATSAPP_NOTIFY_TO || DEFAULT_NOTIFY_TO);

    if (!accessToken || !phoneNumberId || !notifyTo) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "WhatsApp API is not configured. Set WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, and WHATSAPP_NOTIFY_TO.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: notifyTo,
          type: "text",
          text: {
            preview_url: false,
            body: message,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { ok: false, error: `WhatsApp API error: ${errorText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: `Unexpected error: ${error instanceof Error ? error.message : "unknown"}` },
      { status: 500 },
    );
  }
}
