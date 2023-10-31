"use client";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import LineChart from "@/components/LineChart";
import Modal from "@/components/Modal";
import StatBlock from "@/components/StatBlock";
import TransactionRow from "@/components/TransactionRow";
import FilterModal from "@/components/modals/FilterModal";
import {
	ChevronDownIcon,
	CloseIcon,
	DownloadIcon,
	TransactionsIcon,
} from "@/components/svgs";
import { transactionList } from "@/data/constants";
import { useState } from "react";

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
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<>
			<section>
				<div className="flex flex-row items-start gap-6 justify-between pb-6 mb-8 border-b border-[#EFF1F6] ">
					<div>
						<h3>24 Transactions</h3>
						<p className="text-sm">Your transactions for the last 7 days</p>
					</div>
					<div className="flex flex-row items-center gap-3 ">
						<Button size="md" dark={false}>
							<div className="flex flex-row items-center gap-1 pl-[6px] pr-[-4px]">
								<span>Filter</span>
								<span className="w-5 h-5 grid items-center bg-[#131316] text-white text-xs leading-[12px] rounded-full ">
									3
								</span>
								<ChevronDownIcon />
							</div>
						</Button>
						<Button size="md" dark={false}>
							<div className="flex flex-row items-center gap-1 pl-[6px] pr-[-4px]">
								<span>Export list</span>
								<DownloadIcon />
							</div>
						</Button>
					</div>
				</div>
				<div className="flex flex-col items-stretch gap-6 ">
					{/* <EmptyState
					title="No matching transaction found for the selected filter"
					message="Change your filters to see more results, or add a new product."
					icon={<TransactionsIcon />}
				/> */}
					{transactionList.map((transactionItem, ind) => (
						<TransactionRow data={transactionItem} key={ind} />
					))}
				</div>
			</section>
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
				<FilterModal />
			</Modal>
		</>
	);
};
