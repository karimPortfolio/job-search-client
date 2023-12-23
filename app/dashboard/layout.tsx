import store from '../../redux/store';
import { Provider } from 'react-redux';

const DashboardLayout = ({
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

export default DashboardLayout;
