import { useEffect, useState } from "react";
import { ChannelList, useChatContext, Window } from "stream-chat-react";
import styled from "styled-components";
import ChannelListContainer from "./ChannelListContainer";

const Container = styled.div`
    height : 100vh;
    background-color: #333;
    padding: 20px 10px;
    
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            color: white;
            margin: 0 0 10px;
            font-size: 16px;
        }

        button {
            color: white;
            font-size: 20px;
            background: none;
            border: none;
            cursor: pointer;
            margin-left: 160px;
        }
    }

    .str-chat{
        height : max-content;
        &.str-chat-channel-list{
            float: none;
            
        }
    }
    .channel-list{
        width: 100%;
        &__message{
            color: white;
        }
    }

    button{
        width: 90%;
    }
`;

const randomStr = () => Math.random().toString(36).substring(7);

export default function CustomChannelList({onClickAdd}){
    const {client} = useChatContext();
    const [channelListKey, setChannelListKey] = useState(randomStr());


    const filters = {
        members: {
            $in: [client.user.id]
        },
    }

    useEffect(() => {
        client.on("member.added", () => {
            setChannelListKey(randomStr());
        })
    })
    return (
    <Container>
        <div className="header">
            <h2>Channels</h2>
            <button onClick={onClickAdd}>+</button>
        </div>
        <ChannelList 
            key={channelListKey}
            list={listProps => <ChannelListContainer {...listProps} />}
            filters={filters}
        />
    </Container>
    );

}