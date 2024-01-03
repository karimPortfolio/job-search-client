import { Button } from "@/components/ui/button";
import { MdRefresh } from "react-icons/md";

interface Props{
    handleFiltersReset: () => void;
}

const ResetButton = ({
    handleFiltersReset
}: Props) => {
    return (
        <div className="flex lg:justify-end">
            <Button variant="outline" onClick={handleFiltersReset}>
                <span> <MdRefresh className="text-[18px]"/> </span>
                <span className="ml-1 font-DM-sans">Reset</span>
            </Button>
        </div>
    )
}

export default ResetButton;
