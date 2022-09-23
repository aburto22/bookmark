export const getLink = (tag: string): string => `/tags/${tag}`;

export const getName = (tag: string): string =>
	tag.replace(/(-|\b)([a-z])/g, (match, p1, p2) => {
		return `${p1}${p2.toUpperCase()}`;
	});
