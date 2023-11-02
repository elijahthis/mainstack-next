import { Dispatch, ReactNode, SetStateAction, cloneElement } from "react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
	return (
		<div
			className={`modal h-screen  overflow-hidden fixed top-0 left-0 flex flex-row items-stretch justify-end py-3 px-3 ${
				isOpen ? "w-screen" : "w-0"
			} `}
			onClick={() => setIsOpen(false)}
		>
			<div
				className="modalContentWrap"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{cloneElement(children as any, { setIsOpen })}
			</div>
		</div>
	);
};

export default Modal;
