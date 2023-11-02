'use client'
import React, { useState } from 'react';

const AddAnnouncementForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [isTextareaVisible, setIsTextareaVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content });
    setContent('');
    setIsTextareaVisible(false);
  };

  const toggleTextarea = () => {
    setIsTextareaVisible(!isTextareaVisible);
  };

  return (
    <div className="mt-4">
      <button
        onClick={toggleTextarea}
        className="bg-blue-500 text-white rounded-lg p-2"
      >
        Add Announcement
      </button>
      {isTextareaVisible && (
        <form onSubmit={handleSubmit} className="mt-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a new announcement"
            className="w-full h-32 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-2 mt-2"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
};

export default AddAnnouncementForm;

