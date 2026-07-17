import { motion } from "framer-motion";

import "./ProgressBar.css";

function ProgressBar({ progress }) {

    return (

        <div className="ep-live-progress">

            <motion.div

                className="ep-live-progress-fill"

                initial={{ width: 0 }}

                animate={{ width: `${progress}%` }}

                transition={{
                    duration: .6,
                    ease: "easeInOut"
                }}

            >

                <span>

                    {progress}%

                </span>

            </motion.div>

        </div>

    );

}

export default ProgressBar;