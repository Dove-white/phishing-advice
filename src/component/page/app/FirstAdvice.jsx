import FirstAdviceImage from "../../../assets/image/first-advice.png";
import PhishedCard from "../../ui/Card";

const FirstAdvice = () => {
  return (
    <>
      <PhishedCard
              showPrevuesArrow="opacity-0 cursor-default"

        prevuesPage="/phishing-advice/"
        image={FirstAdviceImage}
        title={1}
        boldContent={"Take your time, don't rush things out, ask for advice"}
        simeContent={
          <div>
            Hackers will{" "}
            <span className="text-[1.15rem] font-[700]">
              push you into compromising your credentials
            </span>
            . They will create a situation where you have to act as soon as
            possible
          </div>
        }
        nextPage="/phishing-advice/second-advice"
      />
    </>
  );
};

export default FirstAdvice;
