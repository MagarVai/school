"use client";
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, CheckCircle, ArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, } from 'lucide-react';
import Navbar from './components/NavBar';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-gray-50 text-slate-900 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section id="admissions" className="relative h-screen bg-no-repeat w-full bg-cover bg-center bg-fixed flex items-center justify-center pt-20 overflow-hidden"
        style={{ backgroundImage: "url('./hero-image.jpg')" }}>
        {/* Optional: Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-extrabold text-gray-100 mb-6"
          >
            Empowering Minds, Shaping Futures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
          >
            Welcome to Belpuspa Shiskhyalaya, where we nurture excellence from Early Childhood up to Class 10 with a focus on holistic growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Apply for Admission <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Excellence", value: "20+" },
            { label: "Active Students", value: "500+" },
            { label: "Expert Teachers", value: "30+" },
            { label: "SEE Success", value: "100%" },
          ].map((stat, idx) => (
            <motion.div key={idx} {...fadeIn}>
              <div className="text-3xl md:text-4xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest mt-2 text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div {...fadeIn} className="flex-1">
            <div className="relative">
              <img
                src="./principal1.jpg"
                alt="Principal Surendra Magar"
                className="rounded-2xl shadow-2xl "
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-xl hidden lg:block">
                <p className="text-blue-950 font-bold text-xl italic">"Education is the passport to the future."</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="flex-1">
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-2 text-center md:text-left">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center md:text-left">Message from the Principal</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
              "At Belpuspa Shiskhyalaya, we believe every child is a unique seed with the potential to grow into a mighty oak. Our mission is to provide an environment where students from Early Childhood to Class 10 can discover their passions and achieve academic brilliance."
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We focus on discipline, character building, and modern technology to prepare our students for the challenges of the 21st century.
            </p>
            <div>
              <h4 className="text-xl font-bold text-blue-900">Surendra Magar</h4>
              <p className="text-gray-500 font-medium uppercase tracking-tighter">Principal, Belpuspa Shiskhyalaya</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Message from Vice-Principal */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div {...fadeIn} className="flex-1">
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-2 text-center md:text-left">Leadership</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center md:text-left">Message from the Vice-Principal</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
              "At Belpuspa Shiskhyalaya, we believe every child is a unique seed with the potential to grow into a mighty oak. Our mission is to provide an environment where students from Early Childhood to Class 10 can discover their passions and achieve academic brilliance."
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We focus on discipline, character building, and modern technology to prepare our students for the challenges of the 21st century.
            </p>
            <div>
              <h4 className="text-xl font-bold text-blue-900">Rabindra Buddhathoki</h4>
              <p className="text-gray-500 font-medium uppercase tracking-tighter">Vice-Principal, Belpuspa Shiskhyalaya</p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="flex-1">
            <div className="relative">
              <img
                src="./vice-principal.jpg"
                alt="Principal Surendra Magar"
                className="rounded-2xl shadow-2xl "
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-xl hidden lg:block">
                <p className="text-blue-950 font-bold text-xl italic">"Education is the passport to the future."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACADEMICS SECTION */}
      <section id="academics" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-2">Academic Programs</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Our Education Levels</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pre - Primary Education", desc: "Grade 1 to 5. Focusing on literacy, numeracy, and creative arts.", icon: <BookOpen className="text-blue-900" size={32} /> },
              { title: "Primary Education", desc: "Grade 1 to 5. Focusing on literacy, numeracy, and creative arts.", icon: <BookOpen className="text-blue-900" size={32} /> },
              { title: "Lower Secondary", desc: "Grade 6 to 8. Developing critical thinking and complex problem solving.", icon: <Users className="text-blue-900" size={32} /> },
              { title: "Secondary Level", desc: "Grade 9 and 10. Intensive preparation for the SEE examinations.", icon: <Award className="text-blue-900" size={32} /> },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-amber-500"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-800">{program.title}</h4>
                <p className="text-gray-600 mb-6">{program.desc}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500" /> Advanced Curriculum</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500" /> Moral Education</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 font-bold text-sm uppercase tracking-widest mb-2">Campus Life</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">School Gallery</h3>
        </div>
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {[
            "./image1.jpg",
            "./image5.jpg",
            "./image7.jpg",
            "./image2.jpg",
            "./image4.jpg",
            "./image6.jpg",
            
          ].map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-xl shadow-md cursor-pointer"
              alt="Gallery item"
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-blue-950 text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img className="w-[50px] h-[50px] rounded-full" src="./logo.jpg" alt="logo"/>
              <span className="font-bold text-lg text-white uppercase">Belpuspa</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Belpuspa Shiskhyalaya is dedicated to academic excellence and character development for the next generation of leaders.
            </p>
            <div className="flex gap-4">
              <Facebook className="hover:text-amber-500 cursor-pointer" />
              <Twitter className="hover:text-amber-500 cursor-pointer" />
              <Instagram className="hover:text-amber-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-amber-500">About Our History</a></li>
              <li><a href="#" className="hover:text-amber-500">Admissions Policy</a></li>
              <li><a href="#" className="hover:text-amber-500">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-amber-500">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-amber-500" /> Kathmandu, Nepal</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-amber-500" /> +977-01-XXXXXXX</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-amber-500" /> info@belpuspa.edu.np</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest events and news.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-blue-900 border border-blue-800 p-3 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-amber-500" />
              <button className="bg-amber-500 text-blue-950 font-bold py-3 rounded-lg">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 mt-20 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Belpuspa Shiskhyalaya. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}