import { NextRequest, NextResponse } from "next/server";
import { blogSchema } from "@/schemas/blogSchema";
import Blog from "@/models/blog/Blog";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";


export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await dbConnect();

    const body = await request.json();
    // validate request body
    const parsedBody = blogSchema.safeParse(body);
    if (!parsedBody.success) {
     logger.warn("Blog validation failed",parsedBody.error);
      return NextResponse.json({
        success: false,
        message: "Invalid request body",
        error: parsedBody.error.errors,
        
      });
      
    }

    // check if blog already exists
    const blog = await Blog.findOne({ title: parsedBody.data.title });
    if (blog) {
      logger.info("Blog already exists");
      return NextResponse.json({
        success: false,
        message: "Blog already exists",
      });
    }

    // create new blog
    const newBlog = new Blog(parsedBody.data);
    await newBlog.save();
    logger.info("Blog created successfully");
    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      data: newBlog,
      
    });

  } catch (error) {
    logger.error("Something went wrong", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      logger: error,
    });
  }
}