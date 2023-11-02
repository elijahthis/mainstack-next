export const getToken = () => {
	return localStorage.getItem("MStack");
};

export const setAuthToken = (token) => {
	localStorage.setItem("MStack", token);
};
