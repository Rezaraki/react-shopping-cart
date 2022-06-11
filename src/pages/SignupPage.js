import { useFormik } from "formik";
import Input from "../components/Input";
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

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

    const [signUpErr, setSignUpErr] = useState()
    const onSubmit = async (values) => {
        try {

            const { data } = await axios.post('https://nodejs-post-app.herokuapp.com/api/user/register', values)
            console.log(data)
        } catch (error) {
            console.log(error, error.response.data.message)
            setSignUpErr(error.response.data.message)
        }

    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    })


    return (

        <div className="sm:flex sm:justify-center bg-slate-400 ">
            <form className="p-2  sm:min-w-[400px] bg-stone-400" onSubmit={formik.handleSubmit}>
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

                {signUpErr && <p className="text-red-500 ">{signUpErr}</p>}
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
    );
}

export default SignUpPage;