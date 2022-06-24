import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export default NextAuth({
providers: [
  GoogleProvider({
    clientId: '660389076567-1tbletgbvnq5ugs8pb63cl7l3u064cs3.apps.googleusercontent.com'    ,
    clientSecret: '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'
  }),
  GitHubProvider({
    clientId: "d1d9f4ef1cad3e6f18ba",
    clientSecret: "c6b78df0caf29f8d1659291dc8c19b5d3a746754"
  })

],
  jwt:{
    encryption: true
    },
    secret: process.env.SECRET,
 });