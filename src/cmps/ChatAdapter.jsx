import {AiChat} from '@nlux/react';
import {useChatAdapter} from '@nlux/langchain-react';
import '@nlux/themes/nova.css';

const adapterOptions = {
    url:'http://localhost:8080/chat-api',

};

export const ChatAdapter = () => {
    const langServeAdapter = useChatAdapter(adapterOptions);

    return (
        <AiChat
            adapter={langServeAdapter}
            composerOptions={{
                placeholder: 'How can I help you today?'
            }}
        />
    );
};