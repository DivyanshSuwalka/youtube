import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // api call
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          msg: generateRandomMsg(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleLiveMessage() {
    dispatch(
      addMessage({
        name: "Divyansh",
        msg: liveMessage,
      })
    );
  }

  return (
    <>
      <div className="px-2 mx-2 border border-solid w-full h-[400px] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* {Array(1)
        .fill(null)
        .map((x, i) => (
          <ChatMessage key={i} name="Suwalka" msg="msg map" />
        ))} */}
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} msg={c.msg} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          handleLiveMessage();
          setLiveMessage("");
        }}
        className="p-2 mx-2 border border-solid flex justify-center rounded-lg"
      >
        <input
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
          type="text"
          className="shadow-xl w-full rounded-3xl p-2"
        />
        <button className="py-2 rounded-3xl border ml-2 border-gray-300 bg-gray-100 px-4">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
