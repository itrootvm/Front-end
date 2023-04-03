import axios from "@services/api/axios";

const RegApi = {
    registration: (data) => axios.post('/reset', data),
    login: (data) => axios.post('/login', data),
    resetPassword: (data) => axios.post('/reset-by-email', data),
    getProfile: () => axios.get('/user/info'),
    deleteAvatar: (avatarId) => axios.delete(`/avatar/${avatarId}`),
    updateAvatar: (data) =>
      axios.post('/avatar', data, {
        headers: { 'Content-type': 'multipart/form-data' },
      }),
}
export default RegApi;