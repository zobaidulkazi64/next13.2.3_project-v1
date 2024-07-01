import { NextRequest, NextResponse } from "next/server";
import { blogSchema } from "@/schemas/blogSchema";
import Blog from "@/models/blog/Blog";
import dbConnect from "@/utils/dbConnection";



export async function POST(request: NextRequest, response: NextResponse) {

  await dbConnect();
  const body = await request.json();


  
  return NextResponse.json({
    message: "Blog created successfully",

    blog: await Blog.create(body),

  });
}