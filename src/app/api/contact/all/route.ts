import { NextRequest, NextResponse } from "next/server";
import Contact from "@/models/contact/Contact";
import dbConnect from "@/utils/dbConnection";

export async function GET(request: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);

  const startIndex = (page - 1) * limit;

  const totalDocs = await Contact.countDocuments();
  const contacts = await Contact.find().skip(startIndex).limit(limit);

  const nextPage = page < Math.ceil(totalDocs / limit) ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  const result = {
    totalDocs,
    currentPage: page,
    totalPages: Math.ceil(totalDocs / limit),
    nextPage,
    prevPage,
    data: contacts,
  };

  return NextResponse.json(result, { status: 200 });
}
