import { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../firebase"; // Make sure this is set up properly
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const actionCodeSettings = {
            url: "http://localhost:5173/finishSignIn", // make sure this matches your route
            handleCodeInApp: true,
        };

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem("emailForSignIn", email);
            alert("✅ Sign-in link sent to your email!");
        } catch (error) {
            console.error("Error sending email link", error.message);
            alert("❌ Failed to send sign-in link. Try again.");
        }

        setLoading(false);
    };

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-card shadow">
                <h2 className="login-title text-center">🎬 MovieFlex Login</h2>
                <p className="text-center text-warning mb-4">Enter your email and we'll send you a login link</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="form-label text-white">Email</label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-warning btn-lg" disabled={loading}>
                            {loading ? "Sending link..." : "Send Login Link"}
                        </button>
                    </div>
                    <p className="text-center text-light small">
                        Don't have an account? <a href="/register" className="text-warning">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
