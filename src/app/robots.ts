import { MetadataRoute } from "next"

import { CONFIG } from "@/config"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
        },
        sitemap: `${new URL(CONFIG.siteUrl).origin}/sitemap.xml`,
    }
}
