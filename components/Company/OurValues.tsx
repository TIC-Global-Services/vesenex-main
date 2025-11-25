import Image from "next/image";
import Link from "next/link";

export default function OurValuesSection() {
  const values = [
    {
      title: "Trust Through Integrity",
      desc: "We act as your independent security partner, committed to transparency and unbiased advice.",
    },
    {
      title: "Respect & Accountability",
      desc: "We uphold professional ethics and respect privacy.",
    },
    {
      title: "Practical Resilience",
      desc: "Our focus is on making your security posture stronger every day, balancing compliance, cost, and business priorities.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* LEFT — IMAGE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2">
          <h3 className="text-3xl  text-gray-300">Our Values</h3>
          <Image
            src="/images/company/our-values.png"
            alt="values illustration"
            width={600}
            height={600}
            className="rounded-lg object-contain w-full max-w-md"
          />
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-10">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-start gap-4">
                {/* Dot */}
                <div className=" mt-3 w-4 h-4 bg-[#4D8BF280] rounded-full flex items-center justify-center ">

                <div className=" w-2 h-2 rounded-full bg-[#4D8BF2]"></div>
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-5xl font-medium mb-2">{v.title}</h2>
                  <p className="text-gray-400 max-w-md">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-lg pl-10 py-10 flex flex-col lg:flex-row items-center justify-between mt-20 gap-10">
        <div className=" space-y-4 max-w-2xl">
            <h1 className=" font-bold text-black text-5xl ">Cybersecurity That Grows With Your Business</h1>
            <p className=" text-[#ACABB2]">Cybersecurity isn’t a one-time project — it’s an ongoing partnership. If you’re ready to protect your business without slowing it down, Vesenex is here to help you make that happen.</p>
            <Link href="/contact" className=" mt-4 inline-block bg-[#0D4BB2] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition ">
            Connect for More
            </Link>
        </div>
        <div>
          <Image src={"/images/company/connect-cta.png"} alt="Arrow pattern" width={500} height={500} className=" w-full h-full" />
        </div>
      </div>
    </section>
  );
}
