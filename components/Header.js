import React from "react";
import { useMoralis } from "react-moralis";
import Blob from "../public/assets/icons/bubble.svg";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsernameComponent from "./ChangeUsernameComponent";

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto  hidden  lg:inline-grid">
          {" "}
          <Image
            className="object-cover rounded-full profil-image bg-slate-400/[0.3]"
            src={Blob}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          {/* Avatar */}
          <div className="relative h-48 w-48  lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar username="" logoutOnPress={false} />
          </div>
          {/* Welcome Message */}
          <h1 className="text-3xl">Welcome to PAPAFAM Mataverse</h1>
          {/* Username*/}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Change username*/}
          <ChangeUsernameComponent />
        </div>
      </div>
    </div>
  );
}

export default Header;
