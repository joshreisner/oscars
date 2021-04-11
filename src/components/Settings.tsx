import React from "react";
import firebase from "firebase/app";

type SettingsProps = {
  user: firebase.User;
};

export function Settings({ user }: SettingsProps) {
  return (
    <div className="border-t-2 text-center py-5">
      {user.displayName && (
        <p className="mb-3">
          <span>You are logged in as</span>
          <strong title={user.email ? user.email : undefined} className="ml-1">
            {user.displayName}
          </strong>
          <span>.</span>
        </p>
      )}
      <button
        className="bg-indigo-600 px-3 py-1 text-white rounded"
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
}
