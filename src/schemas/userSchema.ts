import { z } from 'zod';



// login with email and password
export const loginWithEmail = z.object({
  email: z.string(),
  password: z.string(),
});

// signup with email and password
export const signupWithEmail = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string().optional().default(''),
  username: z.string().optional().default(''),
  avatar: z.string().optional().default(''),
  bio: z.string().optional().default(''),
  website: z.string().optional().default(''),
})

// register with google
export const registerWithGoogle = z.object({
  CLIENT_ID: z.string(),
});

// register with facebook
export const registerWithFacebook = z.object({
  APP_ID: z.string(),
});

// register with github
export const registerWithGithub = z.object({
  CLIENT_ID: z.string(),
});