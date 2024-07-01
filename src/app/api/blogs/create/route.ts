import { NextRequest, NextResponse } from "next/server";
import { blogSchema } from "@/schemas/blogSchema";
import Blog from "@/models/blog/Blog";
import dbConnection from "@/utils/dbConnection";



export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();

    // Validate the request body against the schema
    const parsBody = await blogSchema.parseAsync(body);
    await dbConnection();
    const blog = new Blog(parsBody);
    await blog.save();
    return NextResponse.json({ message: "Blog created successfully" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Invalid Request" }, { status: 400 });
  } 
} 
