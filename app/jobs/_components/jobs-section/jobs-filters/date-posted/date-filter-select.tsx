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
    dateSelected: string;
    handleDateSelectedChange: (value: string) => void;
}


const DateFilterSelect = ({
    dateSelected,
    handleDateSelectedChange
}: Props) => {

    useEffect( () => {
        console.log(dateSelected);
    }, [dateSelected])

    const DateFilterOptions = [
        {id:'all', label:'All'},
        {id:'today', label:'Today'},
        {id:'3days', label:'Last 3 days'},
        {id:'week', label:'This Week'},
        {id:'month', label:'This month'},
    ]

    return (
        <div className="py-4 sm:py-0">
            <Select value={dateSelected} onValueChange={handleDateSelectedChange} >
                <SelectTrigger className="w-full bg-gray-200" >
                    <SelectValue placeholder="Date posted" className="font-DM-sans" />
                </SelectTrigger>
                <SelectContent>
                    {
                        DateFilterOptions.map( (option) => (
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

export default DateFilterSelect;
