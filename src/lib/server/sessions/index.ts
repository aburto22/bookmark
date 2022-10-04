import { nanoid } from 'nanoid';
import type { Session } from 'src/types';

let sessions: Session[] = [];

export const createSession = async (userId: string) => {
	const newSession = {
		sessionId: nanoid(),
		userId
	};

	sessions = [...sessions, newSession];

	console.log(sessions);

	return newSession;
};

export const getSession = async (sessionId: string) => {
	return sessions.find((s) => s.sessionId === sessionId);
};

export const removeSession = async (sessionId: string) => {
	const session = sessions.find((s) => s.sessionId === sessionId);

	if (!session) {
		throw new Error('Session not found');
	}

	sessions = sessions.filter((s) => s.sessionId !== sessionId);

	return session;
};
