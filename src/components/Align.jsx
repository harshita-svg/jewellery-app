import React, { useState, useEffect } from "react";
import { GiCrystalBall } from "react-icons/gi";
import { FaRegPaperPlane } from "react-icons/fa";
import { useAlign } from "../context/AlignContext";
import { products } from "../data/products"; // Your real jewellery list

const Align = () => {
  const { isOpen, setIsOpen } = useAlign();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    name: "",
    dob: "",
    tob: "",
    place: "",
  });

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getBotMessage = (step) => {
    switch (step) {
      case 0:
        return "Hello, beautiful soul! 🌒 What’s your name?";
      case 1:
        return "When were you born? ✨ (e.g. 14-03-2002)";
      case 2:
        return "At what time were you born? 🕰️ (optional)";
      case 3:
        return "Where were you born? 🌍 (optional)";
      case 4:
        return `Thank you, ${answers.name}. You may now ask me anything — and I’ll align the stars with your soul ✨`;
      default:
        return null;
    }
  };

  // Load chat from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("alignMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([{ from: "bot", text: getBotMessage(0) }]);
    }
  }, []);

  // Save chat to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("alignMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    const fields = ["name", "dob", "tob", "place"];

    if (step < fields.length) {
      const field = fields[step];
      setAnswers((prev) => ({ ...prev, [field]: input }));

      const nextStep = step + 1;
      setStep(nextStep);
      setInput("");

      setTimeout(() => {
        const botReply = getBotMessage(nextStep);
        setMessages([...newMessages, { from: "bot", text: botReply }]);
      }, 600);
    } else {
      // GPT interaction starts here
      setMessages(newMessages);
      setInput("");

      const basicPrompt = `
User Details:
- Name: ${answers.name}
- DOB: ${answers.dob}`;

      const extendedPrompt =
        answers.tob && answers.place
          ? `
- TOB: ${answers.tob}
- Place: ${answers.place}`
          : "";

      const finalPrompt = `
${basicPrompt}
${extendedPrompt}

User Message: ${input}

Jewellery Collection:
${products
  .map(
    (p) => `- ${p.name} (${p.gem}, ${p.type}) | Zodiac: ${p.zodiac.join(", ")}`
  )
  .join("\n")}

Suggest the best matching jewellery item from the list above based on the user's zodiac or astrology data. Speak like a mystical luxury assistant.`;

      try {
        const res = await fetch("http://localhost:5000/api/chatgpt-recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userDetails: answers,
            message: finalPrompt,
            products: products.map((p) => ({
              name: p.name,
              zodiac: p.zodiac,
              gem: p.gem,
              type: p.type,
              intention: p.intention,
            })),
          }),
        });

        const data = await res.json();
        setMessages((prev) => [...prev, { from: "bot", text: data.message }]);
      } catch (error) {
        console.error("GPT Error:", error);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Sorry, the stars are taking a break. 🌧️" },
        ]);
      }
    }
  };

  return (
    <>
      {/* Floating Crystal Trigger */}
      <div
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 p-1 flex items-center justify-center shadow-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl text-purple-500">
          <GiCrystalBall />
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-4 font-bold text-lg">
            Align Chat
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gradient-to-br from-white via-indigo-50 to-purple-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-xl max-w-xs ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-gray-800 self-start"
                    : "bg-purple-200 text-black self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center border-t px-4 py-3 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1 px-4 py-2 border rounded-full text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-3 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full"
            >
              <FaRegPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Align;
