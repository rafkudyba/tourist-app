export const Regexes = {
    reNameAndSurname: /^[a-zA-z]{2,} [a-zA-z]{2,}$/,
    reEmail: /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/,
    rePhone: /^[0-9]{9,}$/,
    reUsername: /^[a-zA-z]{2,}/,
    reRequired: /^[\s\t\r\n]*\S+/,
}