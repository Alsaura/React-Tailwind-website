import massage from "../assets/massage.svg";
import person from "../assets/person.svg";
import analyst from "../assets/analyst.svg";

export const Service = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col text-center font-plusJak font-extrabold text-2xl text-blue-800 items-center bg-white ">
          <img className="w-16  pb-5" src={massage} alt="" />
          Share team inboxes
          <span className="pt-2 text-blue-500 text-base w-2/4 font-medium pb-8 leading-1">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </span>
        </div>
        <div className="flex flex-col text-center font-plusJak font-extrabold text-2xl text-blue-800 items-center bg-white ">
          <img className="w-16 pb-5" src={person} alt="" />
          Analytics dashboard
          <span className="pt-2 text-blue-500 text-base w-2/4 font-medium pb-8 leading-16">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </span>
        </div>
        <div className="flex flex-col text-center font-plusJak font-extrabold text-2xl text-blue-800 items-center bg-white ">
          <img className="w-16 pb-5" src={analyst} alt="" />
          Deliver instant answer
          <span className="pt-2 text-blue-500 text-base w-2/4 font-medium pb-8 leading-16">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone
          </span>
        </div>
      </div>
    </section>
  );
};
