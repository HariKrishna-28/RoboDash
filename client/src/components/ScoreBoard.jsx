import React from 'react'

const ScoreBoard = ({ score }) => {
    return (
        <div className="mt-2">
            <span className="font-semibold bg-black rounded p-2 text-white "> Your Score : {score}</span>
        </div>
    )
}

export default ScoreBoard
