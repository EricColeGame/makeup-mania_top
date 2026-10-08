export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Makeup Mania Wiki",
  shortName: "Makeup Mania",
  logoText: "M",
  tagline: "Makeup Guides, Styling Tips & Beauty Challenges",
  description: "Complete Makeup Mania wiki featuring makeup guides, styling tips, beauty challenges, character customization, and gameplay information for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://makeup-mania.top",
  supportEmail: "support@makeup-mania.top",
  gameUrl: "https://www.roblox.com/games/117935850321807/Makeup-Mania-BETA",
  heroVideoId: "ji_LjqvjeAk", // ROBLOX Makeup Mania — how to make the perfect look (showcase/tutorial)
  social: {
    youtube: "https://www.youtube.com/watch?v=ji_LjqvjeAk",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
