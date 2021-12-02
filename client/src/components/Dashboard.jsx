import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';
import Game from './Game';
import LogoutButton from './LogoutButton';

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && (
            <>
                <header
                    className="flex justify-between items-center font-semibold text-xl px-5 py-3"
                    style={{ backgroundColor: "#393e46" }}>
                    <h1 className="text-2xl">
                        <span className="flex">
                            RoboDash
                            <p className="lg:hidden">
                                ⚡
                            </p>
                        </span>
                    </h1>
                    <span className="flex items-center align-center justify-center text-xl gap-2">

                        <img
                            className="mr-2 lg:mr-0"
                            src={user.picture}
                            alt={user.nickname}
                            width="35px"
                            style={{ borderRadius: "50%" }} />

                        <div className="hidden lg:block">
                            <LogoutButton />
                        </div>
                        {/* <p className="hidden lg:block">
                            {user.name}
                        </p> */}
                    </span>
                </header>
                <div className="flex flex-col align-center items-center justify-center">
                    <Game />
                    <div className="mt-3 lg:hidden">
                        <LogoutButton />
                    </div>

                </div>
            </>)
    )
}

export default Profile



