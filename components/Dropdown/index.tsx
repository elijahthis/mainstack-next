import { Dispatch, SetStateAction, useRef, useState } from "react";
import Checkbox from "../Checkbox";
import { DropdownChevron } from "../svgs";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";

interface DropdownProps {
	optionList: string[];
	selectedOptions: string[];
	setSelectedOptions: Dispatch<SetStateAction<string[]>>;
	ind?: number;
}

const Dropdown = ({
	optionList,
	selectedOptions,
	setSelectedOptions,
	ind = 0,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const wrapperRef0 = useRef(null);
	const wrapperRef1 = useRef(null);
	const wrapperRef2 = useRef(null);
	const wrapperRef3 = useRef(null);

	useOutsideAlerter(eval(`wrapperRef${ind}`), () => {
		setIsOpen(false);
	});

	return (
		<div className="relative" ref={eval(`wrapperRef${ind}`)}>
			<div
				className={`border border-[3px] flex flex-row items-center justify-between p-[14px] rounded-xl border cursor-pointer ${
					isOpen
						? " border-[#131316] bg-white "
						: "border-[#EFF1F6]  bg-[#EFF1F6]  "
				} `}
				onClick={() => setIsOpen((val) => !val)}
			>
				<p className="text-sm text-[#131316] font-medium w-max truncate ">
					{selectedOptions.join(", ")}
				</p>
				<DropdownChevron />
			</div>
			<div
				className={` bg-white rounded-xl absolute left-0 z-10 w-full overflow-hidden ${
					isOpen
						? "h-max p-2 top-[calc(100%+10px)] opacity-1"
						: "h-0 p-0 top-0 opacity-0"
				} `}
				style={{
					boxShadow:
						"0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)",
					transition: "opacity 0.3s ease-in-out",
				}}
			>
				{optionList.map((optionItem) => (
					<Checkbox
						label={optionItem}
						checked={selectedOptions.includes(optionItem)}
						onSelect={() => {
							if (selectedOptions.includes(optionItem)) {
								const newList = [
									...selectedOptions.filter((item) => item !== optionItem),
								];
								setSelectedOptions(newList);
							} else {
								const newList = [...selectedOptions, optionItem];
								setSelectedOptions(newList);
							}
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
