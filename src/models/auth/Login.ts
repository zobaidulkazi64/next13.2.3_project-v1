import { Document, Schema, model } from 'mongoose'


export interface ILogin extends Document {
    username: string
    password: string
}


const LoginSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const Login = model<ILogin>('Login', LoginSchema)
export default Login;