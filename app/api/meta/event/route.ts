import { NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(request: Request) {
  const accessToken = process.env.META_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;
  const apiVersion = process.env.META_API_VERSION || "v23.0";

  if (!accessToken || !pixelId) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const body = await request.json().catch(() => ({}));
  const productSlug =
    typeof body.productSlug === "string" ? body.productSlug : "100-actividades-ninos";
  const eventSourceUrl =
    typeof body.eventSourceUrl === "string"
      ? body.eventSourceUrl
      : "https://haciendoecos.com/";

  const payload = {
    data: [
      {
        event_name: "AffiliateClick",
        event_time: Math.floor(Date.now() / 1000),
        event_id: crypto.randomUUID(),
        action_source: "website",
        event_source_url: eventSourceUrl,
        user_data: {},
        custom_data: {
          content_name: productSlug,
          content_category: "digital_product"
        }
      }
    ]
  };

  const response = await fetch(
    `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store"
    }
  );

  const data = await response.json().catch(() => ({}));
  return NextResponse.json(
    { ok: response.ok, data },
    { status: response.ok ? 200 : 502 }
  );
}
