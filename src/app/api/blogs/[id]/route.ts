import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { BlogSchema } from "@/types/BlogType";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Extract the bId from the URL path
    const url = new URL(req.url || ""); // Provide base URL for the URL constructor
    const bId = url.pathname.split("/").pop(); // Get the last segment of the path

    console.log("Received bId:", bId); // Debugging

    // Check if bId is valid
    if (!bId || isNaN(Number(bId))) {
      return NextResponse.json({ error: "Invalid bId" }, { status: 400 });
    }

    // Find blog by bId
    const blog = await Blog.findOne({ bId: Number(bId) }); // Use a consistent type

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error); // Add error logging
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// update blog

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();

    // Parse the request URL to extract the blog ID
    const url = new URL(req.url || "");
    const bId = url.pathname.split("/").pop();

    if (!bId || isNaN(Number(bId))) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const numericBId = Number(bId);
    const body = await req.json();

    // Validate the request body using zod
    const parsedBody = BlogSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Check if blog already exists
    const blog = await Blog.findOne({ bId: numericBId });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Update the blog with the given ID
    const updatedBlog = await Blog.findOneAndUpdate(
      { bId: numericBId },
      parsedBody.data,
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated successfully", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();

    // Parse the request URL to extract the blog ID
    const url = new URL(req.url || "");
    const bId = url.pathname.split("/").pop();

    if (!bId || isNaN(Number(bId))) {
      return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
    }

    const numericBId = Number(bId);

    // Delete the blog with the given ID
    const deletedBlog = await Blog.findOneAndDelete({ bId: numericBId });

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
