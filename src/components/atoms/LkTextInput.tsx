import { ChangeEvent, KeyboardEvent, useState } from "react";

export interface props {
	className?: string;
	placeholder?: string;
	onChange: ({ value }: { value: string }) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	onKeyDown?: (ev: KeyboardEvent<HTMLInputElement>) => void;
	value?: string;
	disabled?: boolean;
}

function TextInput({
	className,
	placeholder,
	onChange,
	onFocus,
	onBlur,
	onKeyDown,
	value = "",
	disabled = false,
}: props) {
	const [_text, setText] = useState(value);

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const value = ev.target.value;
		setText(value);
		onChange({ value });
	};

	return (
		<input
			type="text"
			value={_text}
			className={className}
			placeholder={placeholder}
			onChange={handleChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
			disabled={disabled}
		/>
	);
}

export default TextInput;
