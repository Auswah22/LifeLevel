const express = require("express");
const cors = require("cors");
const path = require("path");
const { GameEngine } = require("./game/gameEngine");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const games = new Map();

// Health check
app.get("/", (req, res) => {
  res.json({ message: "LifeLevel API Running" });
});

// Create new game
app.post("/game/create", (req, res) => {
  const { playerId, playerName } = req.body;
  if (!playerId || !playerName) {
    res.status(400).json({ error: "Missing playerId or playerName" });
    return;
  }

  const game = new GameEngine(playerId, playerName);
  games.set(playerId, game);
  res.json({ message: "Game created", player: game.getPlayer() });
});

// Start level
app.post("/game/:playerId/start-level", (req, res) => {
  const playerId = req.params.playerId;
  const { levelId } = req.body;

  const game = games.get(playerId);
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  try {
    game.startLevel(levelId);
    res.json({ message: "Level started", player: game.getPlayer() });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Make decision
app.post("/game/:playerId/decision", (req, res) => {
  const playerId = req.params.playerId;
  const { decisionId } = req.body;

  const game = games.get(playerId);
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  const success = game.makeDecision(decisionId);
  res.json({ 
    success, 
    player: game.getPlayer(),
    message: success ? "Decision made" : "Cannot afford this choice"
  });
});

// Add reflection
app.post("/game/:playerId/reflection", (req, res) => {
  const playerId = req.params.playerId;
  const { text } = req.body;

  const game = games.get(playerId);
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  game.addReflection(text);
  res.json({ message: "Reflection saved", player: game.getPlayer() });
});

// Get player
app.get("/game/:playerId", (req, res) => {
  const playerId = req.params.playerId;
  const game = games.get(playerId);
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  res.json(game.getPlayer());
});

// Advance level
app.post("/game/:playerId/advance", (req, res) => {
  const playerId = req.params.playerId;
  const game = games.get(playerId);
  if (!game) {
    res.status(404).json({ error: "Game not found" });
    return;
  }

  const success = game.advanceLevel();
  res.json({ 
    success, 
    message: success ? "Advanced to next level" : "Cannot advance yet",
    player: game.getPlayer()
  });
});

app.listen(PORT, () => {
  console.log(`🎮 LifeLevel running at http://localhost:${PORT}`);
});