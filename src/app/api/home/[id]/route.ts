import Notice from "@/models/Home";
import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { Types } from "mongoose";
import { NoticeSchema } from "@/schemas/homeSchema";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the ID from the request params
    const { id } = params;

    console.log(params.id);

    // Check if the ID is a valid ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    // Fetch the notice by ID from the database
    const notice = await Notice.findById(id);

    // Check if the notice exists
    if (!notice) {
      return NextResponse.json({ error: "Notice not found" }, { status: 404 });
    }

    // Respond with the fetched notice
    return NextResponse.json({ notice });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching notice:", error);

    // Respond with an error message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// update notice

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    // Connect to the database
    await dbConnect();

    // Get the ID from the request params
    const { id } = params;

    // Check if the ID is a valid ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    // Validate and parse the request body
    const { error, data } = NoticeSchema.safeParse(await request.json());
    if (error) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    // Find the notice by ID and update it
    const updatedNotice = await Notice.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Run model validations
    });

    // Check if the notice exists
    if (!updatedNotice) {
      return NextResponse.json({ error: "Notice not found" }, { status: 404 });
    }

    // Respond with the updated notice
    return NextResponse.json({
      message: "Notice updated successfully",
      notice: updatedNotice,
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error connecting to database:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
