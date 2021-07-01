import request from '../utils/request';

export const login = (username: string, password: string) => {
    return request({
        url: '/admin/login',
        method:'POST',
        data: {username: username,password: password}
    })
}