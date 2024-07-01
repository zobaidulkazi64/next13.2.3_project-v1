// pages/api/blogs/index.ts
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog/Blog";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const url = new URL(request.url);
    const query = url.searchParams;

    const page = parseInt(query.get("page") || "1", 10);
    const limit = parseInt(query.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find().skip(skip).limit(limit);

    const totalPages = Math.ceil(totalBlogs / limit);

    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          totalBlogs,
          totalPages,
          currentPage: page,
          limit,
        },
      },
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
