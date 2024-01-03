'use client'

import Navbar from '@/components/Navbar/navbar';
import store from '@/redux/store';
import { Provider } from 'react-redux';


const JobsLayout = ({
    children
}: {
    children:React.ReactNode
}) => {
    
    return(
        <Provider store={store}>
            <Navbar />
            <main>
                {children}
            </main>
        </Provider>
    )

}

export default JobsLayout;

