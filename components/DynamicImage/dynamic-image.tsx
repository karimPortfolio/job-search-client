import { GetS3Image } from "@/services";
import Image from "next/image";
import { Params } from "./dynamic-image-d";
import { Skeleton } from "@/components/ui/skeleton";


const DynamicImage = ({Key, Alt, Width, Height, className}: Params) => {

    const bucket = process.env.NEXT_PUBLIC_BUCKET_NAME;
    
    if (typeof bucket === 'undefined' || typeof Key === 'undefined')
    {
        return <Skeleton className="bg-gray-200"  style={{ width:Width, height:Height }} />
    }

    const params: AWS.S3.GetObjectRequest = {
        Bucket: bucket,
        Key: Key
    }

    const ImgSrc = GetS3Image(params);

    if (ImgSrc === null || ImgSrc === "")
    {
        return <Skeleton className="bg-gray-200" style={{ width:Width, height:Height }} />
    }

    return <Image 
                src={ImgSrc} 
                alt={typeof Alt !== 'undefined' ? Alt : ''} 
                width={Width} 
                height={Height}
                className={className}
            />
}

export default DynamicImage;

