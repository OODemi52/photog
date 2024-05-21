import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  number: string;
  interest: string;
  date: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  interest,
  date,
  message,
}) => (
  <div>
    <h1>Booking Request from {name}!</h1>
    <p>Request:</p>
    <ul>
      <li>Interest: {interest}</li>
      <li>Date: {date}</li>
      <li>Message: {message}</li>
    </ul>
    <p>Contact Information:</p>
    <ul>
      <li>Email: {email}</li>
      <li>Phone Number: {number}</li>
    </ul>
  </div>
);