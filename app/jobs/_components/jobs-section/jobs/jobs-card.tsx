'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { EmployerLogo } from "./jobs-card-comp/employer-logo";
import { Button } from "@/components/ui/button";
import { JobDescription } from "./jobs-card-comp/job-description";
import { Badge } from "@/components/ui/badge"
import SpecialBadge from "./jobs-card-comp/special-badge";
import Link from "next/link";


const JobsCard = ({job}: any) => {
    return(
        <Card>
            <CardHeader
            className="flex justify-start items-center flex-row gap-4"
            >
                <div>
                    <EmployerLogo
                    logo_url={job.employer_logo}
                    alt={`${job.employer_name} brand`}
                    />
                </div>
                <div>
                    <CardTitle> {job.job_title} </CardTitle>
                    <CardDescription
                    className="font-DM-sans mt-2 gap-7 space-x-3"
                    > 
                        <span className="font-semibold text-gray-700">{job.employer_name} </span> 
                        <span className="text-gray-500">{job.job_employment_type} </span> 
                        <span className="text-gray-500"> {job.job_country} </span> 
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <JobDescription
                content={job.job_description}
                />
                <div className="pt-4 flex gap-4">
                    <Badge variant="secondary" className="py-2"> 
                    {
                        job.job_is_remote ? (<span>Remote</span>) : (<span>On-site</span>)
                    } 
                    </Badge>
                    <SpecialBadge
                    numberOfMonths={job.job_required_experience.required_experience_in_months}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-start items-center gap-4">
                    <Link href={job.job_apply_link} target="_blank">
                        <Button variant="default">Apply now</Button>
                    </Link>
                    <Button variant="outline">Job Details</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default JobsCard;
