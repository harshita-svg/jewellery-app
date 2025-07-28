const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.post("/chatgpt-recommend", async (req, res) => {
  const { userDetails, message, products } = req.body;

  const prompt = `
You are a premium jewellery recommendation assistant.

User details:
- Name: ${userDetails.name}
- DOB: ${userDetails.dob}
- TOB: ${userDetails.tob}
- Place: ${userDetails.place}

Message: "${message}"

Available Products:
${products.map((p) =>
  `- ${p.name} (${p.gem}, ${p.type}) for zodiac: ${p.zodiac.join(", ")}`
).join("\n")}

Based on the zodiac, gem, and intentions, recommend the most suitable jewellery from the list above in a mystical and classy tone.
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    res.json({ message: data.choices[0].message.content });
  } catch (err) {
    console.error("GPT Error:", err);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;
