import PhishedCard from "../../ui/Card";
import FourthAdviceImage from "../../../assets/image/fourth-advice.png";

const FourthAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/third-advice"
        image={FourthAdviceImage}
        title={4}
        boldContent={
          "Do not download suspicious files or files of unknown origin"
        }
        simeContent={
          <div>
            From time to time, our protection barriers{" "}
            <span className="text-[1.15rem] font-[700]">
              let through dangerous files
            </span>
            , especially when they are compressed and/or password protected. It
            is imperative that you ask yourself why are receiving such files
            before you make a mistake
          </div>
        }
        nextPage="/phishing-advice/fifth-advice"
      />
    </>
  );
};

export default FourthAdvice;
