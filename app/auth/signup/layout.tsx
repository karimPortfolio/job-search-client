import Navbar from "@/components/Navbar/navbar"


const SignUpLayout = ({
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

export default SignUpLayout;
