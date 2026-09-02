"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ExperienceItem {
	title: string;
	period: string;
	description: string;
}

export default function ResumeAccordion({ items }: { items: ExperienceItem[] }) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key="more-experience"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="flex flex-col gap-9">
							{items.map(({ title, period, description }) => (
								<div key={period} className="flex flex-col gap-4">
									<div className="flex flex-col gap-2">
										<p className="text-xl font-bold leading-[1.2] sm:text-2xl">{title}</p>
										<p className="text-base font-medium leading-[1.2] sm:text-lg">{period}</p>
									</div>
									<p className="text-base font-normal leading-[1.2] sm:text-lg">{description}</p>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				className="w-fit text-lg font-medium hover:cursor-pointer hover:underline"
			>
				{open ? "Show less" : "View full resume"}
			</button>
		</>
	);
}
