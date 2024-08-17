"use client";
import React, { useState } from "react";

const CreateCertificateModal = ({ onSubmit, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [to, setTo] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const callbackUrl = "https://postman-echo.com/post?";
//sdf   const fixedContractAddress = "0xC523A5A3E2A037c9c9fd81fB962db1f87A1ea4A3";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Audit Data:', {
        walletAddress: walletAddress,
        to:to,
        contractAddress: contractAddress,
        file: file,
        name: name,
        description: description,
        callbackUrl: callbackUrl,
      });
    onSubmit({ 
        walletAddress, 
        to, 
        contractAddress, 
        file, 
        name, 
        description, 
        callbackUrl 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Create Certificate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block mb-2"> Wallet Address</label>
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
            <label htmlFor="to" className="block mb-2">Recipient Address</label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contractAddress" className="block mb-2">Contract Address</label>
            <input
              type="text"
              id="contractAddress"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="file" className="block mb-2">
              file
            </label>
            <input
              type="file"
              id="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
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

export default CreateCertificateModal;
