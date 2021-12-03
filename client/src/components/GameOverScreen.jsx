import React from 'react'

export const GameOverScreen = ({ AlterRender, score }) => {
    return (
        <div className="flex flex-col align-center justify-center items-center h-screen gap-5">
            <h1 className="text-center text-2xl">Game over! Your Score is {score}</h1>
            <button
                className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded align-center"
                style={{ width: "250px", outline: "none", border: "0" }}
                onClick={() => AlterRender()}
            >
                Play Again
            </button>
        </div>
    )
}
