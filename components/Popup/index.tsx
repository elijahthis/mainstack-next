"use client";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import {
	CSSProperties,
	Dispatch,
	ReactNode,
	SetStateAction,
	useRef,
	useState,
} from "react";

interface PopupProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	style?: CSSProperties;
}

const Popup = ({ children, isOpen, setIsOpen, style }: PopupProps) => {
	const wrapperRef = useRef(null);

	useOutsideAlerter(wrapperRef, () => {
		setIsOpen(false);
	});

	return (
		<div
			className={`popUp w-[400px] overflow-hidden ${isOpen ? "h-max" : "h-0"} `}
			style={{
				boxShadow:
					"0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)",
				transition: "opacity 0.3s ease-in-out",
				...style,
			}}
			ref={wrapperRef}
		>
			{children}
		</div>
	);
};

export default Popup;
