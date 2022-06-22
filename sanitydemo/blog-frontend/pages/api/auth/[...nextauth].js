import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
providers: [
  GoogleProvider({
    clientId: '660389076567-1tbletgbvnq5ugs8pb63cl7l3u064cs3.apps.googleusercontent.com'    ,
    clientSecret: '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'
  })
],
  jwt:{
    encryption: true
    },
    secret: process.env.SECRET,
    callbacks: {
        async jwt(token, account){
            if (account?.accessToken){
            token.accessToken = token.accessToken;
        }
        return token;
    }  
}
});