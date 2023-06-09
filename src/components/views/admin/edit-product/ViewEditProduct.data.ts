import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    name: "",
    content: "",
    id: '',
}

export let isValid: Record<string, boolean> = {
    name: true,
    content: true,
    id: false,
}

export let showErrors: Record<string, boolean> = {
    name: false,
    content: false,
    id: false,
}

export let regexes: Record<string, RegExp | undefined> = {
    id: Regexes.reRequired
}

export let errorMessages: Record<string, string> = {
    name: "To pole jest wymagane!",
    description: "To pole jest wymagane!",
    content: "To pole jest wymagane!",
    id: "To pole jest wymagane!"
}