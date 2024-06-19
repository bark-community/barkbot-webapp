'use client';

import React, { useState } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, PublicKey, Transaction } from '@solana/web3.js';
import { TOKEN_2022_PROGRAM_ID, getOrCreateAssociatedTokenAccount, createTransferInstruction } from '@solana/spl-token';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for wallet modal
import IntegratedTerminal from '@/components/swap/integrated-terminal';

const SwapFeature: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [swapResult, setSwapResult] = useState<string | null>(null);
  const wallet = useWallet();
  const connection = new Connection(clusterApiUrl('mainnet-beta'));

  const handleSwap = async () => {
    if (!wallet.connected) {
      alert('Please connect your wallet first');
      return;
    }

    if (!amount) {
      alert('Please enter an amount to swap');
      return;
    }

    try {
      // Assume the swap involves two specific token mints
      const sourceTokenMint = new PublicKey('SOURCE_TOKEN_MINT_PUBLIC_KEY');
      const destinationTokenMint = new PublicKey('DESTINATION_TOKEN_MINT_PUBLIC_KEY');

      const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet.publicKey,
        sourceTokenMint,
        wallet.publicKey
      );

      const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        wallet.publicKey,
        destinationTokenMint,
        wallet.publicKey
      );

      const transaction = new Transaction().add(
        createTransferInstruction(
          sourceTokenAccount.address,
          destinationTokenAccount.address,
          wallet.publicKey,
          amount * 1e9,
          [],
          TOKEN_2022_PROGRAM_ID
        )
      );

      const signature = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');

      setSwapResult('Swap successful!');
    } catch (error) {
      console.error('Error swapping tokens:', error);
      setSwapResult('Swap failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-gray dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-custom-orange text-center">Swap Feature</h2>
        <WalletMultiButton className="mb-4 w-full" />
        <IntegratedTerminal
          rpcUrl="https://api.mainnet-beta.solana.com"
          formProps={{ fixedOutputMint: true, initialOutputMint: '6cQJMLNHE8SvLarrKmi38iKX31hzw7na77wnPCHRxR5z' }}
          simulateWalletPassthrough={true}
          strictTokenList={false}
          defaultExplorer="Solscan"
          useUserSlippage={true}
        />
        <div className="mt-8">
          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSwap}
            className="w-full px-4 py-2 bg-custom-orange text-white rounded hover:bg-black transition duration-300"
          >
            Swap Tokens
          </button>
          {swapResult && <p className="mt-4 text-center text-green-500">{swapResult}</p>}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const endpoint = clusterApiUrl('mainnet-beta');
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <SwapFeature />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
