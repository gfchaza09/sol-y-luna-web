import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimateRender = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimateRender;
