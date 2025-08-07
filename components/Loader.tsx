import { motion } from "framer-motion"

export function Loader() {
  return (
    <div className="relative flex justify-center items-center">
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute text-8xl"
      >
        🍳
      </motion.span>
    </div>
  )
}

export default Loader
