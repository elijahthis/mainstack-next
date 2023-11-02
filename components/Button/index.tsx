import { CSSProperties, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	size?: "md" | "lg";
	dark?: boolean;
	style?: CSSProperties;
	onClick?: () => void;
}

const Button = ({
	children,
	size = "lg",
	dark = true,
	style,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`rounded-[100px] font-semibold ${
				dark ? "bg-[#131316] text-white " : "bg-[#EFF1F6] text-[#131316] "
			} ${
				size === "lg" ? "py-[14px] px-[28px] min-w-[167px] " : "py-3 px-6  "
			} `}
			style={style}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
