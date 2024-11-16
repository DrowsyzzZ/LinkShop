interface LikesCountProps {
  likes: number;
}

const LikesCount = ({ likes }: LikesCountProps) => {
  return (
    <div className="absolute right-[24px] top-[24px] flex items-center gap-[5px]">
      <img
        src="/icons/filledHeart.svg"
        alt="좋아요 아이콘"
        width={23}
        height={23}
      />
      <span className="text-16pt font-medium">{likes}</span>
    </div>
  );
};

export default LikesCount;
