// export const About =()=>{
//      const skills=[
//         "react",
//         "tailwindCss"

import { ReviewOnScroll } from "../ReviewOnScroll";

//      ];
//      const backendskilss=[
//         "Node.js",
//         "python",
//         "Flask",
//         "FastApi",
//         "AWs",
//         "MongoDB",
//         "Graphql"

//      ]
   

//     return (<section id="#about" className="min-h-screen flex items-center justify-center py-20">
//         <div className="max-w-3xl mx-auto px-4">
//             <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500  text-center  bg-clip-text text-transparent leading-right">
               
//                {" "} AboutMe
//                 </h2>
//                 <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
//                     <p className="text-gray-300mb-6">
//                         passionate developer with expertise in building scalable web applications and creating innovative solutions
//                     </p>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                               <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
//                               <div className="flex flex-wrap gap-2 ">
//                                 {skills.map(({ tech,key }) => (
//                                 <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
//                                                 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
//                             ))}
//                               </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     </section>
//     )
// };
//////////////////////////////////////////////////////
// export const About = () => {
//     const frontendSkills = ["React", "TailwindCSS"];
//     const backendSkills = ["Node.js", "Python", "Flask", "FastAPI", "AWS", "MongoDB", "GraphQL"];
//     const mlSkills = ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-Learn"];
//     const programmingSkills = ["C++", "Python", "Java", "JavaScript"];
  
//     return (
//       <section id="about" className="min-h-screen flex items-center justify-center py-20">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
//           {/* Left Side: Skills & Info */}
//           <div>
//             <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-center md:text-left bg-clip-text text-transparent">
//               About Me
//             </h2>
//             <p className="text-gray-300 mb-6 text-lg">
//               Passionate developer with expertise in building scalable web applications, AI models, and crafting innovative solutions.
//             </p>
  
//             {/* Skill Sections */}
//             <div className="space-y-6">
//               {/* Frontend Skills */}
//               <div>
//                 <h3 className="text-xl font-bold mb-3">Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {frontendSkills.map((tech, index) => (
//                     <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
  
//               {/* Backend Skills */}
//               <div>
//                 <h3 className="text-xl font-bold mb-3">Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {backendSkills.map((tech, index) => (
//                     <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
  
//               {/* ML & DL Skills */}
//               <div>
//                 <h3 className="text-xl font-bold mb-3">Machine Learning & Deep Learning</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {mlSkills.map((tech, index) => (
//                     <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
  
//               {/* Programming Skills */}
//               <div>
//                 <h3 className="text-xl font-bold mb-3">Programming</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {programmingSkills.map((tech, index) => (
//                     <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
  
//           {/* Right Side: Professional Photo */}
//           <div className="flex justify-center">
//             <div className="relative w-80 h-80 md:w-96 md:h-96   rounded-2xl overflow-hidden shadow-lg">
//               <img src="src/assets/mypic.jpg" alt="Your Photo" className="w-full h-full object-cover"/>
//             </div>
//           </div>
  
//         </div>
//       </section>
//     );
//   };
  
export const About = () => {
    const frontendSkills = ["React", "TailwindCSS"];
    const backendSkills = ["Node.js", "Python", "Flask", "FastAPI", "AWS", "MongoDB", "GraphQL"];
    const mlSkills = ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-Learn"];
    const programmingSkills = ["C++", "Python", "Java", "JavaScript"];
    const coreSkills = ["Problem Solving", "Data Structures", "Algorithms", "Cloud Computing", "Version Control (Git)"];
    const education = [
        { degree: "B.Tech in AIML", institution: "Vignan University", year: "2022-2026",cgpa:"8.3" },
        { degree: "B.Tech in AIML With Honours", institution: "Vignan University", year: "2022-2026" },
        
    ];
  
    return (
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <ReviewOnScroll>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Skills & Info */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-center md:text-left bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Passionate developer with expertise in building scalable web applications, AI models, and crafting innovative solutions.
            </p>
  
            {/* Skill Sections */}
            <div className="space-y-6">
              {[ 
                { title: "Frontend", skills: frontendSkills },
                { title: "Backend", skills: backendSkills },
                { title: "Machine Learning & Deep Learning", skills: mlSkills },
                { title: "Programming", skills: programmingSkills },
                { title: "Core Skills", skills: coreSkills }
              ].map((section, idx) => (
                <div key={idx}>
                  <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((tech, index) => (
                      <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Education Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="space-y-2">
                {education.map((edu, index) => (
                  <div key={index} className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-lg">
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="text-sm">{edu.institution} - {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Side: Professional Photo */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img src="src/assets/mypic.jpg" alt="Your Photo" className="w-full h-full object-cover"/>
            </div>
          </div>
  
        </div>
        </ReviewOnScroll>
      </section>
    );
};
