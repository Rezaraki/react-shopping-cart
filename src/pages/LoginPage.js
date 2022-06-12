import { useFormik } from "formik";
import Input from "../components/Input";
import * as Yup from 'yup';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../features/userSlice";
import loginFunc from "../utilities/loginFunc";

const validationSchema = Yup.object().shape({
    // emailOrPhone: Yup.string()
    //     .required('Email / Phone is required')
    //     .test('emailOrPhone', 'Email / Phone is invalid', (value) => {
    //         // check for email vaildation
    //         if (isNaN(value)) return Yup.string().email().isValidSync(value)
    //         // check for phone Number vaildation
    //         return Yup.string()
    //             .matches(/^(\+98|0098|98|0)?9\d{9}$/).isValidSync(value)

    //     })
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
    const cartCount = useSelector(state => state.cart.length)
    const [loginErr, setLoginErr] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const onSubmit = (formValues) => {


        loginFunc(formValues)
            .then(response => {

                dispatch(logUserIn(response.data))

                localStorage.setItem('loggedUserData', JSON.stringify({ ...response.data, ...formValues }))
                if (cartCount) navigate('/cart'); else navigate('/')
            })
            .catch(error => { setLoginErr(error.response.data.message) })

    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount: true,
        onSubmit,
    })

    return (
        // <h1>login Page</h1>
        <div className="sm:flex sm:justify-center bg-slate-400 ">
            <form className="p-2  sm:min-w-[400px] bg-stone-400" onSubmit={formik.handleSubmit}>


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
            {/* <button className="border" onClick={() => dispatch(logUserIn({ yhy: 'kkk' }))}>asdfsdfsd</button> */}
        </div>


    )
    /* <div className="fromContainer">
         <form onSubmit={formik.handleSubmit}>
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
            <Input
                formik={formik}
                name="passwordConfirm"
                label="Password confirmation"
                type="password"
            />
            <button

                type="submit"
                disabled={!formik.isValid}
                className=" w-full "
            >
                Signup
            </button>
            {error && <p className="text-orange-700" >{error}</p>}
            <Link to={`/login?redirect=${redirect}`}>
                <p style={{ marginTop: "15px" }}>Already login?</p>
            </Link>
        </form>
    </div> */


}

export default LoginPage;