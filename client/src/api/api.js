import axios from "axios";



const instance = axios.create({
    baseURL: 'http://localhost:3001/api'
})


export const devicesAPI = {
    async getAllDevices(){
        return await instance.get(`device/all`)
    },
    async getAllTypedDevices(id){
        return await instance.get(`device/all?typeId=${id}`)
    },
    async createDevice(formData){
        return await instance.post(`device/`,formData)
    },
    async getSelectedDevice(id){
        return await instance.get(`device/${id}`)
    },

    async deleteDevice(deviceId){
        return await instance.delete(`device?id=${deviceId}`)
    }

}


export const typesAPI = {
    async getTypes(){
        return await instance('type')
    },

    async postType(value,EN){
         await instance.post('type',{name:value,EN:EN})
    }
}


export const brandAPI = {
    async createNewBrand(value){
        return await instance.post('brand',{name:value})
    },

    async getBrands(){
         return await instance.get('brand')
    } 
}


export const userAPI = {
    async login(email,password){
        return await instance.post(`user/login`,{email,password})
    },

    async registration(email,password){
        return await instance.post('user/registration',{email,password})
    }
}

export const basketAPI = {
    async getBasketDevices(id){
        return await instance.get(`basket?basketId=${id}`)
    },

    async setBasketDevice(basketId,deviceId){
        return await instance.post('basket',{basketId,deviceId})
    },

    async deleteBasketDevice(basketId,deviceId){
        return await instance.delete(`basket?basketId=${basketId}&deviceId=${deviceId}`)
    }
}

export const reviewsAPI = {
    async getDeviceReviews(deviceId){
        return await instance.get(`reviews/device_reviews?deviceId=${deviceId}`)
    },

    async createDeviceReview (text,userId,deviceId,userName) {
        return await instance.post(`reviews`,{text,userId,deviceId,userName})
    }
}

export const ordersAPI = {
    async createOrder(address,userId,deviceId){
        return await instance.post(`orders`,{address,userId,deviceId})
    },

    async getAllOrders(){
        return await instance.get(`orders/all_orders`)
    }
}