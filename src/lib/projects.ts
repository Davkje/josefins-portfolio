export interface GalleryImage {
	src: string;
	width: number;
	height: number;
}

export interface Project {
	slug: string;
	title: string;
	category: string;
	tags: string[];
	image: string;
	heroImage: string;
	team?: string[];
	description: string[];
	gallery: GalleryImage[];
}

export const projects: Project[] = [
	{
		slug: "stalhasten",
		title: "Stålhästen",
		category: "fictional/rebrand/web design/brand strategy",
		tags: ["rebrand", "web design", "strategy"],
		image: "/images/projects/stalhasten/card.webp",
		heroImage: "/images/projects/stalhasten/hero.webp",
		team: ["Sam Lidén", "Josefin Moström", "Nick Serlstedt", "Anna Trangärd"],
		description: [
			"Stålhästen was founded in 2010 with the vision of offering stylish, high-quality bicycles at a reasonable price. With its classic retro design, the brand quickly became popular among people looking for a bicycle that reflects their personal style — more as an accessory than a means of transportation.",
			"Despite its high quality, Stålhästen has primarily positioned itself toward inner-city residents, where style takes priority over function. For those who value reliability and performance, the choice often falls on other brands that can rely on a longer history and a legacy of Swedish bicycle craftsmanship. At the same time, Stålhästen's communication feels somewhat inconsistent, making it difficult to form a clear understanding of the brand's identity and what customers can actually expect.",
			"With sustainability at the core, we have created a brand identity that feels both modern and welcoming. More people are given the opportunity to find a Stålhäst that suits their lifestyle, where the bicycle becomes a natural part of everyday life. Through a digital experience that encourages users to customize their own bike while also offering support for maintaining it over time, we create a long-term relationship in which your Stålhäst becomes a bicycle for life.",
		],
		gallery: [
			{ src: "/images/projects/stalhasten/01.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/02.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/03.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/04.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/05.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/06.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/07.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/08.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/09.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/10.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/11.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/12.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/13.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/14.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/15.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/16.webp", width: 2000, height: 1126 },
			{ src: "/images/projects/stalhasten/17.webp", width: 2000, height: 1126 },
		],
	},
	{
		slug: "snacket",
		title: "Snacket",
		category: "fictional/rebrand/web design/brand strategy",
		tags: ["rebrand", "web design", "strategy"],
		image: "/images/projects/snacket/card.webp",
		heroImage: "/images/fallback.png",
		description: [
			"Snacket is a news app designed for young people who want to understand what's happening in the world without having to navigate complex articles and overwhelming news feeds. The app gathers the most important current events and explains them in a simple, engaging, and accessible way. To encourage users to stay informed, Snacket includes interactive quizzes that allow them to test their knowledge and track their learning. Users can also ask their own questions directly within the app and receive clear, easy-to-understand answers about topics they are curious about. By making news more approachable and interactive, Snacket helps young audiences stay informed and engaged with the world around them.",
		],
		gallery: [],
	},
	{
		slug: "mineralriket",
		title: "Mineralriket",
		category: "fictional/rebrand/web design/brand strategy",
		tags: ["rebrand", "web design", "strategy"],
		image: "/images/projects/mineralriket/card.webp",
		heroImage: "/images/projects/mineralriket/hero.webp",
		team: ["Enja Arn", "Josefin Moström", "Ellen Rosén"],
		description: [
			"Mineralriket Geopark is located in one of the world's most mineral-rich regions, surrounding the town of Filipstad in Sweden. The geopark was created to preserve and showcase the area's unique geological heritage, connecting visitors with Earth's history, local mining traditions, and the relationship between people and nature.",
			"Our analysis showed that Mineralriket lacked a clear identity and an engaging visitor experience. The existing website felt informational rather than inspiring, making it difficult for visitors to understand that the geopark consists of real places to explore.",
			"To address this, we developed a concept that connects the digital and physical experience. Through an interactive website, on-site signage, and QR codes, visitors can discover geological sites and minerals at their own pace, unlocking additional content as they explore. Clear wayfinding, resting areas, and interactive elements encourage curiosity and exploration throughout the park.",
			"The result is a cohesive brand experience that brings together nature, geology, and people, making Mineralriket more accessible, engaging, and inspiring for visitors.",
		],
		gallery: [
			{ src: "/images/projects/mineralriket/01.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/02.webp", width: 2000, height: 1127 },
			{ src: "/images/projects/mineralriket/03.webp", width: 2000, height: 1127 },
			{ src: "/images/projects/mineralriket/04.webp", width: 2000, height: 1127 },
			{ src: "/images/projects/mineralriket/05.webp", width: 2000, height: 1127 },
			{ src: "/images/projects/mineralriket/06.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/07.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/08.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/09.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/10.webp", width: 2000, height: 1335 },
			{ src: "/images/projects/mineralriket/11.webp", width: 2000, height: 1335 },
		],
	},
	{
		slug: "alstret",
		title: "Alstret",
		category: "branding/app design/storytelling",
		tags: ["branding", "app design", "storytelling"],
		image: "/images/projects/alstret/card.webp",
		heroImage: "/images/projects/alstret/hero.webp",
		team: ["Amelie Clemets", "Alice Lindvid", "Josefin Moström"],
		description: [
			"How can we make culture and traditional crafts feel more accessible to a new, and potentially younger, audience? How can we create a platform that puts artisans and their crafts at the center in a genuine and engaging way? And how can we inspire learning, curiosity, and personal growth?",
			"These questions led to the creation of ALSTRET — a mobile app designed to bring stories, knowledge, and craftsmanship wherever you go.",
			"ALSTRET combines the depth of an audiobook platform with the intuitive storytelling format of social media. Each artisan is presented as a living book, allowing users to explore both the person and their craft through a series of chapters. These chapters are delivered through a dynamic mix of video, images, text, and audio, giving users the freedom to engage with the content in the way that suits them best. The result is an accessible and immersive learning experience that makes traditional craftsmanship feel relevant, inspiring, and easy to discover.",
		],
		gallery: [
			{ src: "/images/projects/alstret/01.webp", width: 2000, height: 1300 },
			{ src: "/images/projects/alstret/02.webp", width: 2000, height: 1423 },
			{ src: "/images/projects/alstret/03.webp", width: 2000, height: 939 },
			{ src: "/images/projects/alstret/04.webp", width: 2000, height: 1258 },
			{ src: "/images/projects/alstret/05.webp", width: 2000, height: 1258 },
			{ src: "/images/projects/alstret/06.webp", width: 2000, height: 2075 },
			{ src: "/images/projects/alstret/07.webp", width: 2000, height: 2279 },
		],
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
