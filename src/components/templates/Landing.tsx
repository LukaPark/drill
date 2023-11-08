"use client";

import clsx from "clsx";
import React, { useEffect } from "react";
import { GradientText } from "../atoms/GradientText";

export function Landing() {
	return (
		<section className="py-4 flex flex-col items-center">
			<TitleStack>
				<GradientText>관리받는 운동의. </GradientText>
				<GradientText variant="violet" delay={4}>
					첫경험,{" "}
				</GradientText>
				<GradientText variant="blue" delay={8}>
					리앤핏.
				</GradientText>
			</TitleStack>
		</section>
	);
}

interface TitleStackProps {
	children: React.ReactNode;
}

const TitleStack = ({ children }: TitleStackProps) => {
	return <div className={clsx("flex items-center gap-2")}>{children}</div>;
};
