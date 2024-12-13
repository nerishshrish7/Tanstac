import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postData } from './api/api';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const mutation = useMutation(postData, {
    onSuccess: (data) => {
      console.log('Data posted successfully:', data);
      setInputValue('');
    },
    onError: (error) => {
      console.error('Error posting data:', error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ value: inputValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter some data"
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Submitting...' : 'Submit'}
      </button>
      {mutation.isError && <p style={{ color: 'red' }}>Error: {mutation.error.message}</p>}
      {mutation.isSuccess && <p style={{ color: 'green' }}>Data submitted successfully!</p>}
    </form>
  );
};

export default MyForm;
