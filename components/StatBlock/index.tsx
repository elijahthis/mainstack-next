import { prettifyMoney } from "@/utils/helperFuncs";
import { InfoIcon } from "../svgs";
import Loading from "../Loading";

interface StatBlockProps {
	label: string;
	value: number;
	loading?: boolean;
}

const StatBlock = ({ label, value, loading = false }: StatBlockProps) => {
	return (
		<div className="flex flex-col items-stretch gap-2">
			<div className="flex flex-row items-center gap-2 justify-between">
				<p>{label}</p>
				<InfoIcon />
			</div>
			{loading ? <Loading size={40} /> : <h2>USD {prettifyMoney(value)}</h2>}
		</div>
	);
};

export default StatBlock;
