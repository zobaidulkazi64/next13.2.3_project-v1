import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/utils/dbConnection";


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
