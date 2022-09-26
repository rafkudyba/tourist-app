import axios from 'axios';

export const ApiInstance = axios.create({
	baseURL: process.env.REACT_WEB_APP_API
});

export const endpoint = {
	graphql: '/graphql'
}