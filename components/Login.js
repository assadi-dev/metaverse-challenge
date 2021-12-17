import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>Login</h1>
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-6">
        <Image
          className="object-cover rounded-full profil-image"
          src="/assets/images/profile.jpg"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5 font-bold login-btn "
        >
          Enter to Metaverse
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
