'use client'
import { useState, useEffect } from 'react';
// import type { User, Channel as StreamChannel } from 'stream-chat';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import React from 'react'
import 'stream-chat-react/dist/css/v2/index.css';

const Chatforum = ({clerkUser,slug}) => {

    const apiKey = 'r39guf4ha3x2';
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;
    console.log(clerkUser.token);
    function capitalize(str) {
        if (typeof str !== 'string' || !str) {
          return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }

const user= {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(slug) + 'Discussion',
      
    });

    setChannel(channel);
    
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <div >
          <ChannelHeader />
          <MessageList />
          <MessageInput />
          </div>
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default Chatforum
