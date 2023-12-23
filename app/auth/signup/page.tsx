'use client'
import { useEffect } from 'react';
import { Provider } from "react-redux";
import store from '../../../redux/store';
import TypographySection from "./_components/typographySection/typographySection";
import AuthSection from "./_components/authSection/authSection";


const SignUpPage = () => {

    useEffect( () => {
        document.title = 'Sign up | Easy Job';
    },[])

    return (
        <Provider store = {store}>
            <div className="grid lg:grid-cols-3 h-screen">
                <TypographySection/>
                <AuthSection/>
            </div>
        </Provider>
    );
}

export default SignUpPage;
