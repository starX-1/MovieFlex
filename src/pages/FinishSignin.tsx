import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default function FinishSignIn() {
    const [status, setStatus] = useState("Checking sign-in link...");
    const navigate = useNavigate();

    useEffect(() => {
        async function completeSignIn() {
            try {
                if (isSignInWithEmailLink(auth, window.location.href)) {
                    let email = window.localStorage.getItem("emailForSignIn");

                    if (!email) {
                        email = window.prompt("Please enter your email for confirmation");
                    }

                    if (email) {
                        const result = await signInWithEmailLink(auth, email, window.location.href);
                        window.localStorage.removeItem("emailForSignIn");

                        // Optionally store user info
                        console.log("User signed in:", result.user);

                        setStatus("✅ Sign-in successful! Redirecting...");
                        setTimeout(() => navigate("/"), 2000); // or dashboard
                    } else {
                        setStatus("❌ No email found.");
                    }
                } else {
                    setStatus("❌ Invalid sign-in link.");
                }
            } catch (error) {
                console.error("Sign-in error", error);
                setStatus("❌ Sign-in failed. Try again.");
            }
        }

        completeSignIn();
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <h4 className="text-white">{status}</h4>
        </div>
    );
}
