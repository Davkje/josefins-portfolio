import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URL,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${SITE_URL}/about`,
			changeFrequency: "yearly",
			priority: 0.8,
		},
		...projects.map(({ slug }) => ({
			url: `${SITE_URL}/work/${slug}`,
			changeFrequency: "yearly" as const,
			priority: 0.6,
		})),
	];
}
