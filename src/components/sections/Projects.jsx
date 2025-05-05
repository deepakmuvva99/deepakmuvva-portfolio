// export const Projects = () => {
//     return (
//         <section id="projects" className="min-h-screen flex  items-center justify-center py-20">
//             <div className="mx-w-5xl  mx-auto px-4">
//                 <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-center md:text-left bg-clip-text text-transparent">Featured Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
//                     <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//                         <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
//                         <p className="text-gray-400 mb-4">
//                             Scalable Infrastructure management with real time monitoring and automated scaling.
//                         </p>
//                         <div>
//                             {["React","Nodejs","AWS","Docker"].map((tech,index)=>(
//                                  <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//                                  {tech}
//                                </span>
//                             ))}
//                         </div >
//                         <div className="flex justify-between items-center mt-4">
//                         <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">ViewProjects--|</a>

import { ReviewOnScroll } from "../ReviewOnScroll";

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

export const Projects = () => {
    const projects = [
        {
            title: "Stock Market Prediction",
            description: "Combining Risk Management, Sentiment Analysis, and advanced modeling for precise stock market predictions.",
            techStack: ["Python", "SVM", "NLP", "Flask", "MongoDB"],
            link: "#"
        },
        {
            title: "Res-ViT-MedNet Model",
            description: "A deep learning-based medical image classification model leveraging Residual Vision Transformers for high accuracy.",
            techStack: ["TensorFlow", "PyTorch", "Deep Learning", "Medical Imaging"],
            link: "#"
        },
        {
            title: "File Management Application (C++)",
            description: "A lightweight and efficient file management system developed in C++ for organizing and handling files with ease.",
            techStack: ["C++", "OOP", "File Handling"],
            link: "#"
        },
        {
            title: "Rent Easy - House Rental Platform",
            description: "A user-friendly platform for listing and renting properties with an intuitive interface and secure transactions.",
            techStack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
            link: "#"
        },
         {
            title: "iris Flower Classification",
            description: "A machine learning model for classifying iris flower species based on petal and sepal dimensions.",
            techStack: ["Python", "Scikit-learn", "FastApi","react"],
            link: "https://iris-deploy.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h3 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Featured Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <a href={project.link} className="text-blue-500 hover:text-blue-700 transition-colors">View Project →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </ReviewOnScroll>
        </section>
    );
};
