import "./WelcomeCard.css";
import welcomeimage from "./welcome-user-image.png"

function WelcomeCard() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (

        <div className="welcome-card">

            <div className="welcome-left">

                <span className="welcome-tag">
                    👋 Welcome Back
                </span>

                <h2>

                    Hello,

                    <span>

                        {" "}

                        {user?.fullname || "Student"}

                    </span>

                </h2>

                <p>

                    Ready for today's exams?
                    Complete your pending exams, track your
                    progress and improve your performance.

                </p>

              

            </div>

            <div className="welcome-right">

                <img
                    src={`${welcomeimage}`}
                    alt="Student"
                />

            </div>

        </div>

    );

}

export default WelcomeCard;