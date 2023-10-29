import { SideIcon1, SideIcon2, SideIcon3, SideIcon4 } from "../svgs";

const Sidebar = () => {
	return (
		<aside className="side-ring fixed left-4 flex flex-col items-center gap-2 p-1 rounded-[100px]  ">
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<SideIcon1 />
			</div>
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<SideIcon2 />
			</div>
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<SideIcon3 />
			</div>
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<SideIcon4 />
			</div>
		</aside>
	);
};

export default Sidebar;
