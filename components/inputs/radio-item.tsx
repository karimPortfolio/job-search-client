import { cn } from "@/lib/utils";
import { Input } from "../ui/input";


const RadioItem = ({
    value,
    name,
    className,
    ...props
}: React.AllHTMLAttributes<HTMLInputElement>) => {
    return(
        <Input
        type="radio"
        value={value}
        name={name}
        className={cn(
            'w-[16px] h-[16px] text-black',
            className
        )}
        {...props}
        />
    )
}

export default RadioItem;
