import AuthCard from "../components/AuthCard";
import "../styles/LoginPage.css";
import { useAtomValue } from "jotai";
import { atomUser } from "../data/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const user = useAtomValue(atomUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="login-page">
      <AuthCard />
    </div>
  );
}

export default LoginPage;
