import PhishedCard from "../../ui/Card";
import SixthAdviceImage from "../../../assets/image/sixth-advice.png";

const SixthAdvice = () => {
  return (
    <>
      <PhishedCard
        prevuesPage="/fifth-advice"
        image={SixthAdviceImage}
        title={"Sixth  Advice"}
        boldContent={"Always use a side channel"}
        simeContent={
          <div>
            If you are unsure the email is legitimate, you should avoid clicking
            links and{" "}
            <span className="text-[black] font-medium">
              go directly to the official website
            </span>{" "}
            or call the sender
          </div>
        }
        nextPage="/last-advice"
      />
    </>
  );
};

export default SixthAdvice;
