import * as sol from '@solana/web3.js';

export interface SolState {
  installed: boolean;
  running: boolean;
  keyId: string;
}

export enum Net {
  Localhost = 'localhost',
  Dev = 'dev',
  Main = 'main',
  Test = 'test',
  MainnetBeta = 'mainnet-beta',
}

export type WBAccount = {
  pubKey: string;
  humanName: string;
  art?: string;
  data?: Buffer;
  executable?: boolean;
  sol?: number;
  lamports?: number;
  owner?: sol.PublicKey;
};

export type AccountsResponse = {
  rootKey: string;
  accounts: WBAccount[];
};
