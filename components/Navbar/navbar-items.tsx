import { useSelector } from "react-redux";
import AuthButtons from "./navbar-auth-buttons";
import NavLinks from "./navbar-links";


const NavigationItems = () => {

    const Auth = useSelector( (state: any) => state.auth );

    return(
        <div className="flex justify-center items-center ps-10 w-full">
            <NavLinks 
            auth={Auth.AUTH}
            />
            <div className="ml-auto">
                <AuthButtons />
            </div>
        </div>
    )
}

export default NavigationItems;

