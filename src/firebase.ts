// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ add this

const firebaseConfig = {
    apiKey: "AIzaSyBgN_xXGvbSBFF-oqqbud_51CsKb1Bw0Yc",
    authDomain: "movieflex-bd6af.firebaseapp.com",
    projectId: "movieflex-bd6af",
    storageBucket: "movieflex-bd6af.firebasestorage.app",
    messagingSenderId: "848074713983",
    appId: "1:848074713983:web:5609b10da827d933d6c84a",
    measurementId: "G-8JK4C4RDNF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Add this line and export auth
export const auth = getAuth(app);
