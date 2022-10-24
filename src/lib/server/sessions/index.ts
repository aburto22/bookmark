import db from '../db';

export const createSession = async (userId: string) => {
	return db.session.create({ data: { userId } });
};

export const getSession = async (sessionId: string) => {
	return db.session.findUnique({ where: { id: sessionId } });
};

export const removeSession = async (sessionId: string) => {
	return db.session.delete({ where: { id: sessionId } });
};

export const getUserInfoFromSession = async (sessionId: string | undefined) => {
	if (!sessionId) {
		return null;
	}

	const session = await getSession(sessionId);

	if (!session) {
		return null;
	}

	return db.user.findUnique({
		where: { id: session.userId }
	});
};
