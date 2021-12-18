import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Blob from "../public/assets/icons/bubble.svg";
import Title from "./Title";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-6 ">
        <Title />

        <Image
          className="object-cover rounded-full profil-image bg-slate-400/[0.3]"
          src={Blob}
          height={150}
          width={150}
        />
        <button
          onClick={authenticate}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-4 px-10 font-bold login-btn "
        >
          Enter
        </button>
      </div>
      <div className="w-full h-screen ">
        <Image
          className="blur-sm"
          src="/assets/images/2c6a0928885925.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
