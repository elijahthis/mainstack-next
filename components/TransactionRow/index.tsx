import {
	capitalizeFirstLetter,
	formatDate,
	prettifyMoney,
} from "@/utils/helperFuncs";
import { InflowIcon, OutflowIcon } from "../svgs";

const TransactionRow = ({ data }: { data: any }) => {
	return (
		<div className="flex flex-row items-center gap-[14.5px] ">
			<span>{data.type === "deposit" ? <InflowIcon /> : <OutflowIcon />}</span>
			<div>
				<p className="font-medium text-[#131316] mb-[4px] ">
					{data.type === "deposit"
						? data?.metadata?.product_name ?? "Deposit"
						: "Withdrawal"}
				</p>
				<p className="font-medium text-sm ">
					{data.type === "deposit"
						? data?.metadata?.name
						: capitalizeFirstLetter(data?.status)}
				</p>
			</div>
			<div className="ml-auto ">
				<h6 className="text-base text-right">USD {data.amount}</h6>
				<p className="text-sm font-medium text-right">
					{formatDate(data.date)}
				</p>
			</div>
		</div>
	);
};

export default TransactionRow;
