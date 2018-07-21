import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './styles/style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          avatar:
            'https://secure.gravatar.com/avatar/65db247b290c7fa9d445455f99b401cc?s=500&d=mm&r=g',
          name: 'Diego Schell Fernandes',
        },
        time: 3,
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.',
      },
      {
        id: 2,
        author: {
          avatar:
            'https://hips.hearstapps.com/cosmouk.cdnds.net/16/37/640x740/gallery-1473956347-screen-shot-2016-09-15-at-171758.jpg?resize=60:60',
          name: 'Rubia Savolksi',
        },
        time: 10,
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
      {
        id: 3,
        author: {
          avatar:
            'https://pbs.twimg.com/profile_images/3633378721/dd6821fade3d86b90bc411b4d9a8c144_400x400.jpeg',
          name: 'Mr. Mustache',
        },
        time: 20,
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header />
        <ul className="posts">{posts.map(post => <Post key={post.id} data={post} />)}</ul>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
