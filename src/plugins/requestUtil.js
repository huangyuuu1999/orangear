import axios from "axios"

const Port = 30010
const request = axios.create({
    baseURL: "http://localhost:" + Port,
    timeout: 2000
})

export default request
