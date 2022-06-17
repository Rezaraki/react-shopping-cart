import { useFormik } from "formik";
import Input from "../components/Input";
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSignUpUsersMutation } from "../features/api/apiSlice";




const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",

}
const lowercaseRegex = /(?=.*[a-z])/
const uppercaseRegex = /(?=.*[A-Z])/
const numbersRegex = /(?=.*[0-9])/


const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required")
        .max(30, "Name length can't exceed 30 charecters"),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.string()
        .required("Phone Number is required")
        .matches(/^(\+98|0098|98|0)?9\d{9}$/, "Invalid Phone Number")
        .nullable(),
    password: Yup.string()
        .required("Password is required")
        .matches(lowercaseRegex, 'one lowercase charecter needed')
        .matches(uppercaseRegex, 'one uppercase charecter needed')
        .matches(numbersRegex, 'one number charecter needed')
        .min(8, 'use at least eight characters')
        .max(30, "password length can't exceed 30 charecters")


})
const SignUpPage = () => {

    const [signUser, { isLoading, isSuccess }] = useSignUpUsersMutation();

    const [signUpErr, setSignUpErr] = useState()
    const onSubmit = async (values) => {

        try {

            await signUser(values).unwrap()

        } catch (error) {

            console.log('error', error, error.data.message)
            setSignUpErr(error.data.message)
        }

    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    })


    return (
        <div className="sm:flex sm:justify-center">

            <div className=" sm:w-4/5 w-full  sm:flex sm:justify-center sm:pt-6 pb-8  min-h-min   bg-gray-300   ">

                <form className="py-2 px-4 sm:w-3/12 h-min sm:min-w-[400px] bg-gray-200" onSubmit={formik.handleSubmit}>
                    <Input formik={formik} name="name" label="Name" />
                    <Input formik={formik} name="email" label="Email" type="email" />
                    <Input
                        formik={formik}
                        name="phoneNumber"
                        label="Phone Number"
                        type="tel"
                    />
                    <Input
                        formik={formik}
                        name="password"
                        label="Password"
                        type="password"
                    />

                    {signUpErr && <p className="text-red-500 mt-1">{signUpErr}</p>}
                    <button

                        type="submit"
                        disabled={!formik.isValid}
                        className="w-full mt-2 disabled:bg-slate-700 disabled:text-white disabled:font-bold disabled:py-1 disabled:px-4 disabled:rounded disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded   "
                    >
                        Signup
                    </button>
                    <p>Already signed up?</p> <NavLink to='/Login'><span className="text-blue-700">login</span></NavLink>
                </form>

            </div>
        </div>
    );
}

export default SignUpPage;