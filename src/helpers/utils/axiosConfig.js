import axios from 'axios';
import { apiUrl } from '.././api/routes';
async function apiCall(path, method, body) {
	const config = {
		url: apiUrl + path,
		method: method,
		data: body,
		
	};
	return axios(config);
}

export default apiCall;