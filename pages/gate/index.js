import { useState } from 'react';

export default function GateDashboard() {
  const [status, setStatus] = useState(""); // "" | "in" | "out"

  const handleCheckIn = () => {
    setStatus("in");
    // You can call your API to update DB here too
  };

  const handleCheckOut = () => {
    setStatus("out");
    // API call here as well
  };

  return (
    <div className="gate-container">
      <h1>Gate Dashboard</h1>
      <input type="text" className="student-id-input" placeholder="Enter Student ID" />
      <div className="gate-buttons">
        <button className="checkin-btn" onClick={handleCheckIn}>Check In</button>
        <button className="checkout-btn" onClick={handleCheckOut}>Check Out</button>
      </div>
      <div className="status-container">
        {status === "in" && <p className="in-status">✅ Checked In</p>}
        {status === "out" && <p className="out-status">🚪 Checked Out</p>}
      </div>
    </div>
  );
}
