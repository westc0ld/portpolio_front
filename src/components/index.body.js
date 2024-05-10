import React, { useState } from 'react';
import axios from 'axios';

const InteractiveQueryApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/sendMessage', {
                user_input: inputValue // 사용자가 입력한 값을 전송합니다.
            });
            setResponseMessage(response.data.description);// API 응답에서 내용을 가져와 상태에 설정합니다.

            // 상태가 제대로 업데이트되었는지 콘솔에 출력
            console.log('Response message:', responseMessage);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md max-w-2xl">
            <label htmlFor="inputArea" className="block text-lg font-semibold mb-2">궁금한 내용을 적어주세요</label>
            <textarea
                id="inputArea"
                className="w-full p-3 border border-gray-300 rounded-md min-h-[100px]"
                placeholder="입력창"
                value={inputValue}
                onChange={handleInputChange}
            ></textarea>
            <div className="mt-4">
                <button onClick={sendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">Send Message</button>
            </div>
            <div className="output mt-4 bg-gray-200 border border-gray-300 rounded-md p-3 min-h-[100px]">
                {responseMessage}
            </div>
        </div>
    );
};

export default InteractiveQueryApp;
