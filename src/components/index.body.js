import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false); // 초기에는 "입력하세요" 메시지를 표시하지 않습니다.

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/sendMessage', {
                user_input: inputValue // 사용자가 입력한 값을 전송합니다.
            });
            setResponseMessage(response.data.description);// API 응답에서 내용을 가져와 상태에 설정합니다.

            // 채팅 기록에 사용자가 입력한 메시지와 챗봇의 응답을 추가합니다.
            setChatHistory(prevChat => [...prevChat, { text: inputValue, sender: 'user' }]);
            setChatHistory(prevChat => [...prevChat, { text: response.data.description, sender: 'bot' }]);

            // 상태가 제대로 업데이트되었는지 콘솔에 출력
            console.log('Response message:', response.data.description);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        // 사용자가 입력한 메시지를 비웁니다.
        setInputValue('');
        // 사용자가 입력 중인 것으로 간주하여 "입력해주세요" 메시지를 숨깁니다.
        setIsTyping(false);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // 사용자가 입력을 시작하면 "입력해주세요" 메시지를 숨깁니다.
        setIsTyping(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
                {/* 입력 메시지가 없고 사용자가 입력 중이 아닌 경우에만 "입력하세요" 메시지를 표시합니다. */}
                {!isTyping && chatHistory.length === 0 && (
                    <div className="messagebot">서찬에 대해 궁금한 것을 입력하세요</div>
                )}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // 엔터 키 입력 감지
                    placeholder="메시지를 입력하세요..."
                />
                <button onClick={sendMessage}>전송</button>
            </div>
        </div>
    );
};

export default ChatGPT;
