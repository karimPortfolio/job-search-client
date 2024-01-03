'use client'

import { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useAppDispatch } from "@/redux/store";
import { fetchMatchedJobs } from "@/redux/api/jobs/searchJobThunk";

interface Props {
    searchValue: string,
    location: string,
}

const PaginationComp = ({
    searchValue,
    location
}: Props) => {

    const [page, setPage] = useState<number>(1);

    const dispatch = useAppDispatch();

    const numPages = 5;

    const handleChangePage = (index: number) => {
        setPage(index)
    }

    const nextPage = () => {
        if (page < numPages)
        {
            setPage(page + 1);
        }
    }

    const previousPage = () => {
        if (page > 1)
        {
            setPage(page - 1)
        }
    }

    useEffect( () => {
        const payload = {
            searchValue: searchValue,
            location: location,
            page: page
        }
        dispatch(fetchMatchedJobs(payload))
        console.log(payload);
    }, [page, dispatch, searchValue, location])

    const PaginationItemLink = ({index}: {index: number}) => (
        <PaginationItem>
            <PaginationLink 
            onClick={ () => handleChangePage(index) } 
            > 
                {index}
            </PaginationLink>
        </PaginationItem>
    )

    return(
        <div className="flex justify-start w-full">
            <Pagination className="justify-start">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={previousPage} />
                    </PaginationItem>
                    
                    {
                        Array.from({ length: numPages }, (_, index) => (
                            <PaginationItemLink 
                            key={index}
                            index={index + 1}
                            />
                        ))
                    }

                    {/* <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem> */}
                    <PaginationItem>
                        <PaginationNext onClick={nextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
 
        </div>
    )
}

export default PaginationComp;
