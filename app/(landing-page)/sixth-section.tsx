"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight, PiArrowRight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    text: '1M+',
    subtext: 'community members',
  },
  {
    text: '150+',
    subtext: 'community groups',
  },
  {
    text: '50+',
    subtext: 'countries represented',
  },

  {

    header: "Customize the info you track",
    subheading:
      "Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.",

    image: "/assets/DumpingDoodle.svg",
  },
  

  {

    header: "Choose from a variety of colors",
    subheading:
      "Everything is customizable. Choose your own colors, icons, and more to make Bird work for you.",
    image: "/assets/CoffeeDoddle.svg",
  },





  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
    title: "Visualize, filter & sort any way you want",
    description:
      "Show only tasks assigned to you, or items marked as urgent. Break down any project in the way that is most helpful to you.",
    images: [
      { title: "Event in New York", picture: "/assets/ZombieingDoodle.svg" },
      { title: "Community meet up in London", picture: "/assets/SprintingDoodle.svg" },
      { title: "Conference in Brazil", picture: "/assets/UnboxingDoodle.svg" },
      { title: "Milan Tech Week", picture: "/assets/RollingDoodle.svg" },
      { title: "Madrid tech festival", picture: "/assets/DogJumpDoodle.svg" },
    ],
    
  },
];

type Tab = {
  icon: JSX.Element;
  header: string;
  subheading: string;
  images: { title: string; picture: string }[];
  description?: string;
  image?: string;
};

const SixthSection = () => {
  const ref = useRef(null);


  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index : any) => {
    setActiveImageIndex(index);
  };



  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/3 text-center">
          Join a global movement. Unleash your creativity.
        </div>
        <div className="py-4 px-10  xl:w-1/3  text-center">
          Our vibrant community produces content, teaches courses, and leads
          events all over the world.
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
          Learn more <PiArrowRight className="ml-3 text-sm " />
        </div>
        <div className="grid grid-cols-12 md:row-span-1 gap-4 xl:gap-6 mt-8 px-10 xl:w-3/5 mx-auto md:w-full">
        {tabs.map((tab, index) => (
        <div
          key={index}
          className={`
            col-span-12
            ${
              index <= 2
                ? "md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                : index <= 4
                ? "md:col-span-6 bg-[#f6f5f4] p-6 rounded-xl flex"
                : "col-span-8 bg-[#f6f5f4] p-6 rounded-xl"
            }
          `}
        >
          {index <= 2 ? (
            <div className="flex flex-col">
              <div className="text-5xl font-medium text-sky-600">{tab.text}</div>
              <div className="text-sm">{tab.subtext}</div>
            </div>
          ) : index <= 4 ? (
            <div>
              <div className="text-2xl font-medium">{tab.header}</div>
              <div className="text-sm mt-2">{tab.subheading}</div>
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={tab.image || ""}
                  width={1025}
                  height={500}
                  alt="logo"
                  className="w-full  rounded-xl p-20"
                />
              </div>
            </div>
          ) : (
            <>
            <div>
              {tab.images && (
                <div className="flex justify-center items-center flex-col">
                  <Image
                    src={tab.images[activeImageIndex].picture}
                    alt={`${tab.images[activeImageIndex].title} Image`}
                    width={500}
                    height={500}
                    className="w-full rounded-xl p-20"
                  />

                  <div>
                    <div className="text-xl font-medium mt-10 md:mt-0  pb-4">
                      {tab.images[activeImageIndex].title}
                    </div>
                  </div>

                  
                  <div className="flex space-x-2 xl:space-x-6">
                    {tab.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`${
                          index === activeImageIndex
                            ? "p-2 rounded-full bg-green-400 "
                            : "  p-2 rounded-full bg-blue-400"
                        }  `}
                      >
                      
                      </div>
                    ))}

                    </div>
                </div>
              )}
            </div>
            </>
          )}
        </div>
      ))}
      </div>
      

              




        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl xl:py-10 px-8 pt-6 xl:w-1/3 text-center ",
            font.className
          )}
        >
          &quot;Bird adapts to your needs. It&apos;s as minimal or as powerful
          as you need it to be.&quot;
        </div>


          <div className="items-center flex justify-center flex-col">
            <Image
              src="/logos/logoipsum-327.svg"
              alt="Canva logo"
              width={1000}
              height={1000}
              className="pt-2 xl:pt-0  w-10 xl:w-14 "
            />
       
          <div className="m text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default SixthSection;
