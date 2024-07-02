import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "@/models/auth/User";
import { signupWithEmail } from "@/schemas/userSchema";
import dbConnect from "@/utils/dbConnection";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) { 
    try {
      await dbConnect();
      const body = await request.json();
      // Validate request body
      const parsedBody = signupWithEmail.safeParse(body);
      if (!parsedBody.success) {
        logger.warn("Signup validation failed", parsedBody.error);
        return NextResponse.json({
            success: false,
            status: 400,
          message: "Invalid request body",
            error: parsedBody.error.errors,
          
        });
      }

      // Check if user already exists
      const existingUser = await User.findOne({
        email: parsedBody.data.email,
      });
      if (existingUser) {
        logger.warn("User already exists");
        return NextResponse.json({
          success: false,
          message: "User already exists",
        });
      }

      // Hash the password
      const hashedPassword = await bcryptjs.hash(parsedBody.data.password, 10);

          // Create new user
        const newUser = new User({
          ...parsedBody.data,
          password: hashedPassword,
        });

        await newUser.save();
        logger.info("User created successfully");
        return NextResponse.json({
          success: true,
          message: "User created successfully",
          data: newUser,
            });
          

        //   // Generate token
        //   const token = jwt.sign(
        //     { userId: newUser._id, email: newUser.email },
        //     process.env.JWT_SECRET as string,
        //     { expiresIn: "1h" } // Set token expiration time as 1 hour
        //   );

        //   // Set cookie
        //   const response = NextResponse.json({
        //     success: true,
        //     message: "Signup successful",
        //     data: { authToken: token },
        //   });

        //   response.cookies.set("authToken", token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production", // Use secure flag in production
        //     maxAge: 60 * 60, // 1 hour
        //     path: "/",
        //   });

        //   return response;
    } catch (error) {
        logger.error("Something went wrong", error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
            error: error,
        });
    }
}