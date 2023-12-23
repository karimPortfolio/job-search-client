import { Input } from "../ui/input";


export const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}: any) => (
    <div>
        <Input
        type="text" 
        //autoComplete="off" 
        {...field} {...props} 
        className="border-[1px] border-gray-200 rounded-lg mt-2 h-[50px] focus:ring-4 focus:ring-[#5082ff41]
        focus:border-blue-500 caret-blue-500"
        />
        {touched[field.name] &&
        errors[field.name] && <div className="error mt-1">
                                <small className='text-red-500 font-DM-Sans'>
                                    {errors[field.name]}.
                                </small>
                            </div>}
    </div>
);


