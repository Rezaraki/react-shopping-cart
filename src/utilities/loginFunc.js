import axios from "axios"


const loginFunc = (LoginValues, thenFunctionality, catchFunctionality) => {


    return axios.post('https://nodejs-post-app.herokuapp.com/api/user/login', LoginValues)


}



export default loginFunc;