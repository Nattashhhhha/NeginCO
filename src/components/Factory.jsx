import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { Factories } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const FactoriesCard = ({ factor}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
            }}
            style={{direction : 'ltr'}}
      contentArrowStyle={{ borderLeft: "7px solid  #232631" }}
      date={factor.date}
      iconStyle={{ background: factor.iconBg }}
      icon={
        <div className='flex justify-center w-full h-ful'>
          <img
            src={factor.icon}
            alt={factor.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{factor.title}</h3>
        <p
          className='text-secondary text-[16px]'
          style={{ margin: 0 }}
        >
          {factor.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc mr-5 space-y-2'>
        {factor.points.map((point, index) => (
          <li
            key={`factor-point-${index}`}
            className='text-white-100 text-[14px] pr-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Factory = () => {
  return (
    <>

    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          کارخانه ها
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        صنایع هدف
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline >
          {Factories.map((factor, index) => ( 
            <FactoriesCard
              key={`factor-${index}`}
              factor={factor}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Factory, "factories");