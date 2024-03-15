import { verifyMessage } from 'viem';
import { address, walletClient } from './config';

const signature = await walletClient.signMessage({
  account: address,
  message: 'hello world',
});

const valid = await verifyMessage({
  address: address,
  message: 'hello world',
  signature,
});

export default [`Signature: ${signature}`, `Valid: ${valid}`];
