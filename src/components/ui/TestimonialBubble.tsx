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
			viewport={{ once: true, amount: 0.8 }}
			transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
			className="flex flex-col gap-3"
		>
			<div className="flex items-center justify-center rounded-t-[36px] rounded-br-[36px] rounded-bl-sm bg-[#f1f1f1] p-4 sm:p-6">
				<p className="whitespace-pre-line font-normal leading-7 text-xl">{quote}</p>
			</div>
			<div className="flex flex-col gap-1">
				<p className="text-sm font-normal sm:text-base">{date}</p>
				<p className="text-xl font-medium sm:text-2xl">{name}</p>
				<p className="text-lg font-medium sm:text-xl">{title}</p>
			</div>
		</motion.div>
	);
}
