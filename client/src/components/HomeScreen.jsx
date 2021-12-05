import React from 'react'
import LogoutButton from "./LogoutButton"
const HomeScreen = ({ RenderGame, RenderLeaderBoard }) => {
    return (
        <div className="flex flex-col items-center justify-center align-center gap-3 mt-40">
            <h1>Welcome to RoboDash</h1>
            <button
                className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded align-center"
                style={{ width: "250px", outline: "none", border: "0" }}
                onClick={() => RenderGame()}

            >
                Start Game
            </button>

            <button
                className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded align-center"
                style={{ width: "250px", outline: "none", border: "0" }}
                onClick={() => RenderLeaderBoard()}

            >
                LeaderBoards
            </button>

            <div className="block mt-20 lg:hidden">
                <LogoutButton />
            </div>

        </div>
    )
}

export default HomeScreen
