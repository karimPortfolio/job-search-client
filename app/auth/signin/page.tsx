'use client'

import { useEffect } from "react";
import { Provider } from "react-redux";
import store from '../../../redux/store';
import SideImgSection from "./_components/SideImgSection/SideImgSection";
import AuthSection from "./_components/authSection/authSection";



const SignInPage = () => {

    useEffect( () => {
        document.title = 'Sign in | Easy Job';
    },[])

    return(
        // <Provider store={store}>
            <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
                <SideImgSection/>
                <AuthSection/>
            </div>
        // </Provider>
    );
}

export default SignInPage;
