import { useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import { atomUser } from "../data/atoms";
import "../styles/UserDropdown.css";
import { useNavigate } from "react-router-dom";

export default function UserDropdown({ user }) {
  const setUser = useSetAtom(atomUser);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function logout() {
    setUser({});
    setOpen(false);
    navigate("/");
  }

  function goAdmin() {
    setOpen(false);
    navigate("/admin-console");
  }

  if (!user || !user.name) return null;

  return (
    <div className="user-dropdown" ref={rootRef}>
      <button
        className="user-dropdown-trigger"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="user-dropdown-name">{user.name}</span>
        <span className={`user-dropdown-chevron ${open ? "open" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="user-dropdown-menu">
          {user.is_admin ? (
            <button className="user-dropdown-item" onClick={goAdmin}>
              Admin Console
            </button>
          ) : (
            <></>
          )}

          <button className="user-dropdown-item danger" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
