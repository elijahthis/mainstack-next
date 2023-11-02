"use client";
import Link from "next/link";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	cloneElement,
	useState,
} from "react";
import {
	AnalyticsIcon,
	AppsIcon,
	CRMIcon,
	ChatIcon,
	HamburguerIcon,
	HomeIcon,
	NotificationIcon,
	RevenueIcon,
} from "@/components/svgs";
import { usePathname } from "next/navigation";
import Popup from "../Popup";
import { PiSignOutLight } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineBugReport, MdOutlineSwitchAccount } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";

export const HeaderNavigation = () => {
	const navList: { label: string; link: string; icon: JSX.Element }[] = [
		{ label: "Home", link: "/", icon: <HomeIcon /> },
		{ label: "Analytics", link: "/analytics", icon: <AnalyticsIcon /> },
		{ label: "Revenue", link: "/revenue", icon: <RevenueIcon /> },
		{ label: "CRM", link: "/crm", icon: <CRMIcon /> },
		{ label: "Apps", link: "/apps", icon: <AppsIcon /> },
	];

	const pathname = usePathname();

	const isActive = (link: string) =>
		(pathname.startsWith(link) && link !== "/") ||
		(pathname === "/" && link === "/");

	return (
		<ul className="flex flex-row items-center gap-5">
			{navList.map((navItem, ind) => (
				<li key={ind}>
					<Link
						href={navItem.link}
						className={`flex flex-row items-center gap-1 rounded-[100px] py-2 pl-[14px] pr-[18px] border font-semibold  ${
							isActive(navItem.link)
								? "text-white bg-[#131316] "
								: "text-[#56616B]"
						} hover:bg-[#131316] hover:text-white transition-colors duration-200 `}
					>
						{cloneElement(navItem.icon, {
							active: isActive(navItem.link),
						})}
						<span>{navItem.label}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

export const HeaderUser = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-row items-center gap-2 relative ">
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<NotificationIcon />
			</div>
			<div className="w-10 h-10 grid place-items-center cursor-pointer">
				<ChatIcon />
			</div>
			<div
				className="rounded-[100px] bg-[#EFF1F6] flex flex-row items-center gap-2 py-1 pl-[5px] pr-3 cursor-pointer "
				onClick={() => setIsOpen((val) => !val)}
			>
				<div
					className="w-8 h-8 grid place-items-center rounded-full text-white text-sm "
					style={{
						background:
							"linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)",
					}}
				>
					OJ
				</div>
				<HamburguerIcon />
			</div>
			<HeaderUserDrop isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
};

export const HeaderUserDrop = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const popList: { icon: JSX.Element; label: string }[] = [
		{ icon: <AiOutlineSetting />, label: "Settings" },
		{ icon: <HiOutlineNewspaper />, label: "Purchase History" },
		{ icon: <GoGift />, label: "Refer and Earn" },
		{ icon: <AppsIcon />, label: "Integrations" },
		{ icon: <MdOutlineBugReport />, label: "Report Bug" },
		{ icon: <MdOutlineSwitchAccount />, label: "Switch Account" },
		{ icon: <PiSignOutLight />, label: "Sign Out" },
	];
	return (
		<Popup isOpen={isOpen} setIsOpen={setIsOpen}>
			<div>
				<div className="flex flex-row items-center gap-3 px-5 py-5">
					<div
						className="w-8 h-8 grid place-items-center rounded-full text-white text-sm "
						style={{
							background:
								"linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)",
						}}
					>
						OJ
					</div>
					<div>
						<p className="text-lg font-semibold text-[#131316] ">
							Olivier Jones
						</p>
						<p className="text-sm">olivierjones@gmail.com</p>
					</div>
				</div>
				{popList.map((item, ind) => (
					<div
						className="flex flex-row items-center gap-4 py-4 px-6 cursor-pointer bg-white hover:bg-[#131316] hover:text-white "
						onClick={() => setIsOpen(false)}
					>
						<span>{item.icon}</span>
						<span>{item.label}</span>
					</div>
				))}
			</div>
		</Popup>
	);
};
