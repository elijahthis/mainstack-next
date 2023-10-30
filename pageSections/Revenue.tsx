import Button from "@/components/Button";
import LineChart from "@/components/LineChart";
import StatBlock from "@/components/StatBlock";
import TransactionRow from "@/components/TransactionRow";
import { ChevronDownIcon, DownloadIcon } from "@/components/svgs";
import { transactionList } from "@/data/constants";

export const ChartStats = () => {
	return (
		<section
			className="grid mb-[82px]"
			style={{ gridTemplateColumns: "765px 1fr" }}
		>
			<LineChart />
			<div className="flex flex-col items-stretch gap-8 ">
				<StatBlock label="Ledger Balance" value={0} />
				<StatBlock label="Total Payout" value={55080} />
				<StatBlock label="Total Revenue" value={175580} />
				<StatBlock label="Pending Payout" value={0} />
			</div>
		</section>
	);
};

export const Transactions = () => {
	return (
		<section>
			<div className="flex flex-row items-start gap-6 justify-between pb-6 mb-8 border-b border-[#EFF1F6] ">
				<div>
					<h3>24 Transactions</h3>
					<p className="text-sm">Your transactions for the last 7 days</p>
				</div>
				<div className="flex flex-row items-center gap-3 ">
					<Button size="md" dark={false}>
						<div className="flex flex-row items-center gap-1">
							<span>Filter</span>
							<span className="w-5 h-5 grid items-center bg-[#131316] text-white text-xs leading-[12px] rounded-full ">
								3
							</span>
							<ChevronDownIcon />
						</div>
					</Button>
					<Button size="md" dark={false}>
						<div className="flex flex-row items-center gap-1">
							<span>Export list</span>
							<DownloadIcon />
						</div>
					</Button>
				</div>
			</div>
			<div className="flex flex-col items-stretch gap-6 ">
				{transactionList.map((transactionItem, ind) => (
					<TransactionRow data={transactionItem} key={ind} />
				))}
			</div>
		</section>
	);
};
