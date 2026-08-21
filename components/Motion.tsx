'use client';

import { motion } from 'framer-motion';

export function FadeIn({children,delay=0,className}:{children:React.ReactNode;delay?:number;className?:string}){
  return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7,ease:[.2,.7,.2,1],delay}}>{children}</motion.div>;
}

export function Reveal({children,className}:{children:React.ReactNode;className?:string}){
  return <motion.div className={className} initial={{opacity:0,scale:.985}} animate={{opacity:1,scale:1}} transition={{duration:.8,ease:[.2,.7,.2,1]}}>{children}</motion.div>;
}
