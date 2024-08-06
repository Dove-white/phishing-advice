import { useNavigate } from "react-router-dom";
import BadNewsImage from "../../../assets/image/bad-news.png";
import PhishedCard from "../../ui/Card";

const BadNews = () => {
  const navigate = useNavigate()
  return (
    <>
      <PhishedCard
        showPrevuesArrow="opacity-0 cursor-default"
        showNextArrow={`opacity-0 cursor-default`}
        image={BadNewsImage}
        title={'first'}
        boldContent={
          "You just got phished but it's okay, this it was just an exercise"
        }
        simeContent={
          <div>
            The phishing risk cannot{" "}
            <span className="text-[1.15rem] font-[700]">be taken lightly</span>
            <br /><br />
            <button onClick={() => navigate(`/phishing-advice/first-advice`)} className="text-[1rem] font-[600] text-[#354BF0] underline">Follow these 6 tips to better prepare yourself</button>
          </div>
        }
        nextPage="/phishing-advice/first-advice"
      />
    </>
  );
};

export default BadNews;
