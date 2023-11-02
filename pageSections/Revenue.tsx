"use client";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import LineChart from "@/components/LineChart";
import Loading from "@/components/Loading";
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
import { fetchTransactions, fetchWallet } from "@/requests";
import { useEffect, useState } from "react";

export const ChartStats = () => {
	const [wallet, setWallet] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(true);

	const fetchWalletData = async () => {
		setLoading(true);
		try {
			const res = await fetchWallet();
			console.log(res);
			setWallet(res?.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWalletData();
	}, []);

	return (
		<section
			className="lg:grid flex flex-col items-stretch  mb-[82px]"
			style={{ gridTemplateColumns: "765px 1fr" }}
		>
			<LineChart />
			<div className="flex flex-col items-stretch gap-8 ">
				<StatBlock
					label="Ledger Balance"
					value={wallet?.balance ?? "-"}
					loading={loading}
				/>
				<StatBlock
					label="Total Payout"
					value={wallet?.total_payout ?? "-"}
					loading={loading}
				/>
				<StatBlock
					label="Total Revenue"
					value={wallet?.total_revenue ?? "-"}
					loading={loading}
				/>
				<StatBlock
					label="Pending Payout"
					value={wallet?.pending_payout ?? "-"}
					loading={loading}
				/>
			</div>
		</section>
	);
};

export const Transactions = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [transactionArr, setTransactionArr] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchTransactionData = async () => {
		setLoading(true);
		try {
			const res = await fetchTransactions();
			console.log(res);
			setTransactionArr(res?.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTransactionData();
	}, []);

	return (
		<>
			<section>
				<div className="flex lg:flex-row flex-col items-start gap-6 justify-between pb-6 mb-8 border-b border-[#EFF1F6] ">
					<div>
						<h3>24 Transactions</h3>
						<p className="text-sm">Your transactions for the last 7 days</p>
					</div>
					<div className="flex lg:flex-row flex-col items-center gap-3 ">
						<Button size="md" dark={false} onClick={() => setModalIsOpen(true)}>
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
					{loading ? (
						<Loading size={60} />
					) : (
						transactionArr?.map((transactionItem: any, ind: number) => (
							<TransactionRow data={transactionItem} key={ind} />
						))
					)}
				</div>
			</section>
			<Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
				<FilterModal setIsOpen={setModalIsOpen} />
			</Modal>
		</>
	);
};
