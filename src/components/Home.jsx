import React, { useState } from "react";
import "../css_files/Home.css";
import AESAlgorithm from "./AES_algorithm";
import backgroundImage from "../assets/images/Background.jpg";
import RSAAlgorithm from "./RSA_algorithm";

function Home() {
  const [useAES, setUseAES] = useState(false);

  const HandleAESclick = () => {
    console.log("AES button is clicked");
    setUseAES(true);
  };

  if (useAES) {
    return <AESAlgorithm />;
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* <button onClick={HandleAESclick} className="my-button-class">
          Go to AES Algorithm
        </button> */}
      </div>

      <div>
        <div style={{ marginTop: "-700px" }}>
          <p className="text-[3.5rem] font-semibold text-[#f2895c] ml-[10%]">
            Encyptor
          </p>
          <p className="text-[1.5rem] ml-[10%]">
            This is the secure file sysytem which is used for Encyption and
            decrption of files so that they can store and send securely , for
            this we use different algorithms like AES , tripleDES , RSA
          </p>
        </div>

        <div
          style={{ marginLeft: "20rem", marginTop: "5rem" }}
          className="flex flex-wrap gap-24 cursor-pointer"
        >
          <div
            onClick={HandleAESclick}
            className="group h-[180px] w-[260px] bg-white rounded-[5px] border border-gray-500 
             rounded-tl-[6px] rounded-tr-[6px] text-center text-black px-[10px] flex flex-col items-center 
             font-nunito transition-transform transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div 
              className="h-[50px] w-[258px] bg-orange-400 border-b border-gray-500 rounded-tl-[5px] rounded-tr-[5px] text-center 
                 text-[1.45rem] font-semibold text-white flex justify-center items-center font-nunito 
                 transition-colors duration-300 group-hover:bg-orange-400"
            >
              <p className="text-[1rem] ml-[7%]">AES</p>
            </div>
            <p className="transition-colors duration-300 group-hover:text-black mt-6">
              AES is an algorithm that is used for encryption and decryption of
              files
            </p>
          </div>

          <div
            className="group h-[180px] w-[260px] bg-white rounded-[5px] border border-gray-500 
             rounded-tl-[6px] rounded-tr-[6px] text-center text-black px-[10px] flex flex-col items-center 
             font-nunito transition-transform transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className="h-[50px] w-[258px] bg-orange-400 border-b border-gray-500 rounded-tl-[5px] rounded-tr-[5px] text-center 
                 text-[1.45rem] font-semibold text-white flex justify-center items-center font-nunito 
                 transition-colors duration-300 group-hover:bg-orange-400"
            >
              <p className="text-[1rem] ml-[7%]">TripleDES</p>
            </div>
            <p className="transition-colors duration-300 group-hover:text-black mt-6">
              TripleDES is an algorithm that is used for encryption and
              decryption of files
            </p>
          </div>

          <div
            className="group h-[180px] w-[260px] bg-white rounded-[5px] border border-gray-500 
             rounded-tl-[6px] rounded-tr-[6px] text-center text-black px-[10px] flex flex-col items-center 
             font-nunito transition-transform transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className="h-[50px] w-[258px] bg-orange-400 border-b border-gray-500 rounded-tl-[5px] rounded-tr-[5px] text-center 
                 text-[1.45rem] font-semibold text-white flex justify-center items-center font-nunito 
                 transition-colors duration-300 group-hover:bg-orange-400"
            >
              <p className="text-[1rem] ml-[7%]">RSA</p>
            </div>
            <p className="transition-colors duration-300 group-hover:text-black mt-6">
              RSA is an algorithm that is used for encryption and decryption of
              files
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
