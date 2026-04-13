const BASE_URL = "https://aifc.solispartners.kz/";

type UTMParams = {
  source: string;
  medium: string;
  campaign: string;
  content?: string;
};

function buildUtmUrl(params: UTMParams): string {
  const url = new URL(BASE_URL);
  url.searchParams.set("utm_source", params.source);
  url.searchParams.set("utm_medium", params.medium);
  url.searchParams.set("utm_campaign", params.campaign);
  if (params.content) {
    url.searchParams.set("utm_content", params.content);
  }
  return url.toString();
}

export const POST_LINKS = {
  linkedinOrganic: buildUtmUrl({
    source: "linkedin",
    medium: "organic",
    campaign: "aifc_launch",
    content: "post",
  }),
  telegramOrganic: buildUtmUrl({
    source: "telegram",
    medium: "organic",
    campaign: "aifc_launch",
    content: "post",
  }),
  instagramOrganic: buildUtmUrl({
    source: "instagram",
    medium: "organic",
    campaign: "aifc_launch",
    content: "bio",
  }),
  googleAdsSearch: buildUtmUrl({
    source: "google",
    medium: "cpc",
    campaign: "aifc_search",
    content: "ad",
  }),
  emailNewsletter: buildUtmUrl({
    source: "email",
    medium: "newsletter",
    campaign: "aifc_launch",
    content: "digest",
  }),
};

export const WHATSAPP_URL =
  "https://wa.me/77020385068?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B2%20AIFC.%20%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B0%20%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B0%3A%20https%3A%2F%2Faifc.solispartners.kz%2F";

export const TELEGRAM_URL = "https://t.me/SOLISlegal";
