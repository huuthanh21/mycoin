import { API_ENDPOINT } from "@/utils/constants";

async function fetchRandomPrivateKey(): Promise<string> {
	const response = await fetch(`${API_ENDPOINT}/wallet/random-private-key`);
	const data = await response.json();
	return data.privateKey;
}

async function fetchRandomMnemonic(): Promise<string> {
	const response = await fetch(`${API_ENDPOINT}/wallet/random-mnemonic`);
	const data = await response.json();
	return data.mnemonic;
}

export { fetchRandomMnemonic, fetchRandomPrivateKey };
