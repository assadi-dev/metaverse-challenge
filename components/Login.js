import React, { useState } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Blob from "../public/assets/icons/bubble.svg";
import Title from "./Title";
import Head from "next/head";
import Link from "next/link";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();
  const [textBtn, setTextbtn] = useState();
  console.log(isAuthenticating);
  return (
    <div className="bg-black relative">
      <Head>
        <title>Login to Metaverse</title>
      </Head>
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
          className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg py-4 px-10 font-bold login-btn ${
            isAuthenticating && "animate-login-btn"
          }`}
        >
          {isAuthenticating ? "Connecting " : "Enter"}
        </button>
        <div>
          <p className="text-white">
            You don't have MetaMask account click 👉{" "}
            <Link href="https://metamask.io/" passHref>
              <a
                className="text-orange-300 font-bold underline decoration-solid hover:text-orange-600"
                target="_blank"
              >
                Here
              </a>
            </Link>{" "}
            to create.
          </p>
        </div>
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
