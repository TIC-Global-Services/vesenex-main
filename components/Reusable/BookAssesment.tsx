import React from "react";
import BookImage from "../../assets/Home/BookAssesment.png";
import Layout from "@/layout/Layout";

const BookAssessment = () => {
  return (
    <Layout>
      <div
        className="flex items-center justify-start bg-cover w-full rounded-[21px] "
        style={{
          width: "100%",
          height: "511px",
          backgroundImage: `url("/images/home/BookCTA.jpg")`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-5 max-w-3xl md:pt-10 px-6 md:px-14">
          <h1 className=" text-[30px] md:text-[36px] font-medium leading-[100%] bg-gradient-to-r from-[#F1F2F3] to-[#B8AAF4] bg-clip-text text-transparent">
            Get a free cybersecurity assessment and see how we can protect you
            better
          </h1>

          <p className="text-[#D6D9DC] leading-[22px] font-light md:text-[20px]">
            With Australian businesses losing millions each year to cybercrimes,
            your business can’t afford security gaps.
          </p>
          <button className="text-[#0C0D0E] w-50 rounded-full bg-white px-2 py-2">
            Book Free Assessment
          </button>
        </div>

        
        
      </div>
    </Layout>
  );
};

export default BookAssessment;
