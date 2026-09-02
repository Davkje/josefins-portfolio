"use client";

import { motion } from "motion/react";

export default function SkillBadges({ skills }: { skills: string[] }) {
	return (
		<div className="flex flex-wrap gap-2 sm:gap-4">
			{skills.map((skill, index) => (
				<motion.span
					key={skill}
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					// viewport={{ once  }}
					transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: index * 0.03 }}
					className="whitespace-nowrap rounded-full border border-black px-3 py-2 text-sm font-medium sm:px-4.5 sm:py-3 sm:text-2xl"
				>
					{skill}
				</motion.span>
			))}
		</div>
	);
}
