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

    const page = parseInt(query.get("page") || "1", 3);
    const limit = parseInt(query.get("limit") || "10", 3);
    const skip = (page - 1) * limit;

    const filter = query.get("filter")
      ? JSON.parse(query.get("filter") as string)
      : {};
    const sort = query.get("sort")
      ? JSON.parse(query.get("sort") as string)
      : {};
    const search = query.get("search") || "";

    const aggregationPipeline: any[] = [];
    if (search) {
      aggregationPipeline.push({
        $match: {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { desc: { $regex: search, $options: "i" } },
          ],
        },
      });
    }

    if (Object.keys(filter).length) {
      aggregationPipeline.push({ $match: filter });
    }

    aggregationPipeline.push({ $skip: skip });
    aggregationPipeline.push({ $limit: limit });

    if (Object.keys(sort).length) {
      aggregationPipeline.push({ $sort: sort });
    }

    const totalBlogs = await Blog.countDocuments(filter);
    const blogs = await Blog.aggregate(aggregationPipeline)
      .project({
        _id: 1,
        title: 1,
        desc: 1,
        img: 1,
        date: 1,
        href: 1,
      })
      .exec();

    const totalPages = Math.ceil(totalBlogs / limit);

    const nextLink =
      page < totalPages ? `/api/blogs?page=${page + 1}&limit=${limit}` : null;
    const prevLink =
      page > 1 ? `/api/blogs?page=${page - 1}&limit=${limit}` : null;

    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          totalBlogs,
          totalPages,
          currentPage: page,
          limit,
          nextLink,
          prevLink,
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
