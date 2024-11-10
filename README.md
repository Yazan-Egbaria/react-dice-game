# Dice Game

## Game Overview

- The game is a turn-based dice game for two players.
- Each player rolls two dice during their turn, and their score for the round accumulates.
- If a player rolls a **double six**, they lose all their accumulated round score for that turn and the next player gets their turn.
- A player can choose to “Hold,” which means their **roundScore** is added to their **global score**, and the turn is passed to the other player.
- The first player to reach or exceed a customizable **winning score** wins the game.
- Players can reset the game anytime by creating a new game.

## Game Rules

1. **Two Players**: The game involves two players.
   - Each player has an **id**, **name**, **score**, and **roundScore**.
2. **Rolling Dice**:

   - Players roll 2 dice per turn.
   - If both dice show **6**, the player loses their **roundScore** for that turn and it's the next player's turn.
   - Add the dice values to the player’s current **roundScore**.

3. **Holding Turn**:

   - A player can choose to “Hold,” in which case their **roundScore** is added to their **global score**.
   - After holding, the game moves to the next player's turn.

4. **Winning Condition**:
   - The first player to reach or exceed the predefined **winningScore** (default: 100) wins the game.
5. **Customizable Winning Score**:
   - Players can input a new value for the **winningScore** at the start of the game.
6. **New Game**:
   - Players can start a new game whenever they want. This resets scores and round progress.

## Data Structure

We will need to store the following data for each player:

- **id**: A unique identifier for each player (e.g., `1` or `2`).
- **name**: The name of the player (e.g., `Player 1`, `Player 2`).
- **score**: The total global score, which accumulates over multiple rounds.
- **roundScore**: The score accumulated for the current round.

```js
const players = [
  { id: 1, name: "Player 1", score: 0, roundScore: 0 },
  { id: 2, name: "Player 2", score: 0, roundScore: 0 },
];
```

## Functions and Logic

### New Game:

- Reset all scores (both roundScore and score).
- Set the first player as the active player.
- Reset the dice values.

### Roll Dice:

- Randomly generate two dice values.
- If both dice are 6, the player loses their round score.
- Add the dice values to the player’s current roundScore.

### Hold Turn:

- Add the roundScore to the player’s global score.
- If the roundScore is added, the turn ends and the next player’s turn starts.

### End Game:

- After each turn, check if any player's score is greater than or equal to the winningScore.
- If a player wins, show an alert and stop the game.

## UI Elements

**Player Information:**

- Display each player’s name, roundScore, and score.
- Highlight the active player.

**Dice Display:**

- Show the dice values each time the dice are rolled.

**Buttons:**

- New Game: Resets the game and starts a new one.
- Roll Dice: Rolls the dice for the current player.
- Hold: Ends the current player's turn and adds the round score to their global score.

## Sample Flow

1. Players start the game by rolling the dice.
2. Player 1 rolls the dice, and the result is displayed.
3. If Player 1 rolls a double six, they lose their round score, and it’s Player 2’s turn.
4. Player 1 decides to Hold, their round score is added to their global score, and it’s Player 2’s turn.
5. After several turns, one player reaches the winning score which is **100**.
6. An alert is shown declaring the winner, and the game stops.
