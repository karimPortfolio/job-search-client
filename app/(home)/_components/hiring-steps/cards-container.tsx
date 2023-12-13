import { FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaFileLines } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const CardsContainer = () => {

    const hiringSteps = [
        {id:1, icon:<FaUser className="text-orange-600 text-[24px]" />, bgColor:"bg-orange-200", borderColor:"border-t-orange-600" ,
        title:"Create an Account", content:"Sign up for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests."},
        {id:2, icon:<FiSearch className="text-violet-600 text-[24px]" />, bgColor:"bg-violet-200", borderColor:"border-t-violet-600" ,
        title:"Search Job", content:"Once you set your job hunting parameters you'll find many openings related to your career interest."},
        {id:3, icon:<FaFileLines className="text-blue-600 text-[24px]" />, bgColor:"bg-blue-200", borderColor:"border-t-blue-600" ,
        title:"Upload CV/ Resume", content:"From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/ Resume."},
        {id:4, icon:<MdBusinessCenter className="text-yellow-500 text-[24px]" />, bgColor:"bg-yellow-200", borderColor:"border-t-yellow-600" ,
        title:"Get Job", content:"After applying, wait for some time, schedule an interview and, if everything goes right, then get hired ore quickly than traditional hiring methods"},
    ]

    return (
        <div className="w-full pt-20 lg:pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 sm:px-9 md:px-14 lg:px-20 ">
            {hiringSteps.map( (step) => (
                <Card 
                key={step.id}
                className={`even:mt-7 odd:mt-7 lg:even:mt-16 lg:odd:mt-0 shadow-lg border-b-0 border-r-0 border-l-0 
                rounded-tl-none rounded-tr-none min-h-[294px] lg:h-fit ${step.borderColor} bg-[#c6d4fb2e]`}
                >
                    <CardHeader>
                        <div className={`px-4 py-4 rounded-full w-fit ${step.bgColor}`}>
                            {step.icon}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle> {step.title} </CardTitle>
                        <p className="mt-5"> {step.content} </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default CardsContainer;
