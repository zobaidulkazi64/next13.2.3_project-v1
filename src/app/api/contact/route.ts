// api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import Contact from "@/models/contact/Contact";
import { contactSchema } from "@/schemas/contactSchema";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();

    // validate request body
    const parsedBody = contactSchema.safeParse(body);
    if (!parsedBody.success) {
      logger.warn("Blog validation failed", parsedBody.error);
      return NextResponse.json({
        success: false,
        message: "Invalid request body",
        error: parsedBody.error.errors,
      });
    }

    // Messages already exists
    const contact = await Contact.findOne({ message: parsedBody.data.message });
    if (contact) {
      logger.warn("Message already sent⭐", contact);
      return NextResponse.json({
        success: false,
        message: "Message already sent⭐",
      });
    }
    

    // create new blog
    const contactData = new Contact(parsedBody.data);
    await contactData.save();
    logger.info("Blog created successfully");
    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      data: contactData,
    });
  } catch (error) {
    logger.error("Something went wrong", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      logger: error,
    });
  }
}
