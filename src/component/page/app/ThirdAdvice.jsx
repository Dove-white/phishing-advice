import ThirdAdviceImage from "../../../assets/image/third-advice.png";
import PhishedCard from "../../ui/Card";

const ThirdAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/phishing-advice/second-advice"
        image={ThirdAdviceImage}
        title={3}
        boldContent={
          "Stay alert, especially on weekends or during the pre-holiday period"
        }
        simeContent={
          <div>
            Hackers{" "}
            <span className="text-[1.15rem] font-[700]">
              take advantage of moments of reduced vigilance or staffing levels
            </span>{" "}
            to attack. As a prelimenary work,they research the companies they
            are trying to penetrate
          </div>
        }
        nextPage="/phishing-advice/fourth-advice"
      />
    </>
  );
};

export default ThirdAdvice;
