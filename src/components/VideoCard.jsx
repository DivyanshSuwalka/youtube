const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  // if (!snippet || !snippet.thumbnails) return null;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="my-2 flex flex-col rounded-lg shadow-lg hover:shadow-xl transition duration-200 cursor-pointer w-full sm:w-[300px] md:w-[340px] lg:w-[360px]">
      <div className="relative w-full aspect-video">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <ul className="p-2 ">
        <li className="text-sm font-medium line-clamp-2">{title}</li>
        <div className="flex justify-between p-1 text-sm mt-1">
          <li>{channelTitle}</li>
          <li>{Math.floor(statistics?.viewCount / 1000)}k views</li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
