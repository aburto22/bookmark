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
		: {};

	const res = await fetch(path, options);
	const json = await res.json();

	if (!res.ok) {
		return { ...json, success: false };
	}
	return { data: json, success: true };
};

export const get = async <T>(path: string) => send<T>(path);

export const post = async <T>(path: string, data = {}) => send<T>(path, 'POST', data);
