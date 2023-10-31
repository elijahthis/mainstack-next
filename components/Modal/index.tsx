import { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
	return (
		<div className="modal h-screen w-screen fixed top-0 left-0 flex flex-row items-stretch justify-end py-3 px-3 ">
			<div className="modalContentWrap">{children}</div>
		</div>
	);
};

export default Modal;
