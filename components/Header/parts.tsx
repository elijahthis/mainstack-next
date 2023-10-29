"use client";
import Link from "next/link";
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
import { cloneElement } from "react";
import { usePathname } from "next/navigation";

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
						className={`flex flex-row items-center gap-1 rounded-[100px] py-2 pl-[14px] pr-[18px] border ${
							isActive(navItem.link) ? "text-white bg-[#131316] " : ""
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

export const HeaderUser = () => (
	<div className="flex flex-row items-center gap-2 ">
		<div className="w-10 h-10 grid place-items-center cursor-pointer">
			<NotificationIcon />
		</div>
		<div className="w-10 h-10 grid place-items-center cursor-pointer">
			<ChatIcon />
		</div>
		<div className="rounded-[100px] bg-[#EFF1F6] flex flex-row items-center gap-2 py-1 pl-[5px] pr-3 cursor-pointer ">
			<div
				className="w-8 h-8 grid place-items-center rounded-full text-white text-sm "
				style={{
					background: "linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)",
				}}
			>
				OJ
			</div>
			<HamburguerIcon />
		</div>
	</div>
);
