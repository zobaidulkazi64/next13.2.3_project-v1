import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    // Extract the bId from the URL path
    const url = new URL(req.url || ""); // Provide base URL for the URL constructor
    const bId = url.pathname.split("/").pop(); // Get the last segment of the path

    console.log("Received bId:", bId); // Debugging

    if (!bId || isNaN(Number(bId))) {
      return NextResponse.json({ error: "Invalid bId" }, { status: 400 });
    }

    // Convert bId to number
    const numericBId = Number(bId);

    // Find blog by bId
    const blog = await Blog.findOne({ bId: numericBId });

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
