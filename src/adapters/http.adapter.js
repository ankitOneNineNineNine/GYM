import Axios from 'axios'


const http = Axios.create({
    baseURL: ''
})

export const GET = (url, authed = false) => {
    return http({
        method: 'GET',
        url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authed ? localStorage.getItem('hash') : null
        }

    })
        .then(result => result.data)
}


export const POST = (url, data, type, authed = false) => {
console.log('here', url, data)
}

export const PUT = (url, data, type, authed = false) => {
    return http({
        method: 'PUT',
        url,
        data,
        headers: {
            'Content-Type': type ? type : 'application/json',
            'Authorization': authed ? localStorage.getItem('hash') : null
        }
    })
        .then(result => result.data)
}

export const DELETE = (url, authed = false) => {
    return http({
        method: 'DELETE',
        url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authed ? localStorage.getItem('hash') : null
        }
    })
        .then(result => result.data)

}