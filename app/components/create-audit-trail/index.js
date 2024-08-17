"use client";
import React, { useState } from "react";

const patientRecord = ({ onSubmit, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [metadata, setMetadata] = useState("");
  const [callback_url, setCallback_url] = useState("");

//   const fallbackUrl = "https://postman-echo.com/post?";
//   const fixedContractAddress = "0xC523A5A3E2A037c9c9fd81fB962db1f87A1ea4A3";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ walletAddress, contractAddress, metadata, callback_url });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Mint Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contractAddress" className="block mb-2">
              Contract Address
            </label>
            <input
              type="text"
              id="contractAddress"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">
              Metadata
            </label>
            <input
              type="text"
              id="metadata"
              value={metadata}
              onChange={(e) => setMetadata(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="callback_url" className="block mb-2">
              Callback URL
            </label>
            <input
              type="text"
              id="callback_url"
              value={callback_url}
              readOnly
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Mint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default patientRecord;
