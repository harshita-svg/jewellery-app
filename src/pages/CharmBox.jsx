import React from "react";

const CharmBox = ({ zodiac = [], intention = [], gem }) => {
  return (
    <div className="bg-white border border-purple-200 rounded-xl p-4 shadow-sm text-sm text-gray-700 space-y-2">
      <p>
        <strong className="text-purple-600">Gemstone:</strong> {gem}
      </p>
      <p>
        <strong className="text-purple-600">Zodiac Signs:</strong>{" "}
        {zodiac.join(", ")}
      </p>
      <p>
        <strong className="text-purple-600">Intentions:</strong>{" "}
        {intention.join(", ")}
      </p>
    </div>
  );
};

export default CharmBox;
