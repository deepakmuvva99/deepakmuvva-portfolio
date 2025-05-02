import { ReviewOnScroll } from "../ReviewOnScroll";

export const Home = () => {
    return (<section id="home" className="min-h-screen flex items-center justify-center relative">
        <ReviewOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500   bg-clip-text text-transparent leading-right">
                Hi,I'm DeepakMuvva
            </h1>
            <p className="text-gray-400vtext-lg max-w-lg mx-auto">
            I'm a Machine Learning Engineer and aspiring Investment Banker, passionate about AI and finance.
             I develop predictive stock models and AI applications, turning data into valuable insights. 
            With expertise in Python, C++, and full-stack development, I create impactful solutions.
            My goal is to secure a top MNC role, gain experience, and transition into investment banking 
            through an MBA in Finance. Driven by curiosity, I push boundaries to shape the future of tech and finance.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)])]">ViewProjects</a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded front-medium transition-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)])]
                                   hover:bg-blue-500/10                            ">contact Me</a>

            </div>
        </div>
        </ReviewOnScroll>
    </section>
    );
};