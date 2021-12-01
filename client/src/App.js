import Game from "./components/Game";


function App() {
  return (
    <div className="flex flex-col align-center items-center justify-center">
      <header className="flex font-semibold text-xl">
        RoboDash
      </header>
      <Game />
    </div>);
}

export default App;
