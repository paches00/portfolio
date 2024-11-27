import React from 'react';

const Tags = ({ tags, selectedTags, onTagClick }) => {
  return (
    <div className="tags-container">
      <div className="tags-grid">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => onTagClick(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
