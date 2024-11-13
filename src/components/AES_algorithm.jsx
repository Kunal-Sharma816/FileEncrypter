import React, { useState } from "react";

export default function AESAlgorithm() {
  const [keySize, setKeySize] = useState(128);
  const [key, setKey] = useState("");
  const [exportedKey, setExportedKey] = useState("");
  const [uploadedFileText, setUploadedFileText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  // Function to generate AES key
  const generateKey = async () => {
    const cryptoKey = await window.crypto.subtle.generateKey(
      { name: "AES-GCM", length: keySize },
      true,
      ["encrypt", "decrypt"]
    );
    const exported = await window.crypto.subtle.exportKey("raw", cryptoKey);
    const exportedKeyString = btoa(
      String.fromCharCode(...new Uint8Array(exported))
    );
    setKey(cryptoKey);
    setExportedKey(exportedKeyString);
  };

  // Handling file upload and showing file content in textarea
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const text = await file.text();
    setUploadedFileText(text);
  };

  // Encrypt and Decrypt functions can be implemented as needed
  const encryptText = () => {
    // Sample encryption functionality placeholder
    setEncryptedText(`Encrypted: ${uploadedFileText}`);
  };

  const decryptText = () => {
    // Sample decryption functionality placeholder
    setDecryptedText(`Decrypted: ${encryptedText}`);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8 ">
        Use AES for File Encryption and Decryption
      </h1>

      {/* Key Generation and File Upload Section */}
      <div className="flex flex-row gap-10 mb-10">
        {/* Key Generation */}
        <div className="flex flex-row gap-6">
          {/* Select Key Size */}
          <div className="flex flex-row gap-4 items-center">
            <label className="font-medium">Select Key Size</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={keySize}
              onChange={(e) => setKeySize(parseInt(e.target.value))}
            >
              <option value={128}>128</option>
              <option value={192}>192</option>
              <option value={256}>256</option>
            </select>
          </div>

          {/* Display Generated Key */}
          <div className="flex flex-row gap-10">
            <button
              onClick={generateKey}
              className="bg-blue-500 text-white py-2 px-48 rounded-md mt-1"
            >
              Generate AES Key
            </button>
            <textarea
              className="border border-gray-300 rounded-md w-full mt-2 p-2"
              readOnly
              value={exportedKey}
              placeholder="Generated key will appear here"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Encryption Section */}
      <div className="flex flex-row gap-10 mb-10">
        {/* Encryption Left Side */}
        <div className="flex flex-col gap-6">
          {/* Enter Key and Upload File */}
          <div className="flex flex-row gap-4">
            {/* Enter Key */}
            <div>
              <label className="font-medium">Enter Key</label>
              <textarea
                className="border border-gray-300 rounded-md p-2 w-full"
                readOnly
                value={exportedKey}
                placeholder="Key for encryption"
              ></textarea>
            </div>

            {/* Upload File */}
            <div>
              <label className="font-medium">Upload File</label>
              <input
                type="file"
                onChange={handleFileUpload}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Show Plain Text and Encrypt Button */}
          <textarea
            className="border border-gray-300 rounded-md p-8 w-full"
            readOnly
            value={uploadedFileText}
            placeholder="Plain text from file"
          ></textarea>
          <div className="flex flex-row gap-44">
          <button
            onClick={encryptText}
            className="bg-blue-500 text-white py-2 px-24 rounded-md mt-1"
          >
            Encrypt
          </button>
          <button className="bg-green-500 text-white py-2 px-10 rounded-md mt-1">
            Download Encrypted File
          </button>
          </div>
        </div>

        {/* Decryption Right Side */}
        <div className="flex flex-col gap-6">
          {/* Enter Key and Upload Encrypted File */}
          <div className="flex flex-row gap-4">
            {/* Enter Key */}
            <div>
              <label className="font-medium">Enter Key</label>
              <textarea
                className="border border-gray-300 rounded-md p-2 w-full"
                readOnly
                value={exportedKey}
                placeholder="Key for decryption"
              ></textarea>
            </div>
            {/* Upload Encrypted File */}
            <div>
              <label className="font-medium">Upload Encrypted File</label>
              <input
                type="file"
                onChange={handleFileUpload}
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Show Cipher Text and Decrypt Button */}
          <textarea
            className="border border-gray-300 rounded-md p-8 w-full"
            readOnly
            value={encryptedText}
            placeholder="Cipher text"
          ></textarea>
          <button
            onClick={decryptText}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-1"
          >
            Decrypt
          </button>
        </div>
      </div>

      {/* Result Section for Decrypted Text */}
      <div className="flex flex-col gap-2">
        <textarea
          className="border border-gray-300 rounded-md p-6 w-full"
          readOnly
          value={decryptedText}
          placeholder="Decrypted text will appear here"
        ></textarea>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-2">
          Download Decrypted File
        </button>
      </div>
    </div>
  );
}
