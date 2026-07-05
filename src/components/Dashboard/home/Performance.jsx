import "./Performance.css";

function Performance() {

    return (

        <div className="performance-card">

            <div className="performance-header">

                <h3>

                    Performance

                </h3>

                <span>

                    This Month

                </span>

            </div>

            <div className="progress-circle">

                <div className="progress-value">

                    <h2>85%</h2>

                    <p>Overall Score</p>

                </div>

            </div>

            <div className="performance-list">

                <div className="progress-item">

                    <div className="progress-title">

                        <span>JavaScript</span>

                        <span>90%</span>

                    </div>

                    <div className="progress-bar">

                        <div
                            className="progress-fill js"
                        ></div>

                    </div>

                </div>

                <div className="progress-item">

                    <div className="progress-title">

                        <span>Python</span>

                        <span>82%</span>

                    </div>

                    <div className="progress-bar">

                        <div
                            className="progress-fill python"
                        ></div>

                    </div>

                </div>

                <div className="progress-item">

                    <div className="progress-title">

                        <span>React</span>

                        <span>76%</span>

                    </div>

                    <div className="progress-bar">

                        <div
                            className="progress-fill react"
                        ></div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Performance;