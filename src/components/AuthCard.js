import { useState } from "react";
import { useSetAtom } from "jotai";
import { atomUser } from "../data/atoms";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import {useCartActions} from "../utils/useCartActions.js"

export default function Auth() {
  const setUser = useSetAtom(atomUser);

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const navigate = useNavigate();
  
  const {fetchUserCart} = useCartActions()

  async function handleSubmit(e) {
    e.preventDefault();

    const url = mode === "login" ? "/auth/login" : "/users";

    const payload =
      mode === "login" ? { email, password } : { name, email, password };

    try {
      const { data } = await api.post(url, payload);
      setUser({
        ...data.user,
      });
      if (data.user?.id) {
        fetchUserCart();
        navigate("/");
      }
    } catch (err) {
      console.error("Auth error:", err.response?.data || err.message);
    }
  }

  return (
    <div>
      <div style={styles.card}>
        <h2>{mode === "login" ? "Login" : "Register"}</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {mode === "register" && (
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p style={styles.switch}>
          {mode === "login" ? (
            <>
              No account?{" "}
              <button onClick={() => setMode("register")}>Register</button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setMode("login")}>Login</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: 360,
    padding: 20,
    borderRadius: 12,
    background: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  switch: {
    marginTop: 10,
    textAlign: "center",
  },
};
