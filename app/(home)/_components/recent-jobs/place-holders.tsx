import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


const PlaceHolders = () => {

    const placeHoldersNum = 3;

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-9 md:px-14 lg:px-20">
            {
                Array.from({ length: placeHoldersNum }, (_, index) => (
                    <Card 
                    key={index}
                    className='shadow-md border-0 mt-7'
                    >
                        <CardHeader>
                            <Skeleton className="w-[80px] h-[80px] rounded-full bg-gray-200" />
                            <div className="pt-4">
                                <Skeleton className="h-[20px] w-full bg-gray-200" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-[20px] w-full mt-3 bg-gray-200" />
                            <Skeleton className="h-[20px] w-full mt-3 bg-gray-200" />
                            <Skeleton className="h-[20px] w-full mt-3 bg-gray-200" />
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}

export default PlaceHolders;
