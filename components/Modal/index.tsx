import { Dispatch, ReactNode, SetStateAction, cloneElement } from "react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
	return (
		<div
			className={`modal h-screen  overflow-hidden fixed top-0 left-0 flex flex-row items-stretch justify-end py-3 transition-all duration-300 ${
				isOpen ? "w-screen justify-end  px-3" : "w-0 justify-start px-0"
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
