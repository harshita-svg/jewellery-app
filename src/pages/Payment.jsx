import React, { useState } from "react";

const Payment = () => {
  const [selected, setSelected] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleContinue = () => {
    if (!selected) return alert("Please select a payment method");
    setOrderPlaced(true);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-6 px-4">
      {!orderPlaced ? (
        <>
          {/* Left: Payment Method */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

            {[
              "UPI",
              "Credit/Debit Card",
              "Net Banking",
              "Cash on Delivery",
            ].map((option) => (
              <div
                key={option}
                onClick={() => setSelected(option)}
                className={`p-3 mb-3 rounded-md border cursor-pointer ${
                  selected === option
                    ? "border-pink-600 bg-pink-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  checked={selected === option}
                  onChange={() => setSelected(option)}
                  className="mr-2"
                />
                {option}
              </div>
            ))}

            {/* Conditional Fields */}
            {selected === "UPI" && (
              <input
                type="text"
                placeholder="Enter your UPI ID"
                className="w-full mt-4 p-2 border rounded-md"
              />
            )}

            {selected === "Credit/Debit Card" && (
              <div className="space-y-3 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-md"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    className="w-1/2 p-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border rounded-md"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            )}

            {selected === "Net Banking" && (
              <select className="w-full mt-4 p-2 border rounded-md">
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis</option>
              </select>
            )}

            <button
              onClick={handleContinue}
              className="mt-6 w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700"
            >
              Continue
            </button>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-[#fff0f5] p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-gray-800">
              <div className="flex justify-between">
                <span>Items (3)</span>
                <span>₹3,499</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">−₹800</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹2,699</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="col-span-2 text-center bg-green-100 p-10 rounded-xl">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            ✅ Payment Successful!
          </h2>
          <p className="text-lg">Your order has been placed with {selected}.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
