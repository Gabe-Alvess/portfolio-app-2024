"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import { FileTextIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  const MotionImage = motion(Image);

  return (
    <main>
      <Container>
        <div className="home-outer-container">
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="home-text-container"
          >
            <p>HI, I&#39;M GABRIEL.</p>
            <p>A CREATIVE</p>
            <p>AND DEDICATED</p>
            <p>FRONTEND DEVELOPER</p>
            <p>AIMING TO BE A</p>
            <p>FULL STACK DEVELOPER</p>
          </motion.div>
          <div className="home-inner-container">
            <MotionImage
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              src={"/images/photo-bg-shadow.jpg"}
              alt="profile photo"
              width={450}
              height={450}
              priority
              className="home-profile-img dark:hidden"
            />
            <MotionImage
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              src={"/images/photo-bg-blue.jpg"}
              alt="profile photo"
              width={450}
              height={450}
              priority
              className="home-profile-img hidden dark:block"
            />
            <div className="home-icon-btn-container">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
                className="home-icon-btn group"
              >
                <a href="cv/Gabriel_Alves_CV_EN.pdf" download>
                  <FileTextIcon className="home-icon" />
                </a>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="home-icon-btn-text -right-3 lg:-right-2"
                >
                  RESUME
                </motion.span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 4 }}
                className="home-icon-btn group"
              >
                <a href="https://www.linkedin.com/in/gabriel-webdev/" target="_blank">
                  <LinkedInLogoIcon className="home-icon" />
                </a>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="home-icon-btn-text -right-4 lg:-right-3"
                >
                  LINKEDIN
                </motion.span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 5 }}
                className="home-icon-btn group"
              >
                <a href="https://github.com/Gabe-Alvess" target="_blank">
                  <GitHubLogoIcon className="home-icon" />
                </a>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="home-icon-btn-text -right-2 lg:-right-1"
                >
                  GITHUB
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
