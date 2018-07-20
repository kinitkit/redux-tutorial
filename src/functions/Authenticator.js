import { loginStatus } from './LocalStorage';

export function authenticate() {
    return loginStatus;
}