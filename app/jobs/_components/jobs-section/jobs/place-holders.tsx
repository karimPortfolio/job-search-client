import { Skeleton } from "@/components/ui/skeleton"

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


const PlaceHolders = () => {

    const PlaceholderCardsNum = 4;

    const PlaceHolderCardContent = (
        <div>
            <CardHeader
            className="flex justify-start items-center flex-row gap-3"
            >
                <Skeleton className="h-12 w-12 bg-gray-200 rounded-lg" />
                <div className="space-y-2 w-[80%]">
                    <Skeleton className="h-6 bg-gray-200 w-full" />
                    <Skeleton className="h-4 bg-gray-200 w-full" />
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <Skeleton className="h-4 bg-gray-200 w-full" />
                <Skeleton className="h-4 bg-gray-200 w-full" />
                <Skeleton className="h-4 bg-gray-200 w-full" />
            </CardContent>
            <CardFooter >
                <div className="flex gap-3">
                    <Skeleton className="h-10 bg-gray-200 w-[170px]" />
                    <Skeleton className="h-10 bg-gray-200 w-[170px]" />
                </div>
            </CardFooter>
        </div>
    );

    return(
        Array.from({ length: PlaceholderCardsNum }, (_, index) => (
            <Card 
            key={index}
            className=""
            >
                {PlaceHolderCardContent}
            </Card>
        ))
    )
}

export default PlaceHolders;
