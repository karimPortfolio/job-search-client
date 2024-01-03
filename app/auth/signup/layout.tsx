'use client'

import Navbar from "@/components/Navbar/navbar"
import { Provider } from "react-redux"
import store from '../../../redux/store';


const SignUpLayout = ({
    children
}: {children: React.ReactNode}) => {
    return(
        <>
            <Provider store={store}>
                <main>
                    {children}
                </main>
            </Provider>
        </>
    )
}

export default SignUpLayout;
