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

    export function sendBookingVerification(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve: Function, reject: Function) => {
            mailOptions.subject = "Reise - Booking Confirmed!!"
            mailOptions.to = email;
            mailOptions.html = `
                <h3 style="text-align: center; color:  green;">Booking Confirmed!!</h3>
                <br>
                <p>Dear user ${email}! Greetings from Reise Travels!! Your booking is has now been confirmed!</p>
                <br>
                <p>Please make sure you pay the specified amount before travel date to avoid ticket cancellation</p>
                <br>
                <p>For any queries, reply to this email.</p>
            `;

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