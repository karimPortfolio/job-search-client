import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { FormSchema } from './formSchema';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CustomInputComponent } from '@/components/form/input';
import { FormValues } from './form-container';
import { ClipLoader } from "react-spinners";


interface FormProps {
    initialValues: {
        email: string,
        password: string,
    },
    handleSubmit: ( 
        values: FormValues,
        actions: FormikHelpers<FormValues>,
        {setSubmitting}: FormikHelpers<FormValues>
    ) => void
}

const SigninForm = ({
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
        
                        <div className='mt-7'>
                            <Label htmlFor='email'>Email</Label>
                            <Field type="email" id="email" component={CustomInputComponent} name="email" />
                        </div>
        
                        <div className='mt-7'>
                            <Label htmlFor='password'>Password</Label>
                            <Field type="password" id="password" component={CustomInputComponent} name="password" />
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
                                    : (<span>Sign in</span>)
                                }
                                
                            </Button>
                        
                        </div>
            </Form>
                )
            }
        </Formik>
    );
}

export default SigninForm;
