import Axios from 'axios' 

const Api = Axios.create({
    baseURL: 'https://lucasmelonodeform.herokuapp.com/'
})

export default Api