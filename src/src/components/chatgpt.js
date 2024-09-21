import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Loading from './loading'; // 파일 경로 및 대소문자 확인

const ChatGPT = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // isLoading 상태를 정의합니다.
    const chatHistoryRef = useRef(null); // 채팅 히스토리 엘리먼트에 대한 참조를 생성합니다.

    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom(); // 컴포넌트가 마운트될 때마다 스크롤을 가장 아래로 이동합니다.
    }, [chatHistory]);

    const sendMessage = async () => {
        setIsLoading(true); // 메시지 전송 시작 시 로딩 상태를 true로 설정합니다.
        try {
            const response = await axios.post('https://api.westcold0035.com/sendMessage', {
                user_input: inputValue
            });
            setResponseMessage(response.data.description);

            setChatHistory(prevChat => [...prevChat, { text: inputValue, sender: 'user' }]);
            setChatHistory(prevChat => [...prevChat, { text: response.data.description, sender: 'bot' }]);
            console.log('Responsemessage:', response.data.description);
        } catch (error) {
            console.error('Error sending message:', error);
        }
        setInputValue('');
        setIsTyping(false);
        setIsLoading(false); // 메시지 전송 완료 시 로딩 상태를 false로 설정합니다.
        scrollToBottom(); // 새로운 메시지가 추가될 때마다 스크롤을 가장 아래로 이동합니다.
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setIsTyping(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <>
            <div className="chat">
                <div className="chat-container">
                    {isLoading && (
                        <div className="loading-overlay">
                            <Loading />
                            <div className='ment'>AI에게 물어보는 중이랑께~</div>
                        </div>
                    )}
                    <div className="chat-history" ref={chatHistoryRef}>
                        {chatHistory.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                        {(chatHistory.length === 0) && (
                            <div className="messagebot">서찬에 대해 궁금한 것을 입력하세요</div>
                        )}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="메시지를 입력하세요..."
                        />
                        <button onClick={sendMessage}>전송</button>
                    </div>
                </div>
                <div className="warning">
                    *질문은 최대 10개까지 가능합니다<br />*저와 관련없는 질문의 답으로 false가 3번 나오면 채팅이 종료됩니다
                </div>
            </div>
        </>
    );
};

export default ChatGPT;
