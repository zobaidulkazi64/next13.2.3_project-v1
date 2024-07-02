import { NextRequest, NextResponse } from "next/server";
import Contact from "@/models/contact/Contact";
import dbConnect from "@/utils/dbConnection";
import { Types } from "mongoose";
import {contactSchema} from "@/schemas/contactSchema"

interface Params {
  params: {
    id: string;
  };
}

// Get contact by ID
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
    const notice = await Contact.findById(id);

    // Check if the notice exists
    if (!notice) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Respond with the fetched notice
    return NextResponse.json({ notice });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error fetching Blog:", error);

    // Respond with an error message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// Update contact by ID
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
    const { error, data } = contactSchema.safeParse(await request.json());
    if (error) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    // Find the notice by ID and update it
    const updatedNotice = await Contact.findByIdAndUpdate(id, data, {
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




// Delete contact by ID

export async function DELETE(request: NextRequest, { params }: Params) {

  try {
    await dbConnect();

    const { id } = params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return NextResponse.json(
        { success: false, message: "Contact not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Contact deleted successfully" },
      { status: 200 }
    );

  } catch (error) {
     return NextResponse.json(
       { success: false, message: "Deletion failed"},
       { status: 400 }
     );
  }
}