
import img from "@/public/images/company.png"
import Image from "next/image";

const EmployerBrand = ({employerLogo, employerName}: any) => {
    
    if (employerLogo && employerLogo !== null)
    {
        //i used the HTML image instead of next/image img because next/image doesn't accept
        //links from unknown hostnames
        return <img 
                src={employerLogo} 
                alt={`${employerName} brand image`} 
                className="rounded-full w-full h-full object-contain" 
                />
    }

    return <Image 
            src={img}
            alt={`${employerName} brand image`}
            width={60}
            height={60}
            className="rounded-full w-full h-full object-cover"
            />
}


export default EmployerBrand;

