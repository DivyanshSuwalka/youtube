import React from "react";

const ChatMessage = ({name, msg}) => {
  return (
    <div className="flex items-center px-4 py-2 shadow-sm">
      <img
        className="h-8 w-8 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <span className="px-4 font-bold">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessage;
