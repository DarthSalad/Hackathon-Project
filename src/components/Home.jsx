import React from 'react'
import Login from './Login'
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


export default function Home() {
    const [user] = useAuthState(auth)

    function home(){
        const logout = () => {
            auth.signOut();
        }
        return(
            <>
            <h1>home</h1>
            <button onClick={logout}>logout</button>
            </>
        )
    }

    return (
        user ? home() : <Login/>
    )
}
