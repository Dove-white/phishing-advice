import ThirdAdviceImage from "../../../assets/image/third-advice.png";
import PhishedCard from "../../ui/Card";

const ThirdAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/second-advice"
        image={ThirdAdviceImage}
        title={"Third Advice"}
        boldContent={
          "Stay alert,especially on weekends or during the pre-holiday period"
        }
        simeContent={
          <div>
            Hackers{" "}
            <span className="text-[black] font-medium">
              take advantage of moments of reduced vigilance or staffing levels
            </span>{" "}
            to attack. As a prelimenary work,they research the companies they
            are trying to penetrate
          </div>
        }
        nextPage="/fourth-advice"
      />
    </>
  );
};

export default ThirdAdvice;
