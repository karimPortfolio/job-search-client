'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

interface RemoteJobsProps {
    remoteSelected: string;
    handleJobsOptionsChange: (value: string) => void;
}

const RemoteJobsSelect = ({
    remoteSelected,
    handleJobsOptionsChange
}: RemoteJobsProps) => {

    useEffect( () => {
        console.log(remoteSelected);
    }, [remoteSelected])

    const JobsOptions = [
        {id:'remote', label:'Remote', value:'true'},
        {id:'onsite', label:'On-site', value:'false'},
    ]

    return (
        <div className="py-4 sm:py-0">
            <Select value={remoteSelected} onValueChange={handleJobsOptionsChange} >
                <SelectTrigger className="w-full bg-gray-200" >
                    <SelectValue placeholder="Remote" className="font-DM-sans"/>
                </SelectTrigger>
                <SelectContent>
                    {
                        JobsOptions.map( (option) => (
                            <SelectItem 
                            key={option.id} 
                            value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default RemoteJobsSelect;
