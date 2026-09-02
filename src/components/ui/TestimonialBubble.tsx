"use client";

import { motion } from "motion/react";

interface TestimonialBubbleProps {
	quote: string;
	date: string;
	name: string;
	title: string;
}

export default function TestimonialBubble({ quote, date, name, title }: TestimonialBubbleProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
			className="flex flex-col gap-5"
		>
			<div className="flex items-center justify-center rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px] bg-[#f1f1f1] p-4 sm:rounded-tl-[50px] sm:rounded-tr-[50px] sm:rounded-br-[50px] sm:p-6">
				<p className="whitespace-pre-line text-base font-normal leading-6 sm:text-xl">{quote}</p>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-sm font-normal sm:text-base">{date}</p>
				<p className="text-xl font-medium sm:text-2xl">{name}</p>
				<p className="text-lg font-medium sm:text-xl">{title}</p>
			</div>
		</motion.div>
	);
}
