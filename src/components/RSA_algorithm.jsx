import React, { useState } from "react";

export default function RSAAlgorithm() {
  const [keySize, setKeySize] = useState(1024);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [uploadedFileText, setUploadedFileText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  // Function to generate RSA key pair
  const generateKeyPair = async () => {
    const keyPair = await window.crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: keySize,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    );

    // Export keys for display
    const exportedPublicKey = await window.crypto.subtle.exportKey("spki", keyPair.publicKey);
    const exportedPrivateKey = await window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);

    setPublicKey(btoa(String.fromCharCode(...new Uint8Array(exportedPublicKey))));
    setPrivateKey(btoa(String.fromCharCode(...new Uint8Array(exportedPrivateKey))));
  };

  // Handling file upload and showing file content in textarea
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const text = await file.text();
    setUploadedFileText(text);
  };

  // Encrypt text using the public key
  const encryptText = async () => {
    const encoder = new TextEncoder();
    const encodedMessage = encoder.encode(uploadedFileText);

    const publicKeyArray = Uint8Array.from(atob(publicKey), (c) => c.charCodeAt(0));
    const cryptoPublicKey = await window.crypto.subtle.importKey(
      "spki",
      publicKeyArray,
      { name: "RSA-OAEP", hash: "SHA-256" },
      false,
      ["encrypt"]
    );

    const encryptedBuffer = await window.crypto.subtle.encrypt(
      { name: "RSA-OAEP" },
      cryptoPublicKey,
      encodedMessage
    );
    setEncryptedText(btoa(String.fromCharCode(...new Uint8Array(encryptedBuffer))));
  };

  // Decrypt text using the private key
  const decryptText = async () => {
    const encryptedArray = Uint8Array.from(atob(encryptedText), (c) => c.charCodeAt(0));

    const privateKeyArray = Uint8Array.from(atob(privateKey), (c) => c.charCodeAt(0));
    const cryptoPrivateKey = await window.crypto.subtle.importKey(
      "pkcs8",
      privateKeyArray,
      { name: "RSA-OAEP", hash: "SHA-256" },
      false,
      ["decrypt"]
    );

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      { name: "RSA-OAEP" },
      cryptoPrivateKey,
      encryptedArray
    );
    const decoder = new TextDecoder();
    setDecryptedText(decoder.decode(decryptedBuffer));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
        Use RSA for File Encryption and Decryption
      </h1>

      {/* Key Generation and File Upload Section */}
      <div className="flex flex-row gap-10 mb-10">
        <div className="flex flex-row gap-6">
          <div className="flex flex-row gap-4 items-center">
            <label className="font-medium">Select Key Size</label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={keySize}
              onChange={(e) => setKeySize(parseInt(e.target.value))}
            >
              <option value={512}>512</option>
              <option value={1024}>1024</option>
              <option value={2048}>2048</option>
              <option value={3072}>3072</option>
              <option value={4096}>4096</option>
            </select>
          </div>

          <button
            onClick={generateKeyPair}
            className="bg-blue-500 text-white py-2 px-48 rounded-md mt-1"
          >
            Generate RSA Key Pair
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <textarea
          className="border border-gray-300 rounded-md p-2"
          readOnly
          value={publicKey}
          placeholder="Public key will appear here"
        ></textarea>
        <textarea
          className="border border-gray-300 rounded-md p-2"
          readOnly
          value={privateKey}
          placeholder="Private key will appear here"
        ></textarea>
      </div>

      <div className="flex flex-row gap-10 mb-10">
        <div className="flex flex-col gap-6">
          <div>
            <label className="font-medium">Upload File</label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          <textarea
            className="border border-gray-300 rounded-md p-8 w-full"
            readOnly
            value={uploadedFileText}
            placeholder="Plain text from file"
          ></textarea>

          <button
            onClick={encryptText}
            className="bg-blue-500 text-white py-2 px-24 rounded-md mt-1"
          >
            Encrypt
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <textarea
            className="border border-gray-300 rounded-md p-8 w-full"
            readOnly
            value={encryptedText}
            placeholder="Encrypted text"
          ></textarea>

          <button
            onClick={decryptText}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-1"
          >
            Decrypt
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          className="border border-gray-300 rounded-md p-6 w-full"
          readOnly
          value={decryptedText}
          placeholder="Decrypted text will appear here"
        ></textarea>
      </div>
    </div>
  );
}
