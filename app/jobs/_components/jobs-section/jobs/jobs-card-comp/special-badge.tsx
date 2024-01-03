import { Badge } from "@/components/ui/badge"

const SpecialBadge = ({ 
    numberOfMonths 
}: {
    numberOfMonths: number
}) => {

    const convertMonthsToYears = (months: any) => {
        const years = Math.floor(months / 12);
        return years;
    };
    
    const years = convertMonthsToYears(numberOfMonths);
    
    return  <Badge 
            className="w-fit py-2" 
            variant="secondary">
                { years !== 0 ? years > 1 ? `${years} years ` : `${years} year ` : 'no ' } experience
            </Badge>
}

export default SpecialBadge;

