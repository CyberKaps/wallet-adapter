import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

// the useWallet hook gives u access to the wallet variable inside the Airdrop component

// because I wrapped the Airdrop component inside the WalletProvider in App.jsx
export function Airdrop() {

    const wallet = useWallet();
    const { connection } = useConnection();
    const [amount, setAmount] = useState(0);

    async function sendAirdropToUser() {

       await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
       alert("Airdrop successful");

    }
    
    return <div>
        <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}