import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Loader from "./components/loader";
import '@/styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
       <Loader/>
        
        
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Component {...pageProps} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MyApp;