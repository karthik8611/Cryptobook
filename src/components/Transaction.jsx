import { useState } from 'react';

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleWalletAddressChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const walletAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletAddress.trim() || !walletAddress.match(walletAddressRegex)) {
      setError('Please enter a valid Ethereum wallet address (0x...)');
      return;
    }

    const parsedAmount = parseFloat(amount);
    const minAmount = 0;
    const maxAmount = 10000;
    if (isNaN(parsedAmount) || parsedAmount < minAmount || parsedAmount > maxAmount) {
      setError('Please enter a valid amount between 0 and 10,000');
      return;
    }

    console.log('Wallet Address:', walletAddress);
    console.log('Amount:', parsedAmount);

    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="walletAddress" className="block text-gray-700">Wallet Address:</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={handleWalletAddressChange}
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Submit
      </button>
    </form>
  );
};

export default Transaction;

