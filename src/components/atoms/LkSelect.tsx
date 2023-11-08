import React, { ReactNode } from "react";

function LkSelectMain({ children }: { children: ReactNode }) {
	return (
		<div>
			<select>{children}</select>
		</div>
	);
}

function Option({ children }: { children: ReactNode }) {
	return <option>{children}</option>;
}

export const LkSelect = Object.assign(LkSelectMain, { Option: Option });
