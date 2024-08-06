import PhishedCard from "../../ui/Card";
import SecondAdviceImage from "../../../assets/image/second-advice.png";

const SecondAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/first-advice"
        image={SecondAdviceImage}
        title={2}
        boldContent={
          "Take a close look at the sender, at the spelling and at the links"
        }
        simeContent={
          <div>
            Most of the time,{" "}
            <span className="text-[1.15rem] font-[700]">
              the sender’s email address
            </span>{" "}
            is not the one you know or is misspelled, as can also be the text of
            the message. similarly, links pointing to the wrong website should
            be a{" "}
            <span className="text-[1.15rem] font-[700]">strong red flag</span>
          </div>
        }
        nextPage="/phishing-advice/third-advice"
      />
    </>
  );
};

export default SecondAdvice;
