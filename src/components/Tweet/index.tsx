import React from 'react';

import { 
  Container, 
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        You Retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Marcos Paulo</strong>
            <span>@marcos_paulo</span>
            <Dot />
            <time>Apr 15</time>
          </Header>

          <Description>Em busca do objetivo...</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              243
            </Status>

            <Status>
              <RetweetIcon />
              674
            </Status>

            <Status>
              <LikeIcon />
              1,899
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;