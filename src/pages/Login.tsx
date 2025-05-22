import { useState } from "react";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logging in as ${email}`);
    };

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-card shadow">
                <h2 className="login-title text-center">🎬 MovieFlex Login</h2>
                <p className="text-center text-warning mb-4">Welcome back! Please login to continue</p>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
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
                    <div className="mb-4">
                        <label className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-warning btn-lg">
                            Login
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
