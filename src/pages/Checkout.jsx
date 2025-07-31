import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    state: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    };
    const handlePlaceOrder = (e) => {
      e.preventDefault();
      navigate("/payment");
    };

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {!orderPlaced ? (
        <>
          {/* Left: Address Form */}
          <form
            onSubmit={handlePlaceOrder}
            className="bg-white shadow-xl rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-2xl font-bold mb-2">Delivery Address</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            ></textarea>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition w-full"
            >
              Place Order
            </button>
          </form>

          {/* Right: Price Summary */}
          <div className="bg-[#fff0f5] p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Price (3 items)</span>
              <span>₹3,499</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span className="text-green-600">−₹800</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total Amount</span>
              <span>₹2,699</span>
            </div>
          </div>
        </>
      ) : (
        <div className="col-span-2 text-center bg-green-50 p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🎉 Order Placed Successfully!
          </h2>
          <p className="text-lg">
            Thank you, <strong>{formData.name}</strong>! Your jewellery will be
            delivered soon to:
          </p>
          <p className="mt-2 italic">
            {formData.address}, {formData.state} - {formData.pincode}
          </p>
          <button
            onClick={() => setOrderPlaced(false)}
            className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-md"
          >
            Place Another Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
