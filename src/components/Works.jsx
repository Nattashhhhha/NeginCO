import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>آزمایشگاه ها</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>آزمایشگاه مرکزی</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px]  leading-[30px] text-right'
        >
          جهت اطمینان از انجام صحیح عملیات حرارتی، آزمایشات سختی سنجی بر روی محصول صورت می گیرد. جهت این امر 1 خط تست سختی ازنوع برینل و در واحد تکمیل کاری، برای کنترل و رفع نواقص احتمالی محصولات در نظر گرفته شده است.
آزمایشگاه مرکزی دارای آزمایشگاه آنالیز شیمیایی شامل: طیف سنجی و شیمی تر و آزمایشگاههای آزمونهای متالورژیکی شامل: ماکرواچ،
متالوگرافی ، عملیات حرارتی ، تعیین خواک مکانیکی و کارگاه آماده سازی نمونه می باشد
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 text-right'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "labs");