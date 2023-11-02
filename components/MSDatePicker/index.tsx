import { useState } from "react";
import DatePicker from "react-datepicker";

const MSDatePicker = () => {
	const [startDate, setStartDate] = useState<Date>(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date: Date) => setStartDate(date)}
			dateFormat="dd MMM yyyy"
            wrapperClassName={``}
		/>
	);
};

export default MSDatePicker;
