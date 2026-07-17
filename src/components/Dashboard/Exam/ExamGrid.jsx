import ExamCard from "./ExamCard";
import "./ExamGrid.css";

// const exams = [

//     {
//         id:1,
//         title:"JavaScript Mastery",
//         category:"Programming",
//         image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
//         duration:"60 Min",
//         questions:50,
//         level:"Beginner",
//         students:"2.4k",
//         rating:"4.8",
//         price:"Free"
//     },

//     {
//         id:2,
//         title:"React JS Advanced",
//         category:"Frontend",
//         image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
//         duration:"90 Min",
//         questions:70,
//         level:"Intermediate",
//         students:"1.8k",
//         rating:"4.9",
//         price:"Premium"
//     },

//     {
//         id:3,
//         title:"Node JS",
//         category:"Backend",
//         image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
//         duration:"80 Min",
//         questions:60,
//         level:"Intermediate",
//         students:"2.1k",
//         rating:"4.7",
//         price:"Premium"
//     },

//     {
//         id:4,
//         title:"MySQL Database",
//         category:"Database",
//         image:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
//         duration:"45 Min",
//         questions:40,
//         level:"Beginner",
//         students:"950",
//         rating:"4.6",
//         price:"Free"
//     },

//     {
//         id:5,
//         title:"Java Programming",
//         category:"Programming",
//         image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
//         duration:"75 Min",
//         questions:65,
//         level:"Advanced",
//         students:"3.2k",
//         rating:"5.0",
//         price:"Premium"
//     },

//     {
//         id:6,
//         title:"Python Developer",
//         category:"Programming",
//         image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
//         duration:"70 Min",
//         questions:55,
//         level:"Intermediate",
//         students:"4.1k",
//         rating:"4.9",
//         price:"Free"
//     }

// ];

function ExamGrid({ exams }){

    return(

        <section className="exam-grid">

            {

                exams.map((exam)=>(

                    <ExamCard
                        key={exam.id}
                        exam={exam}
                    />

                ))

            }

        </section>

    );

}

export default ExamGrid;