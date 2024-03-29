import {
    FETCH_USERS_PENDING,
    FETCH_USERS_ERROR,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_SUCCESS,
    USER_LOGOUT,
} from '../constants/users'
import config from '../../config';
import { FrameAttribute } from 'expo/build/AR';

export const signIn = (user) => {
    return dispatch => {
        return new Promise( (resolve, reject) => {
            dispatch({ type: FETCH_USERS_PENDING});
            fetch(`${config.server}/users/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then( response => response.json())
            .then( data => {
                console.log(data)
                switch(data.status){
                    case 0:
                    case 1:
                    case 3:
                        dispatch({ type: FETCH_USERS_ERROR, payload: {user: data.message}})
                        return resolve({ user: false, message: data.message })
                    case 2:
                        dispatch({ type: USER_SIGNIN_SUCCESS, payload: {user: data.user}})
                        return resolve({ user: data.user, message: data.message });
                }
            })
            .catch( err => {
                dispatch({ type: FETCH_USERS_ERROR, payload: {err}})
                return reject(err);
            });
        })
    }
}

export const signUp = (user) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const typeUser = 'patient'
            const formData = new FormData();
            formData.append('userImage', { uri: user.image, name: `${user.name}.jpg`, type: 'image/jpg'});
            formData.append('name', user.name);
            formData.append('birthday', user.birthday);
            formData.append('voice', true);
            formData.append('email', user.email);
            formData.append('password', user.password);
            formData.append('type_user', typeUser);
            user.tutorEmail !== '' && formData.append('tutorEmail', user.tutorEmail);
            
            dispatch({ type: FETCH_USERS_PENDING});
            fetch(`${config.server}/users/signup`, {
                method: 'POST',
                body: formData
            })
            .then( response => {
                return response.json()
            })
            .then( data => {
                if(data){
                    user.id = data.id;
                    user.image = data.path;
                    user.typeUser = typeUser;
                    dispatch({ type: USER_SIGNUP_SUCCESS, payload: {user}});
                    return resolve({response: '', status: true});
                }
            })
            .catch( err => {
                dispatch({ type: FETCH_USERS_ERROR, payload: {err}})
                return reject({response: err, status: false})
            });
        });
    }
}

export const logOut = () => {
    return dispatch => {
        localStorage.setItem('user', JSON.stringify({}))
        dispatch({ type: USER_LOGOUT, payload: { user: {} } })
    }
}