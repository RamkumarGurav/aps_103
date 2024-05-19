"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/GalleryDetails/Modal";
import transport1 from "@/public/transport/1.jpg";
import transport2 from "@/public/transport/2.jpg";
import transport3 from "@/public/transport/3.jpg";
import { defaultBlurDataUrl } from "@/lib/helpers/displayData";
import Carousel from "./Carousel";
export default function TransportModalContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(0);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={transport1}
              alt="transport"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(1);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={transport2}
              alt="transport"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>
      <div className=" rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]">
        <div className="bg-white w-full  flex items-center justify-center">
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            viewport={{ once: true, amount: 0.1 }}
            id="image-container"
            onClick={() => {
              setCurrentIndex(2);
              return modalOpen ? close() : open();
            }}
            className="relative  w-full h-[240px] mx-auto cursor-pointer"
          >
            <Image
              src={transport3}
              alt="transport"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-full object-cover "
              placeholder="blur"
              blurDataURL={defaultBlurDataUrl}
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <Carousel currentIndex={currentIndex} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
