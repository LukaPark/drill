import { createPortal } from "react-dom";

// 서브 컴포넌트 구현
interface DialogTitleProps {
	children?: React.ReactNode;
}

function DialogTitle({ children }: DialogTitleProps) {
	return <div>{children}</div>;
}

interface DialogLabelButtonProps {
	children?: React.ReactNode;
	onClick?: (e: MouseEvent) => void;
}
function DialogLabelButton({ children, onClick }: DialogLabelButtonProps) {
	return <div>{children}</div>;
}

interface DialogMainProps {
	children?: React.ReactNode;
	isOpen: boolean;
}

function DialogMain({ children, isOpen }: DialogMainProps) {
	if (!isOpen) return null;
	return createPortal(<div>{children}</div>, document.body);
}
