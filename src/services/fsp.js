
import { BANK_REGISTRY_API,API_SERVER } from "../constants";
import axios from "axios";

export function getFsp(biscode) {
	return new Promise((resolve, reject) => {
		axios(`${BANK_REGISTRY_API}/api/v1/banks/${biscode}`)
			.then(d => {
				resolve(d);
			})
			.catch(err => reject(err?.response?.data));
	});
}

export function getProjectDetails(projectId) {
	return new Promise((resolve, reject) => {
		axios
			.get(`${API_SERVER}/api/v1/projects/${projectId}`, {
				//headers: { access_token: access_token }
			})
			.then(res => {
				if (res.statusText === 'OK') {
					resolve(res.data);
				}
				reject(res.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}