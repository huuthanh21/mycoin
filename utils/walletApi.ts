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

async function fetchWalletFromPrivateKey(privateKey: string) {
	const response = await fetch(
		`${API_ENDPOINT}/wallet/getFromPrivateKey/${privateKey}`
	);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data as { address: string; stake: number };
}

async function fetchWalletFromMnemonic(mnemonic: string) {
	const response = await fetch(
		`${API_ENDPOINT}/wallet/getFromMnemonic/${mnemonic}`
	);
	if (!response.ok) {
		return null;
	}
	const data = await response.json();
	return data as { address: string; privateKey: string; stake: number };
}
async function fetchBalance(address: string) {
	const response = await fetch(`${API_ENDPOINT}/wallet/balance/${address}`);
	const data = await response.json();
	return data.balance as number;
}

async function createWalletFromPrivateKey(privateKey: string) {
	const response = await fetch(`${API_ENDPOINT}/wallet/createFromPrivateKey`, {
		body: JSON.stringify({ privateKey }),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});
	const data = await response.json();
	return data as { address: string };
}

async function createWalletFromMnemonic(mnemonic: string) {
	const response = await fetch(`${API_ENDPOINT}/wallet/createFromMnemonic`, {
		body: JSON.stringify({ mnemonic }),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});
	const data = await response.json();
	return data as { address: string; privateKey: string };
}

export {
	createWalletFromMnemonic,
	createWalletFromPrivateKey,
	fetchBalance,
	fetchRandomMnemonic,
	fetchRandomPrivateKey,
	fetchWalletFromMnemonic,
	fetchWalletFromPrivateKey,
};
