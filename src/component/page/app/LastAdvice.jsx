import PhishedCard from "../../ui/Card";
import LastAdviceImage from "../../../assets/image/last-advice.png";

const LastAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/sixth-advice"
        image={LastAdviceImage}
        title={"Last  Advice"}
        boldContent={"We’re here for you"}
        simeContent={
          <div>
            Dont hesitate to ask for advice and if you ever get caught by a
            (Real) phishing attack, please notify the cybersecurity team{" "}
            <span className="text-[black] font-medium">
              <a
                className="hover:underline"
                target="_blank"
                href="security@riskspot.io"
              >
                (security@riskspot.io)
              </a>
            </span>{" "}
            as soon as possible
          </div>
        }
        showNextArrow="opacity-0 cursor-default"
      />
    </>
  );
};

export default LastAdvice;
