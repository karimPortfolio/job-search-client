import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import DynamicImage from "@/components/DynamicImage/dynamic-image";
import { Badge } from "@/components/ui/badge"


const FloatingCard = () => {
    return (
        <div className="max-[1142px]:hidden">
            <Card className="w-fit shadow-md absolute top-[120px] left-[80px]">
                <CardHeader>
                    <DynamicImage
                    Key="hero-section/amazon-logo.jpeg"
                    Alt="Amazon logo"
                    Width={35}
                    Height={35}
                    className="rounded-full w-[35px] h-[35px]"
                    />
                    <CardDescription 
                    className="text-black mt-2 font-DM-sans font-medium text-[17px]"
                    >
                        Senior Software Engineer
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex">
                        <Badge className="w-fit py-2" variant="secondary">USA</Badge>
                        <Badge className="w-fit py-2 ml-3" variant="secondary">Full-time</Badge>
                    </div>
                    <div className="mt-3 flex">
                        <Badge className="w-fit py-2" variant="secondary">On-site</Badge>
                        <Badge className="bg-green-100 text-green-600 w-fit py-2 ml-3">200-250K US</Badge>
                    </div>
                </CardContent>
               
            </Card>

        </div>
    )
}

export default FloatingCard;

