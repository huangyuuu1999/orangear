import axios from "axios"

const Port = "30010"
const ServiceIP = "43.139.176.247"

// const Port = "5173"
// const ServiceIP = "127.0.0.1"


const request = axios.create({
    baseURL: "http://" + ServiceIP + ":" + Port,
    timeout: 2000
})

export default request
