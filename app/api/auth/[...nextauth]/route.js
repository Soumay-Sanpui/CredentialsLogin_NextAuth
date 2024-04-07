import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            
            name: 'Credentials',
            
            credentials: {},
            
            authorize(credentials) {
                
                const user = {name: process.env.USER_NAME, id: '1', email: 'somu@gmail.com'}
                

                if(credentials.username == user.name && credentials.password == process.env.USER_PASSWORD) {
                
                    return user;
                }
                return null;
            }
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 10
    },
    pages: {
        signIn: '/'
    },
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}