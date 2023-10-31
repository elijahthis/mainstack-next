import { ReactNode } from "react";

const Popup = ({ children }: { children: ReactNode }) => {
	return <div className="popUp">{children}</div>;
};

export default Popup;
