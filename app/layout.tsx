import Header from "@/components/Header";
import "./globals.css";
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
				{children}
			</body>
		</html>
	);
}
