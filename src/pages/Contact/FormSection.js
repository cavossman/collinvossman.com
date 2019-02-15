import React from 'react';
import Form from '../../components/Form';
import { css } from 'emotion';

const styles = css`
  padding-top: 100px;
`;

const formConfig = {
  heading: 'Contact Me',
  submitMessage: {
    pre: 'If you want to get in touch with me, fill out the form below and I will get back to you as soon as I can.',
    post: 'Thank you for contacting me, I will be in touch with you soon.',
  },
  fields: [
    {
      'key': 'name',
      'label': 'Name',
      'type': 'text',
    },
    {
      'key': 'email',
      'label': 'Email',
      'type': 'text',
    },
    {
      'key': 'message',
      'label': 'Message',
      'type': 'textarea',
    },
  ]
}

function FormSection() {
  return (
    <div className={styles}>
      <div className="container">
        <Form
          config={formConfig}
        />
      </div>
    </div>
  );
}
export default FormSection;
