import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { FormSchema } from './formSchema';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CustomInputComponent } from '@/components/form/input';
import { FormValues } from './form-container';
import { ClipLoader } from "react-spinners";


interface FormProps {
    initialValues: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPassword: string,
        role:string
    },
    handleSubmit: ( 
        values: FormValues,
        actions: FormikHelpers<FormValues>,
        {setSubmitting}: FormikHelpers<FormValues>
    ) => void
}

const SignupForm = ({
    initialValues,
    handleSubmit
}: FormProps) => {
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
        >
            {
                ({isSubmitting}) => (
                    <Form >
                        <div className="flex justify-between">
                            <div className='w-[48%]'>
                                <Label htmlFor='firstName'>First Name</Label>
                                <Field type="text" id="firstName" component={CustomInputComponent} name="firstName" />
                            </div>
                            <div className='w-[48%]'>
                                <Label htmlFor='lastName'>Last Name</Label>
                                <Field type="text" id="lastName" component={CustomInputComponent} name="lastName" />
                            </div>
                        </div>
        
                        <div className='mt-7'>
                            <Label htmlFor='email'>Email</Label>
                            <Field type="email" id="email" component={CustomInputComponent} name="email" />
                        </div>
        
                        <div className='mt-7'>
                            <Label htmlFor='password'>Password</Label>
                            <Field type="password" id="password" component={CustomInputComponent} name="password" />
                        </div>
        
                        <div className='mt-7'>
                            <Label htmlFor='confirmPassword'>Confirm Password</Label>
                            <Field type="password" id="confirmPassword" component={CustomInputComponent} name="confirmPassword" />
                        </div>
        
                        <div className='mt-7 hidden'>
                            <Field type="text" name="role" />
                        </div>
        
                        <div className='mt-7'>
                            <Button 
                            type='submit' 
                            variant='destructive'
                            disabled={isSubmitting}
                            className="h-[50px] rounded-full bg-gray-800 text-white font-DM-sans w-full hover:bg-gray-800
                            relative duration-700 ease-in-out hover:scale-[0.98] hover:shadow-lg"
                            >
                                {
                                    isSubmitting 
                                    ? (
                                        <span className="flex justify-center items-center">
                                            <ClipLoader color="#FFF" size={17} className="mr-2" />
                                            Submitting
                                        </span>
                                    )
                                    : (<span>Sign up</span>)
                                }
                                
                            </Button>
                        
                        </div>
            </Form>
                )
            }
        </Formik>
    );
}

export default SignupForm;
