import { addPosts, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json({ message: "OK", posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Error", e },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  const { title, description } = await req.json();

  try {
    const post = {
      id: Date.now().toString(),
      title,
      description,
      date: new Date(),
    };
    addPosts(post);
    return NextResponse.json({ message: "OK", post }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: "Error", e },
      {
        status: 500,
      }
    );
  }
};
