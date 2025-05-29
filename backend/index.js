const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8080;

app.get("/matches", async (req, res) => {
  try {
    const response = await axios.get("https://www.scorebat.com/video-api/v3/");

    const matches = response.data.response.map((match) => ({
      title: match.title,
      date: match.date,
      competition: match.competition,
    }));

    return res.status(200).json(matches.slice(0, 20));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
