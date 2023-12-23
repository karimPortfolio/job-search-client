import AuthContainer from "./authComp/authContainer";



const AuthSection = () => {
    return(
        <section className="lg:col-span-2 flex justify-center overflow-y-scroll
        items-center flex-col h-screen fit-content lg:pl-32 py-10">
            <h1 
            className="text-start lg:w-full font-DM-sans font-bold text-3xl">
                Sign in to <span>Easy Job</span>
            </h1>
            <AuthContainer/>
        </section>
    )
}

export default AuthSection;
