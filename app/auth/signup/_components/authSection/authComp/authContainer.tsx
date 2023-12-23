import Link from "next/link";
import FormContainer from "./authForm/form-container";
import { AuthTypography, CostumeHrLine, EmailAuthButton } from "./extraComp";
import GoogleLoginButton from "./googleLoginButton";


export interface AuthBtnProps {
    isShows: boolean,
    handleShowForm: () => void
}

const AuthContainer = ({
    isShows,
    handleShowForm
}: AuthBtnProps) => {


    return (
        <div className="pt-12 flex justify-center items-center flex-col lg:block w-full">
            <GoogleLoginButton
            isShows={isShows}
            />
            <CostumeHrLine
            isShows={isShows}
            />
            <EmailAuthButton
            isShows={isShows}
            handleShowForm = {handleShowForm}
            />
            <FormContainer
            isShows={isShows}
            />
            <AuthTypography />
        </div>
    )
}

export default AuthContainer;
