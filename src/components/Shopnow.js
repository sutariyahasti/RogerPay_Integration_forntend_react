import React from "react";
import { useNavigate } from "react-router-dom";

function Shopnow() {
    const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/payment");
  };
  return (
    <div>
      
      <button onClick={handleShopNow} style={{ marginTop: "20px" }}>
        Shop Now
      </button>
    </div>
  );
}

export default Shopnow;
