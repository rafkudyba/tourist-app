import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    name: "",
    content: "",
}

export let isValid: Record<string, boolean> = {
    name: false,
    content:false,
}

export let showErrors: Record<string, boolean> = {
    name: false,
    content: false,
}

export let regexes: Record<string, RegExp | undefined> = {
    name: Regexes.reRequired,
    content: Regexes.reRequired,
}

export let errorMessages: Record<string, string> = {
    name: "To pole jest wymagane!",
    description: "To pole jest wymagane!",
    content: "To pole jest wymagane!",
}