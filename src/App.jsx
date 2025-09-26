import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './components/Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

// airdrop
function App() {
  

  // create ur own rpc url with alchemy
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/SpqDighQfeFuPzoONzzefOfzxeVBSPaO"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>
            hii there 
          </div>
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
