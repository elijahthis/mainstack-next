export const prettifyMoney = (value: number): string => {
	if (value < 1000000)
		return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
	else
		return Intl.NumberFormat("en-US", {
			notation: "compact",
			maximumFractionDigits: 1,
		}).format(value);
};
