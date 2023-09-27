import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function MessageForm({ setMessageList, messageList }) {
  const { chatId } = useParams();
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleSetMessageList = useCallback(() => {
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], { text: value, author: "User" }],
    }));
  }, [setMessageList, value]);
  // Рендер сообщения от бота
  useEffect(() => {
    inputRef.current.focus();
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "Mr.Robot"
    ) {
      const robotMessage = setTimeout(() => {
        setMessageList((prevMessageList) => ({
          ...prevMessageList,
          [chatId]: [
            ...prevMessageList[chatId],
            { text: "hello friend", author: "Mr.Robot" },
          ],
        }));
      }, 1500);
      return () => {
        clearInterval(robotMessage);
      };
    }
  });

  // Отслеживание изменения в инпуте
  const handleMessageChange = (e) => {
    setValue(e.target.value);
  };

  // Обновление списка сообщений
  const updateMessageList = (e) => {
    e.preventDefault();
    handleSetMessageList();
    setValue("");
  };

  return (
    <form className="messageForm" onSubmit={updateMessageList}>
      <input
        type="text"
        className="messageInput"
        placeholder="Начните писать..."
        value={value}
        onChange={handleMessageChange}
        ref={inputRef}
      />
      <input type="submit" className="messageSubmit" />
    </form>
  );
}
