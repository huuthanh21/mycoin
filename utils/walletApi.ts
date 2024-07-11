import { API_ENDPOINT } from "@/utils/constants";

async function fetchRandomPrivateKey() {
	const response = await fetch(`${API_ENDPOINT}/wallet/random-private-key`);
	const data = await response.json();
	return data.privateKey;
}

export { fetchRandomPrivateKey };
