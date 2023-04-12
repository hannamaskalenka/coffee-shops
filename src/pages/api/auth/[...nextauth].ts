import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req) {
        const { username, password } = credentials;
        const user = { id: "1", username: "hanna", password: "qwerty12345" };

        if (username === user.username && password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),

    debounce(),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
function debounce(): import("next-auth/providers").Provider {
  throw new Error("Function not implemented.");
}
