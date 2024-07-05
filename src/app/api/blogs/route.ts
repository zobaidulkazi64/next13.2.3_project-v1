// pages/api/blogs/index.ts
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog/Blog";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const blogs = await Blog.find();
    return NextResponse.json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    logger.error("Something went wrong", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
}
