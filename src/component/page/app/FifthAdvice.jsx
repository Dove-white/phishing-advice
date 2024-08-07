import PhishedCard from "../../ui/Card";
import FifthAdviceImage from "../../../assets/image/fifth-advice.png";

const FifthAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/fourth-advice"
        image={FifthAdviceImage}
        title={5}
        boldContent={"Help us help you"}
        simeContent={
          <div>
            warning us when{" "}
            <span className="text-[1.15rem] font-[700]">
              receive a suspicious email{" "}
            </span>
            will help us contain the attack. There’s a safe way to do that. use
            the red outlook button on the right side of the screen or forward
            the email to{" "}
            <span className="text-[1.15rem] font-[700]">
              <a
                className="hover:underline"
                target="_blank"
                href="security@riskspot.io"
              >
                security@riskspot.io
              </a>
            </span>
          </div>
        }
        nextPage="/phishing-advice/sixth-advice"
      />
    </>
  );
};

export default FifthAdvice;
