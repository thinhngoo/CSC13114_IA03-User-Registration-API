import { cookies } from "next/headers";
import { UserModel } from "@/database";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    if (!email || !password) {
      return new Response(JSON.stringify("Please fill in all fields!"), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify("User not found!"), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (user.password !== password) {
      return new Response(JSON.stringify("Incorrect password!"), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const cookieStore = await cookies();
    cookieStore.set("user", JSON.stringify(user));

    return new Response(JSON.stringify("Login successful!"), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify("Login failed!"), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
