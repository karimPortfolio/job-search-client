import { useAppDispatch } from "@/redux/store";
import SignupForm from "./signup-form";
import { FormikErrors, FormikHelpers, FormikState } from 'formik';
import { useSelector } from 'react-redux'
import { fetchRegisterUser } from "@/redux/api/auth/registerThunk";
import { useState, useEffect } from "react";
import ServerMessages from "./serverMessages";
import { useRouter } from "next/navigation";

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
}

interface RootState {
    register: {
        loading: boolean,
        response: {
            type?: string,
            message?: string,
            user?:{},
            token?:string
        },
        error: ''
    }
}


const FormContainer = ({isShows}: any) => {

    const response = useSelector( (state: RootState) => state.register );
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect( () => {
        if (response.response !== null && response.response.type === 'success')
        {
            router.push('/');
        }
    },[response, router]);

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role:'user'
    };
    
    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>,
    ) => {
        try {
            // simulate a delay before submitting by 2 seconds
            await new Promise(resolve => setTimeout(resolve, 3500));
            const userCred = {
                fullName: values.firstName+' '+values.lastName,
                email: values.email,
                password: values.password,
                role: values.role,
            }
            dispatch(fetchRegisterUser(userCred));
            actions.setSubmitting(false);
            setTimeout( () => {
                actions.resetForm();
            },2000)
        } catch (error) {
            console.error('Submission error:', error);
            actions.setSubmitting(false);
        }
    };

    if (!isShows)
    {
        return null;
    }

    return (
        <div className="w-[92%] sm:w-[450px]">
            <ServerMessages
            response = {response}
            />
            <SignupForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default FormContainer;

