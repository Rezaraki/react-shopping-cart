import { useFormik } from "formik";
import Input from "../components/Input";
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginUserMutation } from "../features/api/apiSlice";
import { logUserIn } from "../features/userSlice";

const validationSchema = Yup.object().shape({

    email: Yup.string().required('Email is required').email('email format not correct')
    ,
    password: Yup.string()
        .required("Password is required")
        .min(8, 'use at least eight characters')
        .max(30, "password length can't exceed 30 charecters")
});


const initialValues = {

    email: "",
    password: ""

}
const LoginPage = () => {
    const loginUser = useLoginUserMutation()[0]
    const cartCount = useSelector(state => state.cart.length)
    const [loginErr, setLoginErr] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onSubmit = async (formValues) => {


        try {

            const response = await loginUser(formValues).unwrap()
            // localStorage.setItem('loggedUserData', JSON.stringify({
            //     ...response.data
            // }))
            // dispatch(logUserIn(response.data))
            console.log(response)
            if (cartCount) navigate('/cart'); else navigate('/')
        } catch (error) {

            console.log('error', error, error.data.message)
            setLoginErr(error.data.message)
        }



    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount: true,
        onSubmit,
    })

    return (
        <div className="sm:flex sm:justify-center">
            <div className="sm:w-4/5 w-full  sm:flex sm:justify-center sm:pt-6 pb-8  min-h-min   bg-gray-300">
                <form className="py-2 px-4 sm:w-3/12 h-min sm:min-w-[400px] bg-gray-200" onSubmit={formik.handleSubmit}>

                    <Input
                        formik={formik}
                        name="email"
                        label="Email"

                    />
                    <Input
                        formik={formik}
                        name="password"
                        label="Password"
                        type="password"
                    />
                    {loginErr && <p className="text-red-500 ">{loginErr}</p>}

                    <button

                        type="submit"
                        disabled={!formik.isValid}
                        className="w-full mt-2 disabled:bg-slate-700 disabled:text-white disabled:font-bold disabled:py-1 disabled:px-4 disabled:rounded disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded   "
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>

    )


}

export default LoginPage;