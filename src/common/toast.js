import { toast } from 'react-toastify';

export const showSucess = (msg) => {
    return toast.success(msg)
}

export const showError = err => {
    return toast.error(err)
}