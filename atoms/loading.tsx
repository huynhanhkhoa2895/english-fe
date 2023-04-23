type Props = {
  className?: string;
};

const Loading = ({ className = '' }: Props) => {
  return (
    <div
      className={`h-[20px] w-[20px] animate-spin-circle rounded-[50%] border-[4px] border-[#d9d9d9] border-t-primary ${className}`}
    ></div>
  );
};

export default Loading;
