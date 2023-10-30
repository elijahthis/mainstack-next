import { prettifyMoney } from "@/utils/helperFuncs";
import { InflowIcon, OutflowIcon } from "../svgs";

const TransactionRow = ({ data }: { data: ITransaction }) => {
	return (
		<div className="flex flex-row items-center gap-[14.5px] ">
			<span>{data.inflow ? <InflowIcon /> : <OutflowIcon />}</span>
			<div>
				<p className="font-medium text-[#131316] mb-[4px] ">{data.title}</p>
				<p className="font-medium text-sm ">
					{data.inflow ? data?.name : data?.status}
				</p>
			</div>
			<div className="ml-auto ">
				<h6 className="text-base text-right">USD {data.amount}</h6>
				<p className="text-sm font-medium text-right">{data.date}</p>
			</div>
		</div>
	);
};

export default TransactionRow;
