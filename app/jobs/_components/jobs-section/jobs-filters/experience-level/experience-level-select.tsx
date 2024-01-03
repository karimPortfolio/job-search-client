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
    expLevelSelected: string;
    handleExpLevelSelectedChange: (value: string) => void;
}


const ExperienceLevelSelect = ({
    expLevelSelected,
    handleExpLevelSelectedChange
}: Props) => {


    useEffect( () => {
        console.log(expLevelSelected);
    }, [expLevelSelected])

    const expLevelOptions = [
        {id:'more_than_3_years_experience', label:'+3 years experience'},
        {id:'under_3_years_experience', label:'1 to 3 years experience'},
        {id:'no_experience', label:'No experience'},
        {id:'no_degree', label:'No degree'},
    ]

    return (
        <div className="py-4 sm:py-0">
            <Select value={expLevelSelected} onValueChange={handleExpLevelSelectedChange} >
                <SelectTrigger className="w-full bg-gray-200" >
                    <SelectValue placeholder="Experience level" className="font-DM-sans"/>
                </SelectTrigger>
                <SelectContent>
                    {
                        expLevelOptions.map( (option) => (
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

export default ExperienceLevelSelect;
