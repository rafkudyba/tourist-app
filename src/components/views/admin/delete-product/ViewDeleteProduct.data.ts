import {Regexes} from '@/utils/regexes';

export let data: Record<string, string> = {
    id: '',
}

export let isValid: Record<string, boolean> = {
    id: false,
}

export let showErrors: Record<string, boolean> = {
    id: false,
}

export let regexes: Record<string, RegExp | undefined> = {
    id: Regexes.reRequired
}

export let errorMessages: Record<string, string> = {
    id: "To pole jest wymagane!"
}