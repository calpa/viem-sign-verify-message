import { verifyMessage } from 'viem';
import { address, walletClient } from './config';

const message = `
Welcome to Web3!

Click to ign in and accept the Web3 Terms of Service.

This request will not trigger a blockchain transaction or cost any gas fees.
`;

const signature = await walletClient.signMessage({
  account: address,
  message: message,
});

const valid = await verifyMessage({
  address: address,
  message: message,
  signature,
});

export default [`Signature: ${signature}`, `Message: ${message}`, `Valid: ${valid}`];
