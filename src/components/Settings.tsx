import React, { useState } from "react";
import firebase from "firebase/app";

import { user } from "../types";

type SettingsProps = {
  user: user;
};

export default function Settings({ user }: SettingsProps) {
  const [open, setOpen] = useState(false);
  return !open ? (
    <button
      className="fixed top-0 right-0 w-12 h-12 p-2 border-l border-b bg-gray-50"
      onClick={() => setOpen(true)}
    >
      <img
        src={user.photoURL}
        className="rounded-full"
        alt={user.displayName}
      />
    </button>
  ) : (
    <div
      className="justify-center items-center flex fixed bg-gray-500 bg-opacity-50 top-0 left-0 right-0 bottom-0"
      onClick={() => {
        setOpen(false);
      }}
    >
      <div
        className="bg-white border p-4 rounded text-center relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="absolute right-0 top-0 p-1 border-l border-b opacity-50 hover:opacity-100 hover:bg-gray-50"
          onClick={() => {
            setOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src={user.photoURL}
          className="rounded-full mx-auto mb-3 w-16 block"
          alt={user.displayName}
        />
        <p className="mb-3">
          You are logged in as <strong>{user.displayName}</strong>.
        </p>
        <button
          className="bg-indigo-600 px-3 py-1 text-white rounded"
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
