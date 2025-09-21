const commentsData = [
  {
    name: "Divyansh",
    msg: "lorem ipsumjkcbvrsjbero",
    reply: [],
  },
  {
    name: "Divyansh",
    msg: "lorem ipsumjkcbvrsjbero",
    reply: [],
  },
  {
    name: "Divyansh",
    msg: "lorem ipsumjkcbvrsjbero",
    reply: [
      {
        name: "Divyansh",
        msg: "lorem ipsumjkcbvrsjbero",
        reply: [
          {
            name: "Divyansh",
            msg: "lorem ipsumjkcbvrsjbero",
            reply: [
              {
                name: "Divyansh",
                msg: "lorem ipsumjkcbvrsjbero",
                reply: [],
              },
            ],
          },
          {
            name: "Divyansh",
            msg: "lorem ipsumjkcbvrsjbero",
            reply: [],
          },
        ],
      },
      {
        name: "Divyansh",
        msg: "lorem ipsumjkcbvrsjbero",
        reply: [],
      },
      {
        name: "Divyansh",
        msg: "lorem ipsumjkcbvrsjbero",
        reply: [],
      },
    ],
  },
  {
    name: "Divyansh",
    msg: "lorem ipsumjkcbvrsjbero",
    reply: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-6 border border-l-black">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, msg, reply } = data;
  return (
    <div className="flex my-1 bg-gray-100">
      <img
        className="h-8 w-8 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      />
      <div className="px-3">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm">{msg}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2 text-left">
      <h1 className="font-bold text-xl m-2 ">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
