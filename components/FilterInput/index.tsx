import { ReactNode } from "react";

interface FilterInputProps {
	label: string;
	children: ReactNode;
}

const FilterInput = ({ label, children }: FilterInputProps) => {
	return (
		<div className="flex flex-col items-stretch gap-3">
			<h6>{label}</h6>
			{children}
		</div>
	);
};

export default FilterInput;
