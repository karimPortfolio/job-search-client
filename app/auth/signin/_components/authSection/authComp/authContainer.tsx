import Link from "next/link";
import FormContainer from "./authForm/form-container";
import { AuthTypography, CostumeHrLine } from "./extraComp";
import GoogleLoginButton from "./googleLoginButton";


const AuthContainer = () => {


    return (
        <div className="pt-12 flex justify-center items-center flex-col lg:block w-full">
            <GoogleLoginButton/>
            <CostumeHrLine/>
            <FormContainer/>
            <AuthTypography />
        </div>
    )
}

export default AuthContainer;
