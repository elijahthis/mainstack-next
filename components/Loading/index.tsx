import { RiLoader5Fill } from "react-icons/ri";

const Loading = ({ size }: { size: number }) => {
	return (
		<main
			className={`grid place-items-center w-[${size + 3}px] w-[${size + 3}px] `}
		>
			<RiLoader5Fill
				className={`animate-spin text-[#131316] w-[${size}px] w-[${size}px]`}
			/>
		</main>
	);
};

export default Loading;
