import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>New Contact Form Submission</Heading>
            
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            
            <Text style={messageText}>
              {message}
            </Text>
            
            <Hr style={hr} />
            
            <Text style={footer}>
              Sent from zynkrosystems.com contact form
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0 20px',
  padding: '0',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '12px 0',
};

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '12px 0',
  padding: '12px',
  backgroundColor: '#f9f9f9',
  borderRadius: '4px',
  border: '1px solid #e1e1e1',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  margin: '20px 0 0 0',
};

export default ContactEmail;