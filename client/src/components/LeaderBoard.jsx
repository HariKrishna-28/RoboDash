import React, { useState, useEffect } from 'react'
import '../styles/TableStyles.css'
import axios from 'axios'
import ScaleLoader from "react-spinners/ScaleLoader";
const baseUrl = "https://robo-dash-28.herokuapp.com"
// const baseUrl = "http://localhost:5000"



const LeaderBoard = ({ renderBoard, RenderHome }) => {
    const [leaderBoardData, SetLeaderBoardData] = useState([])

    useEffect(() => {
        axios.get(`${baseUrl}/ScorBoard`)
            .then((response) => {
                SetLeaderBoardData(response.data)
                // console.log(leaderBoardData)
            })
    }, [])


    return (


        <div
            className="mt-20"


        //  className="flex flex-col items-center justify-center h-screen gap-2"
        >

            {/* <div id="check">
                vvaka
            </div> */}
            {/* <h1 className="text-center">LeaderBoard</h1>
             */}
            <div>
                {leaderBoardData.length !== 0 ?

                    <table className=" flex flex-col rounded-md lg:rounded-lg overflow-hidden lg:table-auto ">
                        <thead style={{ backgroundColor: "#393e46" }}>
                            <tr className='bg-gray-600 text-white p-2'>
                                <th >Position</th>
                                <th >User</th>
                                <th >Name</th>
                                <th >Score</th>
                            </tr>
                        </thead>

                        {leaderBoardData.map((scoreInfo, index) => {
                            return (
                                <tbody>
                                    <tr
                                        key={index}
                                        className="bg-white text-black">
                                        <td>{parseInt(index) + 1}</td>
                                        <td className="flex align-center justify-center"><img src={scoreInfo.UserImage} alt="data" /></td>
                                        <td>{scoreInfo.UserName}</td>
                                        <td>{scoreInfo.UserScore}</td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </table>
                    : (
                        <div className="flex align-center justify-center">
                            <ScaleLoader
                                color="#393e46" />
                        </div>
                    )}
            </div>

            <div className="flex flex-col lg:flex-row align-center justify-center items-center gap-4 mt-3 ">

                <button
                    className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded align-center"
                    style={{ width: "250px", outline: "none", border: "0" }}
                    onClick={() => renderBoard()}>
                    Play Again
                </button>

                <button
                    className="bg-orange-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded align-center"
                    style={{ width: "250px", outline: "none", border: "0" }}
                    onClick={() => RenderHome()}>
                    Home
                </button>
            </div>

        </div>
    )
}

export default LeaderBoard
