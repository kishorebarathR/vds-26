import React from "react"
import Image from "next/image"

const MyConstituencyPage = () => {
  return (
    <div className="bg-[url('/home_images/about_satheesan_background.png')] w-full h-full">
      <div className="container mx-auto">
        <h1 className="text-[30px] lg:text-[34px] text-[#035C96] text-center font-semibold pt-10">
          My Constituency
        </h1>

        <div className="flex flex-col md:flex-row lg:px-10 md:pt-8 pb-10  justify-center items-center">
          {/* Left Content */}
          <div className="lg:w-[80%]">
            <p className="text-[16px] p-4 lg:p-0">
              North Paravur is an area with a rich and vibrant history. Paravur gets its name from the old word Parayur, which means “site of the ancient tribe of Paravar.” The Paravar were the predominant population of Kerala’s coastal districts, particularly around the Chera dynasty’s old capital, Mohodayapuram. North Paravur is also thought to be one of the 64 villages that Lord Parashurama built. Before their conversion to Syrian Christianity in the first century and their relocation to Israel following its formation, this town had a strong Jewish community. Notable landmarks include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:mt-5 px-4 lg:px-0 text-[16px]">
              {[
                "Paliam Palace",
                "Don Bosco Church",
                "Jewish Synagogue Museum",
                "Dakshina Mookambika Temple",
                "Kottakkavu Mar Thoma Syro-Malabar Church",
              ].map((item, index) => (
                <span key={index} className="flex items-start">
                  <span className="text-red-600 mr-2 text-3xl leading-[1] -mt-1">•</span>
                  {item}
                </span>
              ))}
            </div>

            <p className="text-[16px] pt-5 pb-5 px-4 lg:px-0 lg:mt-5">
              Paravur was historically known for traditional businesses like coir, handlooms, and agriculture. Located about 20 kilometers away from the Kochi city center, the town is now transforming into a significant residential suburb.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:p-4 p-4 ">
            <Image
              width={400}
              height={350}
              src="/my_constituency/About_paravur.png"
              className="h-[50vh] w-[90vh] object-cover "
              alt="About Paravur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyConstituencyPage
