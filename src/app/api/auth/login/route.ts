import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import  User from "@/models/auth/User";
import { loginWithEmail } from "@/schemas/userSchema";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    // Validate request body
    const parsedBody = loginWithEmail.safeParse(body);
    if (!parsedBody.success) {
      logger.warn("Login validation failed", parsedBody.error);
      return NextResponse.json({
        success: false,
        message: "Invalid request body",
        error: parsedBody.error.errors,
      });
    }

    console.log(parsedBody.data);


   

    // Check if user exists
    const user = await User.findOne({ email: parsedBody.data.email });
    if (!user) {
      logger.warn("User not found");
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }


   
    // Check if password is correct
    const isPasswordCorrect = await bcryptjs.compare(
      parsedBody.data.password,
      user.password
    );
    if (!isPasswordCorrect) {
      logger.warn("Incorrect password");
      return NextResponse.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // // Generate token
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email as string },
    //   process.env.JWT_SECRET as string,
    //   { expiresIn: "1h" } // Set token expiration time as 1 hour
    // );

    // // Set cookie
    // const response = NextResponse.json({
    //   success: true,
    //   message: "Login successful",
    //   data: { authToken: token },
    // });

    // response.cookies.set("authToken", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production", // Use secure flag in production
    //   maxAge: 60 * 60, // 1 hour
    //   path: "/",
    // });

    return NextResponse.json({
      success: true,
      message: "Login successful",
      // data: { authToken: token },
    })
  } catch (error) {
    logger.error("Something went wrong", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
}
