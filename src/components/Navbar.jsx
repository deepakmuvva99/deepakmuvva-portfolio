import { useEffect } from "react"

export const Navbar = ({menuopen,setmenuopen}) => {

    useEffect(() => {
        document.body.style.overflow=menuopen?"hidden":"";
        
    },[menuopen]);
    return <nav className="fixed top-0 w-full z-40 bg-[rgb(10,10,10,0.8)]  backdrop-blur-lg border-white/10 shadow-lg" >
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <a href="#home" className="text-xl font-mono text-white">Deepak<span className="text-blue-500">.Muvva</span></a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setmenuopen((prev)=>!prev)}>
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-grey-300 hove:text-white transition-colors ">{" "}Home</a>
                    <a href="#about" className="text-grey-300 hove:text-white transition-colors ">{" "}About</a>
                    <a href="#projects" className="text-grey-300 hove:text-white transition-colors ">{" "}Projects</a>
                    <a href="#contact" className="text-grey-300 hove:text-white transition-colors">{" "}Contact</a>

                </div>

            </div>
        </div>
            
    </nav>
}