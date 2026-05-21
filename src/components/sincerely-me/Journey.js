import React from "react"
import Image from "next/image"

const Journey = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] lg:p-5 lg:flex merriweather-regular">
        {/* Left Side Content Start */}
        <div className="border-r-2 border-slate-500 text-xl">
          <Image
            width={80}
            height={50}
            className=" flex justify-center"
            src="/sincere_images/quote_up.svg"
            alt="sincere_images"
          />
          <h6 className=" lg:w-32 mt-4 lg:p-0 p-3 text-[16px]">
            “As a Leader of Opposition, the diligent research and homework that
            he puts into all of the topics that he talks about is commendable”
          </h6>
          <h6 className="  lg:w-32 mt-4 lg:p-0 p-3 text-[16px]">
            – M.B. Rajesh, Speaker of Kerala
          </h6>
          <div className="flex-col">
            <div className="flex justify-end ">
              <Image
                width={100}
                height={50}
                className="p-3"
                src="/sincere_images/quote_down.svg"
                alt="sincere_images"
                loading="lazy"
              />
            </div>
            <div className="justify-center flex">
              <Image
                className="w-32 md:w-16 lg:w-24" // Larger on mobile
                src="/sincere_images/si_3.png"
                width={100}
                height={50}
                alt="sincere_images"
                loading="lazy"
              />
            </div>
            <Image
              width={80}
              height={50}
              className="mt-4 mb-4"
              src="/sincere_images/quote_up.svg"
              alt="sincere_images"
              loading="lazy"
            />
          </div>

          <h6 className="  lg:w-32 lg:p-0 p-3 text-[16px]">
            Currently, I am honoured to hold important positions such as the
            Leader of Opposition, Kerala Legislative Assembly, and the UDF
            Chairman, Kerala. I am also a member of the Political Affairs
            Committee, Congress, Kerala.
          </h6>
          <div className="flex-col">
            <div className="flex justify-end ">
              <Image
                width={100}
                height={50}
                className="p-3"
                src="/sincere_images/quote_down.svg"
                alt="sincere_images"
                loading="lazy"
              />
            </div>
            <div className="justify-center flex ">
              <Image
                width={100}
                height={50}
                className="w-32 md:w-24 lg:w-32" // Tailwind classes to adjust size
                src="/sincere_images/si_4.png"
                alt="sincere_images"
                loading="lazy"
              />
            </div>

            <div className="lg:bg-[url('/sincere_images/left_side_img.svg')] w-full lg:h-[100vh] bg-cover mt-5 me-2 -mx-2">
              <div className="text-left  lg:pt-24 ms-5 flex justify-center items-center flex-col">
                <Image
                  width={80}
                  height={50}
                  className="mt-10 "
                  src="/sincere_images/quote_up.svg"
                  alt="sincere_images"
                  loading="lazy"
                />
                {/* <!--  Desktop view --> */}
                <p className=" text-white lg:w-32 hidden lg:block mt-10 text-[16px]">
                  “I believe that serving the people is not just a
                  responsibility, but a privilege, and I will continue to work
                  hard to fulfill this purpose.”
                </p>

                {/* <!-- Mobile view --> */}
                <p className="block lg:hidden bg-red-800  p-3 mt-4 text-[16px] w-full text-white">
                  “I believe that serving the people is not just a
                  responsibility, but a privilege, and I will continue to work
                  hard to fulfill this purpose.”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Content End */}

        <div className="lg:flex-1  ">
          <h3 className="text-3xl lg:text-[50px] text-[28px] p-4  font-semibold">
            The journey that made me who I am today
          </h3>
          <h6 className="text-2xl lg:text-[25px] p-4 font-normal">
            A brief history of my life
          </h6>

          <div className="lg:flex w-full text-[16px]">
            <p className="p-4 lg:w-4/6">
              <span className="font-bold">Nettoor:</span> I was born on May 31,
              1964 to my parents, K Damodara Menon and Smt. V Vilasini Amma in
              Nettoor, Eranakulam. Growing up in a middle-class household as one
              of six siblings, we had a humble upbringing. As a student, I was
              an avid reader and I enjoyed participating in many debate and
              speech competitions. During my days at Panangad High School, I
              also served as the school leader. After receiving my Bachelor’s
              degree from Sacred Hearts College in Thevara, I went on to do my
              Master’s in Social Work (MSW) from Rajagiri College of Social
              Sciences.
            </p>
            <div className="border-b-8 border-[#525252] lg:flex ">
              <div className="bg-[#818181] text-white p-5 W-11 flex justify-center items-center">
                <p className="lg:w-52">
                  With my wife, Lakshmipriya and my daughter, Unnimaya, my
                  biggest supporters and honest critics.
                </p>
              </div>
              <div className="lg:flex lg:w-96">
                <Image
                  width={600}
                  height={300}
                  src="/sincere_images/family.png"
                  alt="sincere_images"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:flex p-3 border-4 mt-5 border-gray-500 lg:ms-4 text-xl">
            <div className="lg:w-1/2 w-full">
              <Image
                width={600}
                height={300}
                src="/sincere_images/thiruvanadhapuram-vds-speech.png"
                alt="sincere_images"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:p-5 p-2 text-[16px] flex justify-center items-center">
              <p>
                <b>Thiruvananthapuram:</b> I stepped into students’ politics
                during my undergraduate days, and my aspiration to keep serving
                the people led me to take up law for my higher education. I did
                my LLB degree from Kerala Law Academy Law College and my LLM
                from the Government Law College in Thiruvananthapuram. After my
                post-graduation, I briefly practised law in the Kerala High
                Court before beginning my political career.
              </p>
            </div>
          </div>

          {/* Work So Far Start */}
          <h2 className="text-3xl lg:text-[42px] text-[28px] p-4 font-semibold">
            My Work So Far
          </h2>

          <div className="lg:flex p-4 gap-2 text-[16px]">
            <p className=" lg:border-r-2 border-black mb-9 lg:w-6/12 px-1">
              As a politician, I have always been passionate about serving the
              people, and I have been fortunate to hold various positions that
              have allowed me to do so. In my previous organisational positions,
              I served as an AICC Secretary and a member of the Committee on
              Economic Resolution at the 84th Plenary Session. I also had the
              privilege of serving as the Chairman of the Screening Committee
              for the Orissa Assembly Election and as the Whip for the Congress
              Legislative Party in Kerala. Furthermore, I served as the Vice
              President of the Kerala Pradesh Congress Committee.
            </p>
            <p className="px-1 lg:w-6/12">
              As a five-time Member of the Kerala Legislative Assembly, my
              unwavering commitment has always been to represent the people.
              During my tenure, I have served as a valuable member of the UDF
              Higher Affairs Committee in Kerala, as well as the esteemed
              Chairman of both the Public Accounts Committee and the Assembly
              Estimates Committee. Through these roles, I have consistently
              worked towards the betterment of my community, advocating for the
              needs and concerns of my constituents.
            </p>
          </div>
          {/* Work So Far End */}

          {/* My Interests Start */}
          <div className="text-3xl lg:text-[42px] text-[28px] font-semibold ms-4 ">
            My Interests
          </div>
          <h3 className="p-4 lg:w-9/12 text-[16px]">
            Ever since I was a child, I have been captivated by a wide range of
            interests that have shaped my life. My love for reading was the
            first to blossom, and as I grew older, my curiosity was piqued by
            history, which became a cherished pursuit during my college days.
            Being a nature lover, I have always been drawn to the wilderness,
            and whenever I get the chance, I go on treks through the woods. The
            serenity of nature has a profound effect on me, and I am constantly
            fascinated by the different aspects of nature. This appreciation for
            nature has also ignited a deep passion for environmental
            conservation, driving me to actively contribute towards protecting
            our natural world through my services.
          </h3>
          <div>
            <Image
              width={700}
              height={400}
              className="w-full"
              alt="sincere_images"
              src="/sincere_images/bg_gray.svg"
              loading="lazy"
            />
            <div className="relative">
              <p className="bg-[#173A5B] lg:ms-4 text-white p-9 text-[16px]">
                In addition to my work in politics, I have also served as
                president of various trade unions, including:
              </p>
              <Image
                width={300}
                height={300}
                className="lg:absolute right-0 bottom-0  w-96 h-[450px]  hidden sm:block"
                src="/sincere_images/vds-speech-img1-1.png"
                alt="VDS Casual"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:flex p-3 border-b-2 ms-4 border-black text-[16px]">
            <div className="flex flex-col lg:w-1/2">
              <ul className="list-disc p-4 ">
                <li>Cochin Refineries Employees Association</li>
                <li>Premier Tyres Workers Union</li>
                <li>TCC Employees Union</li>
                <li>IRE Workers Union</li>
                <li>Hindalco Workers Union</li>
                <li>Carborandom Universal Employees Union Koratty</li>
                <li>Ernakulam Dist. Co-Op Bank Employees Union</li>
                <li>
                  Kerala State Co-Operative Rubber Marketing Federation
                  Employees Congress
                </li>
                <li>Masoneilan Employees Union, INTUC</li>
                <li>TELK Employees Union</li>
              </ul>
            </div>
            <div className="flex flex-col lg:w-1/2 lg:ms-20 p-4">
              <ul className="list-disc ">
                <li>HMT Employees Union, Kalamassery</li>
                <li>KMML Employees Union, Kollam</li>
                <li>CIAL Officers Association, Nedumbassery</li>
                <li>Employees Union Binani Zinc Limited</li>
                <li>Hindustan Latex, Employees Union, Trivandrum</li>
                <li>Backward Development Corporation Employees Union</li>
                <li>CWRDM, Employees Union, Kozhikode</li>
                <li>Sree Padhmanabha Temple Employees Union</li>
                <li>INTUC, Trivandrum</li>
                <li>NITA Gelatin India Limited, Employees Union, Chalakudy</li>
                <li>Kerala State Housing Board Employees Union</li>
              </ul>
            </div>
          </div>

          {/* My Interests End */}

          {/* Awards and  Recognitions Start*/}
          <div>
            <h3 className="text-3xl lg:text-[42px] text-[24px] font-semibold mt-10 p-4 ">
              Awards and Recognitions
            </h3>
          </div>

          <div className="">
            <div className="lg:border-3 border-[#173A5B] mx-auto m-0 ">
              <div className="relative bg-[#173A5B] text-[16px]">
                <h3 className=" text-white lg:p-24 p-9 lg:w-9/12 ">
                  My passion for serving the people as a politician has been
                  unwavering for the last 20 years. Throughout this time, I have
                  been dedicated to making sure that the voices of the people
                  are heard, and I feel grateful to have received recognition
                  for my work from various sources.
                </h3>
                <Image
                  width={350}
                  height={100}
                  className="absolute right-0 bottom-0 h-96 hidden lg:block me-3"
                  src="/sincere_images/award_and_record_.png"
                  alt="sincere_images"
                  loading="lazy"
                />
              </div>
              <div className="lg:flex p-3 text-[16px]">
                <div className="flex flex-col lg:w-1/2 lg:pr-4 lg:px-0 px-4 ">
                  <ul className="list-disc lg:p-4 ms-3 space-y-1 ">
                    <li>AA Rahim Memorial Award for Best Parliamentarian</li>
                    <li>
                      Global Malayali Council, Singapore Chapter – Best MLA
                    </li>
                    <li>
                      Cherian J Kappan Memorial Award for Best MLA in the state
                      from the Rajiv Gandhi
                    </li>
                    <li>National Centre for Humanitarian Studies, Palai</li>
                    <li>Vasthavam Daily – Best Parliamentarian Award</li>
                    <li>
                      FOKANA – Outstanding Performance in the Legislative
                      Assembly
                    </li>
                    <li>
                      Rajeev Gandhi foundation, Kollam – Best Political Leader
                      of the State
                    </li>
                    <li>A Pachan Foundation, Kollam – Yuva Parliamentarian</li>
                    <li>
                      KS Narayanan Namboothiri Foundation – Best MLA of the
                      State
                    </li>
                    <li>
                      Shri N Sundaran Nadar National Foundation – Best Political
                      Leader award
                    </li>
                    <li>TM Jacob Foundation – Best Parliamentarian Award</li>
                  </ul>
                </div>
                <div className="flex flex-col lg:w-1/2 lg:pl-4">
                  <ul className="list-disc lg:p-4 ms-8 space-y-1">
                    <li>
                      Rajeev Gandhi Study Centre, Malappuram – Rajiv Gandhi
                      Memorial Award 2013
                    </li>
                    <li>
                      VC Padmanabhan Memorial Award for achieving excellence in
                      public governance
                    </li>
                    <li>Reporter TV Jananayakan Award – Best MLA of State</li>
                    <li>
                      MP Gangadaran Foundation Award – Best MLA 2013 of State
                    </li>
                    <li>
                      KMA Latheef Memorial Award for excellence in the field of
                      Public service
                    </li>
                    <li>
                      Sreenarayana Sahithya Parishath Award – Best Political
                      Reformer
                    </li>
                    <li>S Sujanapal Memorial Award</li>
                    <li>CC Ismail Sahib Memorial Award – Best MLA</li>
                    <li>
                      PT Madhusoodanakurup Memorial Award – Best Politician
                    </li>
                    <li>
                      PR Francis Memorial Award for excellence in the field of
                      Public service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Awards and  Recognitions End */}
        </div>
      </div>
    </>
  )
}

export default Journey
