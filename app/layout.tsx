import Header from "@/components/Header";
import "./globals.scss";
import "react-datepicker/dist/react-datepicker.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
	title: "Mainstack Dashboard",
	description: "Dashboard for Mainstack creators",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative">
				<Header />
				<Sidebar />
				<main className="px-[9.757vw] py-16 contentWrap ">{children}</main>
			</body>
		</html>
	);
}
