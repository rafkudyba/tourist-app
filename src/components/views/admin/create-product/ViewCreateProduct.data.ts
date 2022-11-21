import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    name: "",
    olxLink: "",
}

export let isValid: Record<string, boolean> = {
    name: false,
    olxLink: false,
}

export let showErrors: Record<string, boolean> = {
    name: false,
    olxLink: false,
}

export let regexes: Record<string, RegExp | undefined> = {
    name: Regexes.reRequired,
    olxLink: Regexes.reRequired
}

export let errorMessages: Record<string, string> = {
    name: "To pole jest wymagane!",
    description: "To pole jest wymagane!",
    olxLink: "To pole jest wymagane!"
}