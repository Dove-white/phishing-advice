import PhishedCard from "../../ui/Card";
import LastAdviceImage from "../../../assets/image/last-advice.png";

const LastAdvice = () => {
  return (
    <>
      <PhishedCard
        showPrevuesArrow="opacity-0 cursor-default"
        prevuesPage="/phishing-advice/sixth-advice"
        image={LastAdviceImage}
        title={"last"}
        boldContent={"We're here for you"}
        simeContent={
          <div>
            Dont hesitate to ask for advice and if you ever get caught by a
            (Real) phishing attack, please notify the cybersecurity team{" "}
            <a
              className="hover:underline"
              target="_blank"
              href="security@riskspot.io"
            >
              (security@riskspot.io)
            </a>{" "}
            as soon as possible
          </div>
        }
        showNextArrow="opacity-0 cursor-default"
      />
    </>
  );
};

export default LastAdvice;
