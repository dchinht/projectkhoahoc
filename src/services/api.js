import axios from "axios";

export const apiGetProvinces = () => new Promise ((resolve,reject) => {
    try {
        let res =  axios.get("https://vapi.vnappmob.com/api/province/")
        resolve(res);
    } catch (error) {
        reject(error)
    }
})

export const apiGetDistrict = (provinceId) => new Promise ((resolve,reject) => {
    try {
        let res =  axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
        resolve(res);
    } catch (error) {
        reject(error)
    }
})

export const apiGetWard = (districtId) => new Promise ((resolve,reject) => {
    try {
        let res =  axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        resolve(res);
    } catch (error) {
        reject(error)
    }
})

