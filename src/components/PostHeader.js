import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ author, time }) => (
  <div className="post__header">
    <img className="post__avatar" src={author.avatar} alt={author.name} />
    <div className="post__detail">
      <span className="post__author">{author.name}</span>
      <span className="post__time">{`há ${time} min`}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  time: PropTypes.number.isRequired,
};

export default PostHeader;
