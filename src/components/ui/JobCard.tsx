type Props = {
  text: string;
};

const JobCard = ({ text }: Props) => {
  const style = {
    backgroundColor: "gray",
  };
  return (
    <div>
      <p  style={style}>{text}</p>
    </div>
  );
};

export default JobCard;
