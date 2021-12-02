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
                <header className="flex justify-between items-center font-semibold text-xl mx-5 mt-1">
                    <h1 className="text-2xl">
                        RoboDash⚡
                    </h1>
                    <span className="flex items-center justify-center gap-2">
                        <img
                            src={user.picture}
                            alt={user.nickname}
                            width="50px"
                            style={{ borderRadius: "50%" }} />
                        {user.name}
                    </span>
                </header>
                <div className="flex flex-col align-center items-center justify-center">
                    <Game />
                    <div className="mt-3">
                        <LogoutButton />
                    </div>
                </div>
            </>)
    )
}

export default Profile



