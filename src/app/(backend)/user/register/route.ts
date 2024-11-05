import { UserModel } from "@/database";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password, confirmPassword } = data;

    if (!email || !password || !confirmPassword) {
      return new Response(JSON.stringify("Please fill in all fields!"), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (password !== confirmPassword) {
      return new Response(JSON.stringify("Passwords do not match!"), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    await UserModel.create({
      email,
      password: password,
    });

    return new Response(JSON.stringify("User created successfully!"), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify("User creation failed!"), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
