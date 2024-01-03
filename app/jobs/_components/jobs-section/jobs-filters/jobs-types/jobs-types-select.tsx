'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"

interface Props {
    typeSelected: string;
    handleTypeSelectedChange: (value: string) => void;
}

const JobsTypesSelect = ({
    typeSelected,
    handleTypeSelectedChange
}: Props) => {


    useEffect( () => {
        console.log(typeSelected);
    }, [typeSelected])

    const JobsTypesOptions = [
        {id:'FULLTIME', label:'Full-time'},
        {id:'PARTTIME', label:'Part-time'},
        {id:'CONTRACTOR', label:'Contractor'},
        {id:'INTERN', label:'Intern'},
    ]

    return (
        <div className="py-4 sm:py-0">
            <Select value={typeSelected} onValueChange={handleTypeSelectedChange} >
                <SelectTrigger className="w-full bg-gray-200" >
                    <SelectValue placeholder="Job type" className="font-DM-sans" />
                </SelectTrigger>
                <SelectContent>
                    {
                        JobsTypesOptions.map( (option) => (
                            <SelectItem 
                            key={option.id} 
                            value={option.id}
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

export default JobsTypesSelect;
