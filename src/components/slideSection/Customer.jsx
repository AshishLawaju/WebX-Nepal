import React from "react";

const Customer = () => {
  return (
    <>
      <div className=" h-[100vh] w-full">
        <div className="text-left text-white mr-[18%]  mt-[12%]">
          <h3 className="text-xl">Customer service</h3>
          <h2 className="text-4xl mt-4">CUSTOMER</h2>
          <p className="mr-12 text-stone-300 mt-4">
            Feel free to reach out to us with any questions. <br/> We are very
            friendly and always open to <br/> discussing new projects, interesting
            ideas.
          </p>

          <div className="flex gap-40 mt-4 ">
            <div>
              <h2 className="text-bold text-2xl mb-4">Contact</h2>
              <p className="text-slate-300">Call: 9749761111</p>
            </div>
            <div>
              <h2 className="text-bold text-2xl mb-4">Address</h2>
              <p className="text-slate-300">
                <span></span>
                Samakhusi, Kathmandu
              </p>
            </div>
          </div>
          <p className="text-slate-300 mt-4">Email: logincorpnepal@gmail.com</p>

          <button className="border-2 mb-2  rounded-full p-1.5 pl-4 pr-4 mt-4">Send messages </button>
        </div>
      </div>
    </>
  );
};

export default Customer;
