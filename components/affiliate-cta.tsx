 "use client";

import { trackAffiliateClick } from "@/lib/analytics";

export function AffiliateCTA({
  label,
  className = ""
}: {
  label: string;
  className?: string;
}) {
  const href =
    process.env.NEXT_PUBLIC_100_ACTIVIDADES_URL ||
    "https://go.hotmart.com/S107706910X?ap=f0f3";

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      onClick={() => trackAffiliateClick("100-actividades-ninos")}
      className={`btn-primary ${className}`}
    >
      {label}
    </a>
  );
}
