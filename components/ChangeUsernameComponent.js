import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import ModalUsername from "./ModalUsername";

function ChangeUsernameComponent() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [openModal, setOpenModal] = useState(false);

  const closeModal = (arg) => {
    setOpenModal(arg);
  };

  return (
    <div className="text-sm absolute top-5 right-1 ">
      <button
        className="py-2 px-5 rounded-full text-slate-800 text-[12px] md:text-[16px] font-[600] uppercase change-username-btn"
        onClick={() => setOpenModal(true)}
      >
        Change your Username{" "}
      </button>
      {openModal && (
        <ModalUsername isOpen={openModal} onCloseModal={closeModal} />
      )}
    </div>
  );
}

export default ChangeUsernameComponent;
