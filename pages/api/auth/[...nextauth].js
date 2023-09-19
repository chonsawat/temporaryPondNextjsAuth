import { authOptions } from 'auth';

import NextAuth from 'next-auth/next';

export const handler = NextAuth(authOptions);
