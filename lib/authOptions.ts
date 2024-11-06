import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Temporarily disable the authentication
const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, // Secret key for signing session cookies (still required for sessions)
  
  // Temporarily allow all users, no providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "foo" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const response = await fetch(`${process.env.API_URL}/auths/login`, {
    //       method: "POST",
    //       headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email: credentials?.email, password: credentials?.password }),
    //     });

    //     const data = await response.json()

    //     if (response.status === 201 && response.ok && isAccess(data)) {
    //       console.log("Users Data: ", data);
    //       return data;
    //     }

    //     return null;
    //   },
    // }),
  ],

  // Custom pages (still required for sign-in and error handling)
  pages: {
    signIn: "/login", // Still using custom login page
    error: "/error", // Custom error page
  },

  // Session strategy (keeping it as JWT for now)
  session: {
    strategy: "jwt",
  },

  // Callbacks are not needed temporarily, but we will keep them empty
  callbacks: {
    async signIn({ user, account, profile }) {
      // Temporarily ignore signIn logic, no checks
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      // Temporarily ignore JWT token modifications, allow all users
      return token;
    },
    async session({ session, token }) {
      // Temporarily allow all users in the session
      return { ...session, user: { ...token, hasTokenLocal: token.hasTokenLocal } };
    },
  },
};

export default authOptions;
