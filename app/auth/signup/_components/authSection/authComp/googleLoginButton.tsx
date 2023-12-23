'use client'

import { googleFailure, googleSuccess } from "@/redux/slices/auth/googleOauthSlice";
import { useAppDispatch } from "@/redux/store";
import  GoogleLogin from  "@stack-pulse/next-google-login"
import { GoogleLogo } from "./googleLogo";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


const GoogleLoginButton = ({isShows}: any) => {

    const clientId: string | undefined = typeof process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID !== 'undefined' ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID : '';
    const response = useSelector( (state: any) => state.googleOAuth );
    const dispatch = useAppDispatch();
    const router = useRouter();

    const button = useRef<HTMLButtonElement>(null);

    useEffect( () => {
        button.current?.click();
        if (response.isSuccess)
        {
            router.push('/');
        }
    },[response, button, router])

    const onSuccess = async (res: any) => {
        dispatch(
            googleSuccess({res})
        )
    }

    const onFailure = () => {
        dispatch(
            googleFailure()
        )
    }

    if (isShows)
    {
        return null;
    }

    return <GoogleLogin
            clientId={clientId}
            render={renderProps  => (
                <button
                ref={button}
                onClick={renderProps.onClick}  
                disabled={renderProps.disabled}  
                type="button"  
                className="login-with-google-btn flex justify-center items-center w-[92%] sm:w-[420px]  h-[60px]
                bg-gray-800 text-white rounded-full hover:shadow-lg hover:opacity-80 transition-all 
                duration-600"
                >
                <GoogleLogo />
                <span className='ml-2'>Sign up with Google </span>
                </button>
            )}
            buttonText="Sign up with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            />
}

export default GoogleLoginButton;
