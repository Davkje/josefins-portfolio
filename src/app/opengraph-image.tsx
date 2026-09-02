import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	const fontDir = join(process.cwd(), "public/fonts/Satoshi_Complete/Fonts/OTF");
	const [bold, medium] = await Promise.all([
		readFile(join(fontDir, "Satoshi-Bold.otf")),
		readFile(join(fontDir, "Satoshi-Medium.otf")),
	]);

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					gap: 24,
					background: "#ebfcec",
					padding: "0 96px",
				}}
			>
				<div
					style={{
						display: "flex",
						width: 72,
						height: 12,
						background: "#ff93e2",
					}}
				/>
				<div
					style={{
						display: "flex",
						fontFamily: "Satoshi",
						fontWeight: 700,
						fontSize: 96,
						lineHeight: 1.05,
						color: "#111111",
					}}
				>
					{SITE_NAME}
				</div>
				<div
					style={{
						display: "flex",
						fontFamily: "Satoshi",
						fontWeight: 500,
						fontSize: 36,
						color: "#111111",
					}}
				>
					Digital Designer &amp; UX/UI Developer
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{ name: "Satoshi", data: bold, weight: 700, style: "normal" },
				{ name: "Satoshi", data: medium, weight: 500, style: "normal" },
			],
		},
	);
}
