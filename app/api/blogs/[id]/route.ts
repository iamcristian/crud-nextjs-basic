import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

export const GET = async (req: Request, context: { params: Params }) => {
  try {
    const post = getById(context.params.id);
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "OK", post }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  }
};

export const PUT = async (req: Request, context: { params: Params }) => {
  try {
    const { title, description } = await req.json();
    const id = context.params.id;
    updatePost(id, title, description);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  }
};

export const DELETE = async (req: Request, context: { params: Params }) => {
  try {
    const id = context.params.id;
    deletePost(id);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  }
};
