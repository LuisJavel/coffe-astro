export const prerender = false;
import type { APIRoute } from "astro";



export const POST: APIRoute = async ({request}) =>{
    const email = await request.json()

    console.log(email)

    return new Response(JSON.stringify({}),{
        status: 201
    })
}