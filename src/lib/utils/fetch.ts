type FetchResponse<T> = { success: true; data: T } | { message: string; success: false };

const send = async <T>(
	path: string,
	method = 'GET',
	data?: Record<string, string>
): Promise<FetchResponse<T>> => {
	const options = data
		? {
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
		  }
		: { method };

	try {
		const res = await fetch(path, options);
		const json = await res.json();

		if (!res.ok) {
			return { ...json, success: false };
		}
		return { data: json, success: true };
	} catch (err) {
		if (err instanceof Error) {
			return { message: err.message, success: false };
		}
		return { message: 'An error has occurred', success: false };
	}
};

export const get = async <T>(path: string) => send<T>(path);

export const post = async <T>(path: string, data = {}) => send<T>(path, 'POST', data);

export const put = async <T>(path: string, data = {}) => send<T>(path, 'PUT', data);

export const del = async <T>(path: string) => send<T>(path, 'DELETE');
