import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'users:updateUser',
    API_REQUEST_ERROR = 'users:onError',
    API_REQUEST_REQUEST = 'users:onRequest'

export function updateUser(newUser) {
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'ERROR!!'
        }
    }
}

export function onRequest() {
    return {
        type: API_REQUEST_REQUEST,
        payload: {
            user: 'REQUESTING...'
        }
    }
}

export function apiRequest() {
    return dispatch => {
        $.ajax({
            url: 'http://google.com',
            success() {
                console.log('SUCCESS');
            },
            error() {
                console.log('ERROR');

                dispatch(showError());
            }
        })
    }
}