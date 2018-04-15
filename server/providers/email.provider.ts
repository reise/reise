import { createTransport, SendMailOptions, SentMessageInfo } from "nodemailer";
import { template } from "../utils/email-template.html";

export namespace EmailProvider {

    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'socket.io.notifications@gmail.com',
            pass: '%3Dcr%26ei%3DJ3IZVfiiEOXV8gfjnoDoAw%26gws_rd%3Dssl&hl=en'
        }
    });

    let mailOptions: SendMailOptions = {
        from: 'socket.io.notifications@gmail.com',
        subject: 'Reise - Verification Email',
        html: template
    }

    export function sendEmailVerification(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {

            mailOptions.to = email;

            transporter.sendMail(mailOptions)
                .then((info: SentMessageInfo) => {
                    console.log(info.response);
                })
                .catch((error: any) => {
                    console.log(error);
                });
        });
    }

    export function verifyEmail(): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {

        });
    }
}