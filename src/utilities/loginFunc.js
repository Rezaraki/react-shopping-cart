import axios from "axios"


const loginFunc = (LoginValues, thenFunctionality, catchFunctionality) => {


    return axios.post('https://nodejs-post-app.herokuapp.com/api/user/login', LoginValues)
        .then(response => {

            dispatch(logUserIn(response.data))
            localStorage.setItem('loggedUserData', JSON.stringify(response.data))
            if (cartCount) navigate('/cart'); else navigate('/')
        })
        .catch(error => { setLoginErr(error.response.data.message) })


}



export default loginFunc;