import { prettifyMoney } from "@/utils/helperFuncs";
import { InfoIcon } from "../svgs";

interface StatBlockProps {
	label: string;
	value: number;
}

const StatBlock = ({ label, value }: StatBlockProps) => {
	return (
		<div className="flex flex-col items-stretch gap-2">
			<div className="flex flex-row items-center gap-2 justify-between">
				<p>{label}</p>
				<InfoIcon />
			</div>
			<h2>USD {prettifyMoney(value)}</h2>
		</div>
	);
};

export default StatBlock;
