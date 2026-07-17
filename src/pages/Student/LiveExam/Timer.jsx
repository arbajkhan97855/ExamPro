import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";

import "./Timer.css";

function Timer({

    duration,

    onTimeUp

}) {

    const [timeLeft, setTimeLeft] = useState(duration * 60);

    useEffect(() => {

        if (timeLeft <= 0) {

            onTimeUp();

            return;

        }

        const timer = setInterval(() => {

            setTimeLeft(prev => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft, onTimeUp]);

    const hours = Math.floor(timeLeft / 3600);

    const minutes = Math.floor((timeLeft % 3600) / 60);

    const seconds = timeLeft % 60;

    const format = (value) =>

        value.toString().padStart(2, "0");

    let timerClass = "ep-live-timer";

    if (timeLeft <= 300) {

        timerClass += " danger";

    }

    else if (timeLeft <= 600) {

        timerClass += " warning";

    }

    return (

        <motion.div

            className={timerClass}

            animate={

                timeLeft <= 300

                ?

                {

                    scale:[1,1.05,1]

                }

                :

                {}

            }

            transition={{

                repeat:Infinity,

                duration:1

            }}

        >

            <FaClock />

            <span>

                {

                    hours > 0

                    ?

                    `${format(hours)}:${format(minutes)}:${format(seconds)}`

                    :

                    `${format(minutes)}:${format(seconds)}`

                }

            </span>

        </motion.div>

    );

}

export default Timer;