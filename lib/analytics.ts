export function trackAffiliateClick(productSlug: string) {
  if (typeof window === "undefined") return;

  const fbq = (window as Window & {
    fbq?: (...args: unknown[]) => void;
  }).fbq;

  if (fbq) {
    fbq("trackCustom", "AffiliateClick", {
      product_slug: productSlug
    });
  }

  fetch("/api/meta/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName: "AffiliateClick",
      productSlug,
      eventSourceUrl: window.location.href
    })
  }).catch(() => {});
}
