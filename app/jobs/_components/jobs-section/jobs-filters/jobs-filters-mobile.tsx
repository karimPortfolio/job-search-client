"use client"

import DateFilterSelect from "./date-posted/date-filter-select";
import ExperienceLevelSelect from "./experience-level/experience-level-select";
import JobsTypesSelect from "./jobs-types/jobs-types-select";
import RemoteJobsSelect from "./remote-jobs/remote-jobs-select";
import ResetButton from "./reset-button";


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { Filter, SlidersHorizontal } from "lucide-react";

interface Props {
    dateSelected: string;
    expLevelSelected: string;
    typeSelected: string;
    remoteSelected: string;
    handleJobsOptionsChange: (value: string) => void;
    handleTypeSelectedChange: (value: string) => void;
    handleExpLevelSelectedChange: (value: string) => void;
    handleDateSelectedChange: (value: string) => void;
    handleFiltersReset: () => void;
}

const JobsFiltersMobile = ({
    dateSelected,
    expLevelSelected,
    typeSelected,
    remoteSelected,
    handleJobsOptionsChange,
    handleTypeSelectedChange,
    handleExpLevelSelectedChange,
    handleDateSelectedChange,
    handleFiltersReset,
}: Props) => {

    return (
        <div className="block sm:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary">
                        <Filter className="w-[20px] h-[20px] mr-2" />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle 
                        className="text-start flex justify-start items-center gap-2 font-DM-sans relative top-[10px]"
                        >
                            <SlidersHorizontal className="w-[20px] h-[20px]" />
                            Filters
                        </SheetTitle>
                    </SheetHeader>
                    <div className="pt-14">
                        <DateFilterSelect
                        dateSelected={dateSelected}
                        handleDateSelectedChange={handleDateSelectedChange}
                        />
                        <JobsTypesSelect
                        typeSelected={typeSelected}
                        handleTypeSelectedChange={handleTypeSelectedChange}
                        />
                        <ExperienceLevelSelect
                        expLevelSelected={expLevelSelected}
                        handleExpLevelSelectedChange={handleExpLevelSelectedChange}
                        />
                        <RemoteJobsSelect
                        remoteSelected={remoteSelected}
                        handleJobsOptionsChange={handleJobsOptionsChange}
                        />
                        <ResetButton
                        handleFiltersReset={handleFiltersReset}
                        />
                    </div>
                    
                </SheetContent>
            </Sheet>
        </div>
    )
}


export default JobsFiltersMobile;
