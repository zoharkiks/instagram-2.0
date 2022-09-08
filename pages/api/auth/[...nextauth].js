import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
   
  ],

  pages:{
    signIn: '/auth/signin'
  }
}
export default NextAuth(authOptions)