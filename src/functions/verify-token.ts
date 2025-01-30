import { jwtVerify } from "jose"

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false

  try {
    // await jwtVerify(
    //   token,
    //   new TextEncoder().encode(
    //     'SECURITY_STRING',
    //   ),
    //   {
    //     algorithms: ['HS256'],
    //   },
    // );
    return true
  } catch (error: unknown) {
    console.log(">>> verifyToken Error", error)
    return false
  }
}
