import React from "react";
import firebase from "firebase/app";

export default function Login() {
  return (
    <div className="justify-center items-center flex h-screen">
      <div className="max-w-xs bg-white border p-4 rounded text-center">
        <p className="mb-3">
          This is a website to help you track your oscar movie watching and
          guess the winners.
        </p>
        <button
          className="bg-indigo-600 px-3 py-1 text-white rounded"
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
