import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const values = await request.json();

        values.date = new Date(values.date);

        const interest = values.interest.charAt(0).toUpperCase() + values.interest.slice(1);

        const { data, error } = await resend.emails.send({
            from: 'D-Labs <admin@dlabs.photo>',
            to: ['dlabsllc@gmail.com'],
            subject: `Booking Request - ${values.interest} for ${values.name} on ${values.date.toDateString()}`,
            react: EmailTemplate({ name: values.name, email: values.email, number: values.number, interest, date: values.date.toDateString(), message: values.message }),
            text: 'Booking Request',
        });

        if (error) {
            console.error(error);
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data));
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}
