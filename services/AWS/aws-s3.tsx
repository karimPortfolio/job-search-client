import { useEffect, useState } from "react";
import type { ImageData, Params } from "./aws-s3.d";
import { s3 } from "@/config/AWS/aws-s3-config";


const GetS3Image = (params: AWS.S3.GetObjectRequest) => {

    const [imageSrc, setImageSrc] = useState<any | null>(null);

    const fetchImage = () => {
        s3.getObject(params, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                if (data.Body instanceof Buffer) {
                    const imageSr = `data:image/jpeg;base64,${Buffer.from(data.Body).toString('base64')}`;
                    setImageSrc(imageSr);
                }
            }
        });
    }

    useEffect( () => {
        fetchImage();
    }, [params]);

    return imageSrc;

} 

export default GetS3Image;

