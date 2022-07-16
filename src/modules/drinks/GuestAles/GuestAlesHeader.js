import React from "react";
import "./GuestAlesHeader.css";
function GuestAlesHeader({ changed }) {
  return (
    <div className="guest_ales_header">
      <h3>Our Current Guest Ales</h3>
      {/* <p>{changed}</p> */}
    </div>
  );
}

export default GuestAlesHeader;
