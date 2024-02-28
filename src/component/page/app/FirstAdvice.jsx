import FirstAdviceImage from "../../../assets/image/first-advice.png";
import PhishedCard from "../../ui/Card";

const FirstAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/"
        image={FirstAdviceImage}
        title={"First  Advice"}
        boldContent={"Take your time, don’t rush things out,ask for advice"}
        simeContent={
          <div>
            Hackers will{" "}
            <span className="text-[black] font-medium">
              push you into compromising your credentials
            </span>
            . they will create a situation where you have to act as soon as
            possible.
          </div>
        }
        nextPage="/phishing-advice/second-advice"
      />
    </>
  );
};

export default FirstAdvice;
