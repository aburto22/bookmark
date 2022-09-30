type FetchResponse<T> = { success: true; data: T } | { message: string; success: false };

const send = async <T>(path: string, method = 'GET', data = {}): Promise<FetchResponse<T>> => {
	const options = data
		? {
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
		  }
		: { method };

	const res = await fetch(path, options);
	const json = await res.json();

	if (!res.ok) {
		return { ...json, success: false };
	}
	return { data: json, success: true };
};

export const get = async <T>(path: string) => send<T>(path);

export const post = async <T>(path: string, data = {}) => send<T>(path, 'POST', data);

export const put = async <T>(path: string, data = {}) => send<T>(path, 'PUT', data);

export const del = async <T>(path: string) => send<T>(path, 'DELETE');
