import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    name: "",
    olxLink: "",
    id: '',
}

export let isValid: Record<string, boolean> = {
    name: true,
    olxLink: true,
    id: false,
}

export let showErrors: Record<string, boolean> = {
    name: false,
    olxLink: false,
    id: false,
}

export let regexes: Record<string, RegExp | undefined> = {
    id: Regexes.reRequired
}

export let errorMessages: Record<string, string> = {
    name: "To pole jest wymagane!",
    description: "To pole jest wymagane!",
    olxLink: "To pole jest wymagane!",
    id: "To pole jest wymagane!"
}