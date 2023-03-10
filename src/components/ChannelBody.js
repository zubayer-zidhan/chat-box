import { ChannelHeader, MessageInput, MessageList, Window } from "stream-chat-react";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    

    .str-chat-header-livestream {
        width: 100%;
        height: 70px;
    }

    .str-chat__list {
        height: calc(100vh - 70px);
    }

    .str-chat__input-flat-wrapper {
        
        position: relative;
        bottom: 20px;
        width: 100%;
    }
    
`

export default function ChannelBody() {
    return (
        <Container>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Container>
    );
}