import { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	size?: "md" | "lg";
	dark?: boolean;
}

const Button = ({ children, size = "lg", dark = true }: ButtonProps) => {
	return (
		<button
			className={`rounded-[100px] font-semibold ${
				dark ? "bg-[#131316] text-white " : "bg-[#EFF1F6] text-[#131316] "
			} ${
				size === "lg"
					? "py-[14px] px-[28px] min-w-[167px] "
					: "py-3 pl-[30px] pr-[20px] "
			} `}
		>
			{children}
		</button>
	);
};

export default Button;
