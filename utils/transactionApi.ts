import { API_ENDPOINT } from "@/utils/constants";

async function sendTransaction(
	sender: string,
	recipient: string,
	amount: number,
	privateKey: string
) {
	const response = await fetch(`${API_ENDPOINT}/transaction/send`, {
		body: JSON.stringify({ amount, privateKey, recipient, sender }),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});
	const data = await response.json();
	return data as {
		amount: number;
		id: number;
		recipient: string;
		sender: string;
		timestamp: string;
	};
}

async function fetchAllTransactions() {
	const response = await fetch(`${API_ENDPOINT}/transaction/getAll`);
	const data = await response.json();
	return data as {
		amount: number;
		id: number;
		recipient: string;
		sender: string;
		timestamp: string;
	}[];
}

export { fetchAllTransactions, sendTransaction };
