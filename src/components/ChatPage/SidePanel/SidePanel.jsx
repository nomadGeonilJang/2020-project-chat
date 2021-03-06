import React from 'react';
import styled from 'styled-components';

import ChatRooms from './ChatRooms';
import DirectMessage from './DirectMessage';
import Favorited from './Favorited';
import UserPanel from './UserPanel';

function SidePanel() {
  return (
    <Wrapper>
      <UserPanel />
      <Favorited />
      <ChatRooms />
      <DirectMessage />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #7b83eb;
  padding: 2rem;
  height: 100%;
  min-height: 100vh;
  color: white;
  min-width: 275px;
`;

export default SidePanel;
