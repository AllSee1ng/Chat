import React, { useEffect, useState } from "react";

export default function MessageForm({ setMessageList, messageList }) {
  const [value, setValue] = useState("");

  // Рендер сообщения от бота
  useEffect(() => {
    if (
      messageList[messageList.length - 1] &&
      messageList[messageList.length - 1].author !== "Mr.Robot"
    ) {
      const robotMessage = setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            text: "Hello Friend",
            author: "Mr.Robot",
          },
        ]);
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
    setMessageList([
      ...messageList,
      {
        text: value,
        author: "User",
      },
    ]);
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
      />
      <input type="submit" className="messageSubmit" />
    </form>
  );
}
