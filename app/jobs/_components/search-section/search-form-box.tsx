import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { ClipLoader } from "react-spinners";

interface SearchFormProps {
    searchValue: string,
    location: string,
    getSearchValue: (e: ChangeEvent<HTMLInputElement>) => void,
    getLocation: (e: ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    handleClick: () => void,
    loading:boolean
}


const SearchFormBox = ({
    searchValue,
    location,
    getSearchValue,
    getLocation ,
    handleSubmit,
    handleClick,
    loading
}: SearchFormProps) => {
    return(
        // w-[98%] sm:w-[90%] md:w-[75%] lg:w-[65%]
        <div className="px-3 py-3 bg-white border shadow-sm w-full rounded-lg">
            <form action="">
                <div className="flex justify-center">
                    <div className="relative w-[47%] after:contents-[*] after:bg-black after:w-[1.5px] after:h-[100%]
                    after:absolute after:top-0 after:left-[100%] after:opacity-10">
                        <span className="absolute left-[14px] top-[10px]">
                            <FiSearch className="text-[18px]" />
                        </span>
                        <Input 
                        type="text" 
                        placeholder="Job title or Keywords" 
                        autoComplete="off" 
                        required
                        value = {searchValue}
                        onChange={getSearchValue}
                        className="border-none focus:outline-none pl-[40px]"
                        />
                    </div>
                    <div className="relative w-[43%] ml-3">
                        <span className="absolute left-[14px] top-[10px]">
                            <GrLocation className="text-[18px]" />
                        </span>
                        <Input 
                        type="text" 
                        placeholder="Location" 
                        autoComplete="off" 
                        value={location}
                        onChange={getLocation}
                        className="border-none focus:outline-none pl-[40px]"
                        />
                    </div>
                    <Button
                    type="button"
                    onClick={handleClick} 
                    className="bg-gradient-to-r from-[#4376ea] font-DM-sans to-[#021c64] rounded-lg w-[107px] "
                    >
                        {
                            !loading ? (<span>Search</span>) 
                                    : (<span className="flex justify-center items-center"><ClipLoader color="#FFF" size={17} className="mr-2" />Wait</span>)
                        }
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default SearchFormBox;
