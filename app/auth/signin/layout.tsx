import Navbar from "@/components/Navbar/navbar"


const SignInLayout = ({
    children
}: {children: React.ReactNode}) => {
    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export default SignInLayout;
