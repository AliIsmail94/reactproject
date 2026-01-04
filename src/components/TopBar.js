import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { atomUser } from "../data/atoms";
import UserDropdown from "./UserDropdown";
import CartDropdown from "../components/CartDropdown";
import { useState } from "react";

function TopBar() {
  const user = useAtomValue(atomUser);
  const [open, setOpen] = useState(false);
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span>⚡ 24/7 Support</span>
        <span>📦 Fast Shipping</span>
      </div>
      <div className="top-bar-right">
        {user.id ? (
          <UserDropdown user={user} />
        ) : (
          <Link to="/login" className="link-btn">
            Login / Register
          </Link>
        )}
        {/* ✅ anchor wrapper */}
        <div className="cart-dropdown-anchor">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="cart-btn"
          >
            🛒 Cart
          </button>

          {open && (
            <div className="cart-dropdown-popover">
              <CartDropdown open={open} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
