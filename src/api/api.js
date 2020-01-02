import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9ad26d7d-93fb-4b1e-891a-6d40f3d93505'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    getUnfollowUser(userId) {
       return instance.delete(`follow/${userId}`)
           .then(response => response.data);
    },

    getFollowUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    }
}






