import { useAppDispatch } from "@/redux/store";
import SigninForm from "./signin-form";
import { FormikHelpers } from 'formik';
import { useSelector } from 'react-redux'
import { fetchRegisterUser } from "@/redux/api/auth/registerThunk";
import { useState, useEffect } from "react";
import ServerMessages from "./serverMessages";
import { useRouter } from "next/navigation";
import { fetchLoginUser } from "@/redux/api/auth/loginThunk";

export interface FormValues {
    email: string;
    password: string;
}

interface RootState {
    login: {
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


const FormContainer = () => {

    const response = useSelector( (state: RootState) => state.login );
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect( () => {
        if (response.response !== null && response.response?.type === 'success')
        {
            router.push('/');
        }
    },[response, router]);

    const initialValues: FormValues = {
        email: '',
        password: '',
    };
    
    const handleSubmit = async (
        values: FormValues,
        actions: FormikHelpers<FormValues>,
    ) => {
        try {
            // simulate a delay before submitting by 2 seconds
            await new Promise(resolve => setTimeout(resolve, 3500));
            const userCred = {
                email: values.email,
                password: values.password,
            }
            dispatch(fetchLoginUser(userCred));
            actions.setSubmitting(false);
            setTimeout( () => {
                actions.resetForm();
            },2000)
        } catch (error) {
            console.error('Submission error:', error);
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="w-[92%] sm:w-[450px]">
            <ServerMessages
            response = {response}
            />
            <SigninForm
            initialValues={initialValues}
            handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default FormContainer;

