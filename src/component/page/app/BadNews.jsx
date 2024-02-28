import BadNewsImage from "../../../assets/image/bad-news.png";
import PhishedCard from "../../ui/Card";

const BadNews = () => {
  return (
    <>
      <PhishedCard
        showPrevuesArrow="opacity-0 cursor-default"
        image={BadNewsImage}
        title={"BAD NEWS"}
        boldContent={
          "You just got phised but its okay, this time it was just a exercise"
        }
        simeContent={
          <div>
            The phishing risk cannot{" "}
            <span className="text-[black] font-medium">be taken lightly</span>.
            Follow these 6 tips to prepare yourself
          </div>
        }
        nextPage="/phishing-advice/first-advice"
      />
    </>
  );
};

export default BadNews;
