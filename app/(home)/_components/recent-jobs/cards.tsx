'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SpecialBadge from "./special-badge";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import EmployerBrand from "./employer-brand";



const Cards = ({job}: any) => {
    return (
        <Card className="shadow-md mt-7">
            <CardHeader>
                <div className="flex justify-start items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-gray-100">
                        <EmployerBrand
                        employerLogo = {job.employer_logo}
                        employerName = {job.employer_name}
                        />
                    </div>
                    <div className="ml-3">
                        <CardTitle className="text-lg">{job.employer_name}</CardTitle>
                        <CardDescription className="mt-1 text-[15px]">{job.job_country}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-xl">{job.job_title}</CardTitle>
                
                <div className="flex gap-3 mt-4">
                    {job.job_is_remote ? (
                        <Badge className="w-fit py-2" variant="secondary">Remote</Badge>
                    ) : (
                        <Badge className="w-fit py-2" variant="secondary">On-site</Badge>
                    )}
                    <Badge className="w-fit py-2" variant="secondary">Full-time</Badge>
                    <SpecialBadge
                    numberOfMonths = {job.job_required_experience.required_experience_in_months}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <div>
                    <Link href={job.job_apply_link} target="_blank" className="mr-3">
                        <Button 
                        variant="destructive" 
                        className="bg-[#021c64] border-[#021c64] border-[1.5px] hover:bg-transparent hover:text-[#021c64] font-DM-sans
                        transition-all duration-500 ease-in-out">
                            Apply Now
                        </Button>
                    </Link>
                    <Link href={`/jobs/${job.job_id}`} className={buttonVariants({ variant: "outline" })}>View Details</Link>
                </div>
            </CardFooter>
        </Card>

    )
}

export default Cards;

