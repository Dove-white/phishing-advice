import PhishedCard from "../../ui/Card";
import SecondAdviceImage from "../../../assets/image/second-advice.png";

const SecondAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/first-advice"
        image={SecondAdviceImage}
        title={"Second  Advice"}
        boldContent={
          "Take a close look at the sender, at the spelling and at the links"
        }
        simeContent={
          <div>
            Most of the time,{" "}
            <span className="text-[black] font-medium">
              the sender’s email address
            </span>{" "}
            is not the one you know or is misspelled, as can also be the text of
            the message. similarly, links pointing to the wrong website should
            be a{" "}
            <span className="text-[black] font-medium">strong red flag</span>
          </div>
        }
        nextPage="/phishing-advice/third-advice"
      />
    </>
  );
};

export default SecondAdvice;
