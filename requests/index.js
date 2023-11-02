import { request } from "@/utils/axios";

export const fetchUser = async () => {
	try {
		const res = await request.get("user");
		console.log(res);
		return res;
	} catch (err) {
		// toast.error(err?.response?.data?.error);
		console.log(err?.response?.data);
		throw err;
	}
};

export const fetchWallet = async () => {
	try {
		const res = await request.get("wallet");
		console.log(res);
		return res;
	} catch (err) {
		// toast.error(err?.response?.data?.error);
		console.log(err?.response?.data);
		throw err;
	}
};

export const fetchTransactions = async () => {
	try {
		const res = await request.get("transactions");
		console.log(res);
		return res;
	} catch (err) {
		// toast.error(err?.response?.data?.error);
		console.log(err?.response?.data);
		throw err;
	}
};
