import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <div>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </div>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;