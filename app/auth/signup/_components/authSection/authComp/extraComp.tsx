import  Link  from 'next/link'
import { Button } from "@/components/ui/button"
import { AuthBtnProps } from "./authContainer";

export const EmailAuthButton = ({
    isShows,
    handleShowForm
}: AuthBtnProps) => {
    
    if (isShows)
    {
        return null;
    }

    return <Button
            onClick={handleShowForm}
            className="items-center w-[92%] sm:w-[420px] h-[60px] bg-transparent border-gray-300 border-[1.5px]
            rounded-full text-black font-DM-sans hover:bg-transparent hover:shadow-lg transition-all
            duration-600 ease-in-out">
                Continue with email
            </Button>

}


export const CostumeHrLine = ({isShows}: any) => {

    if (isShows)
    {
        return null;
    }

    return(
        <div 
        className="w-[92%] sm:w-[420px] my-8 relative after:contents-[*] after:bg-gray-600 
        after:w-[100%] sm:after:w-[420px] after:h-[0.5px] after:absolute after:top-[18px] after:left-0 after:opacity-[0.4]">
            <div className='flex justify-center'>
                <p className="w-fit relative p-2 z-10 text-[14px] bg-white">Or</p>
            </div>
        </div>
    )
}


export const AuthTypography = () => {
    return(
        <div className='mt-12 w-[92%] sm:w-[420px]'>
            <p
            className="font-DM-sans text-center text-[15px] text-gray-700"
            >
                Already have an account?
                <Link href='/auth/signin' className='ml-1 underline text-black'>Sign in</Link> 
            </p>
        </div>
    )
}

