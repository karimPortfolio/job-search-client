import { Button } from "@/components/ui/button";
import { Boolean } from "aws-sdk/clients/batch";
import { FaAngleLeft } from "react-icons/fa6";
import { AuthBtnProps } from "./authComp/authContainer";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const ReturnBtn = ({
    isShows, 
    handleShowForm
}: AuthBtnProps) => {
    return(
        <div className="mb-2 ml-5 relative lg:left-[-80px] top-[-20px] lg:top-[45px] sm:ml-10 md:ml-16 lg:ml-0 w-full">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Button 
                        onClick={handleShowForm}
                        className={
                            isShows ? "bg-white text-black rounded-full border-gray-500 border-[1px] hover:bg-white hover:text-black hover:border-[1.2px] w-[40px] h-[40px] p-0"
                            : "hidden"
                        }>
                            <FaAngleLeft />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent
                    data-side = "right"
                    className="bg-gray-800 text-white"
                    >
                        <p>Back</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default ReturnBtn;

