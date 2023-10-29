import logo from "@/assets/images/mainstack-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavigation, HeaderUser } from "./parts";

const Header = () => {
	return (
		<header className="p-4 pb-0 fixed top-0 w-full bg-transparent">
			<div className="header-ring flex flex-row items-center gap-4 justify-between p-3 pl-6 rounded-[100px] bg-white ">
				<Link href={"/"}>
					<Image src={logo} width={36} height={36} alt="Mainstack Logo" />
				</Link>
				<HeaderNavigation />
				<HeaderUser />
			</div>
		</header>
	);
};

export default Header;
