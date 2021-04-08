declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_FIREBASE_API_KEY: string;
      REACT_APP_FIREBASE_APP_ID: string;
      REACT_APP_FIREBASE_AUTH_DOMAIN: string;
      REACT_APP_FIREBASE_DATABASE_URL: string;
      REACT_APP_FIREBASE_MEASUREMENT_ID: string;
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
      REACT_APP_FIREBASE_PROJECT_ID: string;
      REACT_APP_FIREBASE_STORAGE_BUCKET: string;
    }
  }
}

export const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
