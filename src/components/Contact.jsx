import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "../canvas/Earth";
import AddressIcon from "../assets/map.png";
import MailIcon from "../assets/mail.png";
import CallIcon from "../assets/phone-call.png";
import LinkedinIcon from "../assets/linkedin.png";
import GithubIcon from "../assets/github.png";

const Contact = () => {
  return (
    <div className="xl:mt-2 h-fit xl:flex-row flex-col-reverse flex gap-9 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[o.75] bg-black-100 p-6 rounded-2xl"
      >
        <p className={styles?.sectionSubText}>Get in touch</p>
        <h3 className={styles?.sectionHeadText}>Contact</h3>

        <div className="mt-5">
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="flex items-center"
          >
            <img
              src={MailIcon}
              alt="mail"
              className="w-10 h-10 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center ml-5">
              shrutithorat8816@gmail.com
            </h3>
          </div>
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="flex items-center mt-5"
          >
            <img
              src={CallIcon}
              alt="mail"
              className="w-10 h-10 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center ml-5">
              (+91) 8421058816
            </h3>
          </div>
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="flex items-center mt-5"
          >
            <img
              src={AddressIcon}
              alt="mail"
              className="w-10 h-10 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center ml-5">
              Sangli, Maharashtra
            </h3>
          </div>

          <h2 className="text-white text-[30px] font-bold mt-10">My Socials</h2>
          <div className="flex gap-4 mt-5">
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shruti-thorat-8421058816/",
                  "_blank"
                )
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={LinkedinIcon}
                alt="mail"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/ShrutiThorat", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={GithubIcon}
                alt="mail"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
