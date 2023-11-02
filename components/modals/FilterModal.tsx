import { statusList, transactionTypeList } from "@/data/constants";
import Button from "../Button";
import Dropdown from "../Dropdown";
import FilterInput from "../FilterInput";
import { CloseIcon } from "../svgs";
import { useState } from "react";
import MSDatePicker from "../MSDatePicker";

const FilterModal = () => {
	const dateFilters = ["Today", "Last 7 days", "This month", "Last 3 months"];

	const [selectedStatus, setSelectedStatus] = useState(statusList);
	const [selectedTransactionType, setSelectedTransactionType] =
		useState(transactionTypeList);

	return (
		<div className="h-full flex flex-col items-stretch">
			<div className="py-5 px-6 flex flex-row items-center gap-3 justify-between ">
				<h3>Filter</h3>
				<CloseIcon />
			</div>
			<div className="flex flex-row items-center gap-2 justify-between px-[22px] pt-2 pb-[28px] ">
				{dateFilters.map((item, ind) => (
					<button
						key={ind}
						className="py-[10px] px-[18px] bg-white border border-[#EFF1F6] rounded-[100px] text-sm text-[#131316] font-semibold w-max "
					>
						{item}
					</button>
				))}
			</div>
			<div className="px-[22px] flex flex-col items-stretch gap-6 ">
				<FilterInput label="Date Range">
					<div className="grid grid-cols-2 gap-[6px]">
						<div>
							<MSDatePicker />
						</div>
						<div>
							<MSDatePicker />
						</div>
					</div>
				</FilterInput>
				<FilterInput label="Transaction Type">
					<Dropdown
						optionList={transactionTypeList}
						selectedOptions={selectedTransactionType}
						setSelectedOptions={setSelectedTransactionType}
						ind={1}
					/>
				</FilterInput>
				<FilterInput label="Transaction Status">
					<Dropdown
						optionList={statusList}
						selectedOptions={selectedStatus}
						setSelectedOptions={setSelectedStatus}
						ind={2}
					/>
				</FilterInput>
			</div>
			<div className="mt-auto grid grid-cols-2 gap-3 py-5 px-6">
				<Button
					style={{
						backgroundColor: "white",
						color: "#131316",
						border: "1px solid #EFF1F6",
					}}
				>
					Clear
				</Button>
				<Button>Apply</Button>
			</div>
		</div>
	);
};

export default FilterModal;
