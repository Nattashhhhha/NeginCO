import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px]  w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-4 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>درباره ی ما</p>
        <h2 className={styles.sectionHeadText}>شرکت فولاد آلیاژی نگین مشهد</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[35px]"
      >
        شرکت فولاد آلیاژی نگین مشهد بزرگترین تولیدکننده انواع فولاد آلیاژی در
        ایران در بخش خصوصی بوده و یکی از مدرن ترین کارخانجات فولاد آلیاژی ایران
        می باشد. کارخانجات فولادسازی، نورد مقاطع سبک، عملیات حرارتی و تکمیل کاری
        این شرکت مجهز به پیشرفته ترین تجهیزات و برخوردار از بالاترین سطح دانش
        فنی روز دنیا می باشد، که امکان تولید فولادهای آلیاژی را با بالاترین
        کیفیت و منطبق با استانداردهای بین المللی میسر ساخته است. محصولات این
        شرکت در صنایع نفت و گاز و پتروشیمی، نیروگاه ها، ابزارسازی، صنایع
        خودروسازی، ماشین سازی، ادوات کشاورزی، صنایع معدنی و سایر صنایع ویژه
        کاربرد وسیع دارد. شرکت فولاد آلیاژی ایران با ظرفیت تولید سالانه 200.000
        تن محصول، یکی از پیشرفتهترین تولیدکنندگان فولاد آلیاژی در ایران میباشد
        که در سال 1397 در استان خراسان به بهره برداری رسید
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
