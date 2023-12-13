import AuthButtons from "./navbar-auth-buttons";
import NavLinks from "./navbar-links";


const NavigationItems = () => {
    return(
        <div className="flex justify-center items-center ps-10 w-full">
            <NavLinks />
            <div className="ml-auto">
                <AuthButtons />
            </div>
        </div>
    )
}

export default NavigationItems;

