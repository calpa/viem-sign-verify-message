import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

export const walletClient = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum!),
});

const [address] = await window.ethereum.request({
  method: 'eth_requestAccounts',
});

export { address };
