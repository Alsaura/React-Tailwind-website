import images from "../assets/Image.png";

export const Statistic = () => {
  return (
    <section className="container mx-auto py-32 font-plusJak">
      <div className="grid grid-cols-12 items-start lg:items-center">
        <div className="flex flex-col col-span-6 gap-y-4 w-full">
          <div className="flex flex-col gap-y-2 pb-9">
            <h1 className=" text-3xl font-extrabold text-blue-900">
              Boost your workflow with Horizon
            </h1>
            <span className="text-base text-blue-600 w-3/4">
              Urna duis convallis convallis tellus interdum velit laoreet
              pentesque aliquam tortor consequat porta.
            </span>
          </div>
          <div className="flex flex-row pt-4 gap-4 text-blue-900 pb-9">
            <div className="flex flex-col  gap-y-1">
              <h1 className="text-5xl font-extrabold">340+</h1>
              <h2 className="text-base font-bold">Successful Projects</h2>
              <span className="text-blue-600 w-3/4">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </span>
            </div>
            <div className="flex flex-col  gap-y-1">
              <h1 className="text-5xl font-extrabold">$10m</h1>
              <h2 className="text-base font-bold">Annual Percentage Rate</h2>
              <span className="text-blue-600 w-3/4">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </span>
            </div>
          </div>
          <div className="flex flex-row pt-4 gap-4 text-blue-900">
            <div className="flex flex-col  gap-y-1 ">
              <h1 className="text-5xl font-extrabold">2.8k+</h1>
              <h2 className="text-base font-bold">Clients Worldwide</h2>
              <span className="text-blue-600w-3/4">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </span>
            </div>
            <div className="flex flex-col  gap-y-1">
              <h1 className="text-5xl font-extrabold">7000+</h1>
              <h2 className="text-base font-bold">Daily Visits</h2>
              <span className="text-blue-600 w-3/4">
                Urna duis convallis convallis tellus interdum velit laoreet.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex justify-end">
          <img className="w-3/4 md:w-5/6" src={images} alt="" />
        </div>
      </div>
    </section>
  );
};
