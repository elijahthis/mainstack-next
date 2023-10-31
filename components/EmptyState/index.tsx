import { ReactNode } from "react";
import Button from "../Button";
import { TransactionsIcon } from "../svgs";

interface EmptyStateProps {
	title?: string;
	message?: string;
	icon?: ReactNode;
}

const EmptyState = ({
	title = "Empty",
	message = "Nothing to see here",
	icon = <TransactionsIcon />,
}: EmptyStateProps) => {
	return (
		<section className="grid place-items-center py-8">
			<div className="max-w-[370px]">
				<div className="mb-5">{icon}</div>
				<h2 className="mb-[10px]">{title}</h2>
				<p className="mb-8">{message}</p>
				<Button size="md" dark={false}>
					Clear Filter
				</Button>
			</div>
		</section>
	);
};

export default EmptyState;
