import React from 'react';

const CodePreview = ({ value }) => (
  // eslint-disable-next-line
  <pre>{ value.code }</pre>
);

export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      code: 'code',
    },
    component: CodePreview,
  },
};
