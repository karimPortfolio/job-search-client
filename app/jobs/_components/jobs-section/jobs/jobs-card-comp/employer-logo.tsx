import { useState, useEffect } from 'react'
import Image from "next/image"
import company_logo from '@/public/images/company.png'

interface Props {
    logo_url: string;
    alt: string;
}

export const EmployerLogo = ({
    logo_url,
    alt
}: Props) => {

    const [isValidImgUrl, setIsValidImgUrl] = useState<boolean>(true);

    const handleImageError = () => {
        setIsValidImgUrl(false);
    };

    if (!logo_url || logo_url === null || !isValidImgUrl)
    {
        return (
            <div 
            className="h-12 w-12 rounded-lg bg-white border-[0.8px] border-gray-300 flex 
            justify-center items-center"
            >
                <Image
                src={company_logo}
                alt={alt}
                className="h-11 w-11 object-cover"
                onError={handleImageError}
                />
            </div>
        )
    }

    return(
        <div 
        className="h-12 w-12 rounded-lg bg-white border-[0.8px] border-gray-300 px-1 py-1 flex 
        justify-center items-center"
        >
            <img 
            src={logo_url} 
            alt={alt} 
            className="h-12 w-12 object-contain"
            onError={handleImageError}
            />
        </div>
    )
}
