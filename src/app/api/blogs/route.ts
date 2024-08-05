import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BlogSchema } from "@/types/BlogType";

async function getNextBId() {
  const highestBlog = await Blog.findOne({}, {}, { sort: { bId: -1 } });
  return highestBlog ? highestBlog.bId + 1 : 0;
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url || "", "http://localhost");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const validPage = page > 0 ? page : 1;
    const validLimit = limit > 0 ? limit : 10;

    const totalDocs = await Blog.countDocuments({});
    const blogs = await Blog.find({})
      .skip((validPage - 1) * validLimit)
      .limit(validLimit);

    const totalPages = Math.ceil(totalDocs / validLimit);

    const pagination = {
      currentPage: validPage,
      totalPages: totalPages,
      totalDocs: totalDocs,
      nextPage: validPage < totalPages ? validPage + 1 : null,
      prevPage: validPage > 1 ? validPage - 1 : null,
    };

    return NextResponse.json({ pagination, blogs });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

// create blog
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const parsedBody = BlogSchema.parse(body); // Validate the request body using zod

    // Add validation logic here

    // check if blog already exists
    const blog = await Blog.findOne({ ...parsedBody });
    if (blog) {
      return NextResponse.json(
        { message: "Blog already exists" },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      ...parsedBody,
      bId: await getNextBId(),
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog saved successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save blog:", error);
    return NextResponse.json({ error: "Failed to save blog" }, { status: 500 });
  }
}
