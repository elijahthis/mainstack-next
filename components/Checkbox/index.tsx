interface CheckboxProps {
	label: string;
	checked: boolean;
	onSelect: () => void;
}

const Checkbox = ({ label, checked, onSelect }: CheckboxProps) => {
	// const [checked, setChecked] = useState(false);

	return (
		<label className="flex flex-row items-center gap-3 p-[14px] cursor-pointer ">
			<input
				type="checkbox"
				name=""
				id=""
				checked={checked}
				onChange={(e) => {
					onSelect();
				}}
			/>
			<span className="text-base font-semibold text-[#131316] ">{label}</span>
		</label>
	);
};

export default Checkbox;
