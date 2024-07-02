import { z } from 'zod';



// login with email and password
export const loginWithEmail = z.object({
  email: z.string(),
  password: z.string(),
});

// register with email and password
export const registerWithEmail = z.object({
  email: z.string(),
  password: z.string(),
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