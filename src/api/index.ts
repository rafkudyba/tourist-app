import axios from 'axios';

export const ApiInstance = axios.create({
	baseURL: process.env.REACT_APP
});

export const endpoint = {
	graphql: '/graphql'
}