import Image from "next/image";
import Link from "next/link";
import DynamicImage from "../DynamicImage/dynamic-image";


const Brand = () => {
    return (
        <Link href="/">
            <DynamicImage Key="project-brand.png" Alt="easy job brand" Width={100} Height={50} />
        </Link>
    )
}

export default Brand;
