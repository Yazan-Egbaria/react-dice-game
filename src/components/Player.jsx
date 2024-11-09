const Player = ({ name, score, roundScore, isActive }) => {
  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center justify-between bg-gradient-to-t from-emerald-800 to-emerald-100 py-16 ${isActive ? "opacity-100" : "opacity-25"}`}
    >
      <header
        id="playerHeader"
        className="flex flex-col items-center justify-center font-bold"
      >
        <h2 className="text-4xl text-emerald-950">{name}</h2>
        <span className="text-xl font-bold text-emerald-950">
          Score: {score}
        </span>
      </header>

      <div
        id="currentScore"
        className="flex w-fit flex-col items-center justify-center gap-1 rounded bg-emerald-400 p-8 text-white"
      >
        <h3 className="text-xl font-bold">Current</h3>
        <span className="text-xl font-bold">{roundScore}</span>
      </div>
    </div>
  );
};

export default Player;
