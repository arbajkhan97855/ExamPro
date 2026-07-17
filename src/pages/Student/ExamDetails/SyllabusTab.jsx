import "./ExamDetails.css";

function SyllabusTab({ exam }) {

  

    return (

        <div className="ep-exd-syllabus">

            {

                 exam.topics.map((item,index)=>(

                    <div
                        key={index}
                        className="ep-exd-syllabus-item"
                    >

                        ✓ {item}

                    </div>

                ))

            }

        </div>

    );

}

export default SyllabusTab;