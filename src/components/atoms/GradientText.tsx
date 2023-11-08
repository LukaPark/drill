import clsx from "clsx";
import React, { useEffect } from "react";

interface GradientTextProps {
	children: React.ReactNode;
	variant?: string;
	delay?: number;
}

const gradientVariants = {
	sky: "bg-gradient-to-r from-blue-500 to-cyan-500",
	blue: "bg-gradient-to-r from-[#7928ca] to-[#ff0080]",
	violet: "bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28]",
	pink: "bg-gradient-to-r from-purple-500 to-pink-500",
} as {
	[key: string]: string;
};

export const GradientText = ({ children, delay = 0, variant = "sky" }: GradientTextProps) => {
	const [_delay, setDelay] = React.useState(0);

	useEffect(() => {
		setDelay(delay);
	}, [delay]);

	return (
		<span className="text-[48px] font-extrabold tracking-[-.05em] relative">
			<span
				className={clsx("animate-fadeOutIn", "text-dark")}
				style={{
					animationDelay: `${delay}s`,
					animationFillMode: "both",
				}}
			>
				{children}
			</span>
			<span
				className={clsx(
					gradientVariants[variant],
					"animate-fadeInOut bg-clip-text text-transparent absolute left-[0px] top-[0px] z-1"
				)}
				style={{
					animationDelay: `${delay}s`,
					animationFillMode: "both",
				}}
			>
				{children}
			</span>
		</span>
	);
};
