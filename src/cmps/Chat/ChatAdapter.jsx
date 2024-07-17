import { AiChat, useAsStreamAdapter } from '@nlux/react';
import '@nlux/themes/nova.css';
import { useEffect } from 'react'; // Import useEffect

import { send } from './send';

export const ChatAdapter = () => {
    const adapter = useAsStreamAdapter(send, []);



    useEffect(() => {
        // Check if adapter.observer is ready before calling handleSendMessage
        if (adapter.observer) {
            console.log("observer is defined and ready");
            handleSendMessage("This is an initial message");
        } else {
            console.error("observer is not yet defined");
        }
      }, [adapter.observer]); // This will re-run the effect when adapter.observer change

    console.log("adapter", adapter.observer);
    const handleSendMessage = (message) => {
        console.log("message", message);
        // Send the "like" message (or any other prompt) to the API
        send(message, adapter.observer).catch((err) => {
          console.error('Failed to send message:', err);
        });
      };
    const ColourfulResponseRenderer = (props) => (
        <div className="colourful-response-renderer">
    
            {/* Option 1 — Use containerRef to render message using NLUX markdown parser: */}
            <div className="response-container" ref={ props.containerRef }/>
    
            {/* Or option 2 — Render the content array yourself:
               <div className="response-container">{props.content}</div> */}
    
            <div className="rating-container">
                What do you think of this response?
                &nbsp;
                <button onClick={() => handleSendMessage("Thanks")}>👍</button> 
                <button onClick={() => console.log('I love it!')}>❤️</button>
                <button onClick={() => console.log('I hate it!')}>😵</button>
            </div>
        </div>
    );

  return (
    <AiChat
      adapter={ adapter }
      personaOptions={{
        assistant: {
            name: 'AiMoto',
            avatar: 'mot.svg.png',
            tagline: 'Your Ai Assistant for Motorola',
          },
          user: {
            name: 'Asaf Erdman',
            avatar: 'linkedin_crop.jpg',
          }
      }}
      messageOptions={{
        responseRenderer: ColourfulResponseRenderer,
        }}
      conversationOptions={{ layout: 'bubbles' }}
      displayOptions={{ colorScheme: "dark" }}
      composerOptions={{ placeholder: "Type your query" }}/>
    // >
    //     <AiChatUI.Greeting>
    //         <span className="rounded">Hello! 👋</span>
    //     </AiChatUI.Greeting>
    // </AiChat>
  );
};
