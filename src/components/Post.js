import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({ data }) => (
  <li className="post">
    <PostHeader author={data.author} time={data.time} />
    <span className="post__content">{data.body}</span>
  </li>
);

Post.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.object.isRequired,
    time: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
