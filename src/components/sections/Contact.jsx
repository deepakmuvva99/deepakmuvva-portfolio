import { ReviewOnScroll } from "../ReviewOnScroll"
import emailjs from 'emailjs-com';
import { useState } from "react";

export const Contact = () => {
    const [Formdata,setFormdata]=useState({
        name:"",
        email:"",
        message:""
    });
    const SERVICE_ID="service_2raied5"
    const TEMPLATE_ID="template_ttt9zbm"
    const PUBLIC_KEY="ruRZzQTOUvMy1ioB_"
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent Successfully");
            setFormdata({
                name:"",
                email:"",
                message:""
            })
        }).catch(() => alert("Something went wrong ! please try again"));
    }
  return(
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 ">
        <ReviewOnScroll>
            <div className="px-4 w-150">
                <h3 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Get In Touch</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text"
                        id="name"
                        name="name" 
                        required 
                        value={Formdata.name}
                        placeholder="Name..." 
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        onChange={(e) => setFormdata({...Formdata, name: e.target.value})}/>
                        </div>
                    
                    <div className="relative">
                        <input type="email"
                        id="email"
                        name="email" 
                        required 
                        value={Formdata.email}
                        placeholder="example@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                        onChange={(e) => setFormdata({...Formdata, email: e.target.value})}/>
                        </div>
                
                    <div className="relative">
                        <textarea
                        id="message"
                        name="message" 
                        required
                        rows={5} 
                        value={Formdata.message}
                        placeholder="Your Message..."
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                       onChange={(e) => setFormdata({...Formdata, message: e.target.value})}/>
                        </div>
                    <button type="submit" className="w-full bg-blue-500 rounded px-4 py-3 text-white transition hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Send Message
                    </button>
                </form> 
            </div>
        </ReviewOnScroll>
    </section>
  )
}