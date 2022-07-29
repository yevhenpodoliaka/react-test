import { useState } from 'react';
import styled from 'styled-components';

export default function TodoEditer({ onSubmit }) {
  const [text, setText] = useState('');
  const handleChange = e => {
    this.setState({ text: e.currentTarget.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <textarea value={text} onChange={handleChange}></textarea>
      <Btn type="submit">Створити</Btn>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  margin-top: 10px;
`;
