export { auth as middleware } from "@/auth"

export const config = {
    matcher: [
        '/session'
    ],
    pages: {
        signIn: '/app/auth/signin'
    }
}