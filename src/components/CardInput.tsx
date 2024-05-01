// CardInput.tsx
import React from 'react';

interface CardInputProps {
  title: string; // Judul untuk card input
  children: React.ReactNode; // Children untuk konten form
}

const CardInput: React.FC<CardInputProps> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <div className="bg-gray-500 p-2 rounded">
        <h2 className="text-lg">{title}</h2>
      </div>
      <div className="border border-gray-500 p-5 rounded">
        {children}
      </div>
    </div>
  );
};

export default CardInput;
