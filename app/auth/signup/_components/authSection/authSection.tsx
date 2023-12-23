'use client'

import { useState } from 'react'
import ReturnBtn from "./returnBtn";
import AuthContainer from './authComp/authContainer';


const AuthSection = () => {

    const [isShows, setIsShows] = useState<boolean>(false);

    const handleShowForm = () => {
        setIsShows(!isShows);
    }

    return(
        <section className="lg:col-span-2 flex justify-center overflow-y-scroll
        items-center flex-col h-screen fit-content lg:pl-32 py-10">
            <ReturnBtn
            isShows = {isShows}
            handleShowForm = {handleShowForm}
            />
            <h1 
            className="text-start lg:w-full font-DM-sans font-bold text-3xl">
                Sign up to <span>Easy Job</span>
            </h1>
            <AuthContainer
            isShows = {isShows}
            handleShowForm = {handleShowForm}
            />
        </section>
    )
}

export default AuthSection;

