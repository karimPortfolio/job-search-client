'use client'

import { Provider } from 'react-redux';
import store from '../../redux/store';


const ProfileLayout = ({
    children
}: {
    children:React.ReactNode
}) => {
    return(
        <Provider store={store}>
            <main>
                {children}
            </main>
        </Provider>
    )

}

export default ProfileLayout;
