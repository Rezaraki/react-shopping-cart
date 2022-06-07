import { useFormik } from "formik";
import Input from "../components/Input";
import * as Yup from 'yup';

const lowercaseRegex = /(?=.*[a-z])/
const uppercaseRegex = /(?=.*[A-Z])/
const numbersRegex = /(?=.*[0-9])/

const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string()
        .required('Email / Phone is required')
        .test('emailOrPhone', 'Email / Phone is invalid', (value) => {
            // check for email vaildation
            if (isNaN(value)) return Yup.string().email().isValidSync(value)
            // check for phone Number vaildation
            return Yup.string()
                .matches(/^(\+98|0098|98|0)?9\d{9}$/).isValidSync(value)

        })
    ,
    password: Yup.string()
        .required("Password is required")
        .matches(lowercaseRegex, 'one lowercase charecter needed')
        .matches(uppercaseRegex, 'one uppercase charecter needed')
        .matches(numbersRegex, 'one number charecter needed')
        .min(8, 'use at least eight characters')
        .max(30, "password length can't exceed 30 charecters")
});


const initialValues = {
    name: "",
    emailOrPhone: "",
    password: ""

}
const LoginPage = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        validateOnMount: true,
    })

    return (
        // <h1>login Page</h1>
        <div className="sm:flex sm:justify-center bg-slate-400 ">
            <form className="p-2  sm:min-w-[400px] bg-stone-400" onSubmit={formik.handleSubmit}>


                <Input
                    formik={formik}
                    name="emailOrPhone"
                    label="Phone Number orEmail"

                />
                <Input
                    formik={formik}
                    name="password"
                    label="Password"
                    type="password"
                />

                <button

                    type="submit"
                    disabled={!formik.isValid}
                    className="w-full mt-2 disabled:bg-slate-700 disabled:text-white disabled:font-bold disabled:py-1 disabled:px-4 disabled:rounded disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded   "
                >
                    Login
                </button>

            </form>
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