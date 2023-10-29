import { VscLoading } from "react-icons/vsc";

const Loading = () => {
	return (
		<main className="h-[calc(100vh-72px)] lg:h-[calc(100vh-100px)] grid place-items-center ">
			<VscLoading className="animate-spin text-[#131316] text-4xl" />
		</main>
	);
};

export default Loading;
