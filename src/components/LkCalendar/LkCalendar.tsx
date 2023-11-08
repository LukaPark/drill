"use client";

import { useEffect, useState } from "react";
interface LkCalendarProps {
	height?: string;
	common?: {
		days?: string[];
	};
}

type ViewType = "month" | "week" | "day";

const initialProps = {
	height: "800px",
	common: {
		days: ["일", "월", "화", "수", "목", "금", "토"],
	},
};

const LkCalendar = ({ height = initialProps.height, common = initialProps.common }: LkCalendarProps) => {
	const _today = new Date();
	const [_targetDate, setTargetDate] = useState(_today);
	const [_view, setView] = useState<ViewType>("month");

	useEffect(() => {}, []);

	return (
		//  캘린더 컴포넌트 root
		<div className="lkCalendar-root" style={{ height: height }}>
			{/* 캘린더 nav 영역 */}
			<nav className="lkCalendar-nav"></nav>
			{/* 캘린더 main 영역 */}
			<div className="lkCalendar-main">
				{/* 요일 row 영역 */}
				<div className="lkCalendar-days">
					{common.days?.map((day, index) => {
						return (
							<div key={index} className="lkCalendar-day">
								{day}
							</div>
						);
					})}
				</div>
				{/* 날짜 row 영역 */}
				<div className="lkCalendar-dates"></div>
			</div>
		</div>
	);
};

export default LkCalendar;
