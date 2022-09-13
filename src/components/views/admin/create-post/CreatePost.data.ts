import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    username: "",
    password: "",
}

export let isValid: Record<string, boolean> = {
    username: false,
    password: false
}

export let showErrors: Record<string, boolean> = {
    username: false,
    password: false
}

export let regexes: Record<string, RegExp | undefined> = {
    username: Regexes.reUsername,
    password: Regexes.reRequired
}

export let errorMessages: Record<string, string> = {
    username: "Login powinien zawierać przynajmniej dwa znaki!",
    password: "To pole jest wymagane!"
}