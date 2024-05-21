const Description = ({ snippet }) => {
  const { channelTitle, description, title } = snippet;
  return (
    <div className="max-w-[950px]">
      <div>
        <p className="font-bold text-xl mb-1">{title}</p>
        <p className="font-medium mb-2">{channelTitle}</p>
        <p className="mb-2 border border-slate-200 rounded-lg bg-slate-100 text-sm p-2 max-w-[950px] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Description;
