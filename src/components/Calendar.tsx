"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { addHours } from "@/utils/date";
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

//  Calendar Dynamic Import (SSR 제외) : tui-calendar가 ssr 지원 X
const _Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
	ssr: false,
});

const _CalendarComponent = React.forwardRef((props, ref) => {
	return <_Calendar {...props} ref={ref} />;
});

// View 타입 definition
type ViewType = "month" | "week" | "day" | "task";

//  오늘 날짜
const today = new Date();

const viewModeOptions = [
	{
		title: "월간",
		value: "month",
	},
	{
		title: "주간",
		value: "week",
	},
	{
		title: "일간",
		value: "day",
	},
];

export default function Calendar({ view = "month" }: { view: ViewType }) {
	// 캘린더 Ref
	const calendarRef = React.useRef<typeof _Calendar>(null);

	const [isRendered, setIsRendered] = useState(false);

	// 선택된 날짜 범위
	const [selectedDateRangeText, setSelectedDateRangeText] = useState("");

	// 현재 선택된 view
	const [selectedView, setSelectedView] = useState(view);

	const [renderDate, setRenderDate] = useState(today.toLocaleDateString());

	// 캘린더 초기 설정
	const initialCalendars = [
		{
			id: 0,
			name: "Private",
			backgroundColor: "#9e5fff",
			borderColor: "#9e5fff",
			dragBackgroundColor: "#9e5fff",
		},
		{
			id: 1,
			name: "Company",
			backgroundColor: "#00a9ff",
			borderColor: "#00a9ff",
			dragBackgroundColor: "#00a9ff",
		},
		{
			id: 2,
			name: "Family",
			backgroundColor: "#ff5583",
			borderColor: "#ff5583",
			dragBackgroundColor: "#ff5583",
		},
	];

	const initialEvents = [
		{
			id: "1",
			calendarId: "cal1",
			title: "ABCD",
			category: "time",
			start: today,
			end: addHours(today, 3),
		},
		{
			id: "2",
			calendarId: "cal1",
			title: "DEFG",
			category: "allday",
			start: addHours(today, 10),
			end: addHours(today, 15),
		},
		{
			id: "3",
			calendarId: "cal1",
			title: "HIJK",
			category: "milestone",
			start: addHours(today, -5),
			end: addHours(today, -5),
		},
	];

	React.useEffect(() => {
		setIsRendered(true);
	}, []);

	// 초기 세팅 (일정, 현재 날짜)
	const template = {};

	const onClickEvent = (e: MouseEvent) => {};

	return (
		<article>
			<Title text="🍞📅 TOAST UI Calendar + Next.js + TypeScript"></Title>
			<CalendarHeader>
				<Button className="bg-pink">Today</Button>
				<Button className="bg-red">
					<ChevronLeftIcon className="w-6 h-6" />
				</Button>
				<Button className="bg-red">
					<ChevronRightIcon className="w-6 h-6" />
				</Button>
				<RenderDateSpan>{renderDate}</RenderDateSpan>
			</CalendarHeader>
			<div id="calendar">
				{/* 캘린더 렌더링 */}
				{isRendered && (
					<_Calendar
						// Google Analytics (GA)를 위한 hostname 수집 거부
						usageStatistics={false}
						view={selectedView}
						month={{
							dayNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
						}}
						events={initialEvents}
						useCreationPopup={true}
						useDetailPopup={true}
						onClickEvent={onClickEvent}
					/>
				)}
			</div>
		</article>
	);
}

const Title = ({ text }: { text: string }) => {
	return <h1 className="text-center">{text}</h1>;
};

const CalendarHeader = ({ children }: { children: any }) => {
	return <div className="flex gap-4 mb-6">{children}</div>;
};

const Button = ({ children, className }: { children: any; className: string }) => {
	return (
		<button type="button" className={className + " btn"}>
			{children}
		</button>
	);
};

const RenderDateSpan = styled.span`
	color: black;
	position: relative;
	font-size: 1.5rem;
	margin-left: 0.5rem;
	margin-right: 1rem;
`;
