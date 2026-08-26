"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function Portfolio() {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
    };

    const slideUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.6 } }
    };

    const coreSkills = [
        "Python", "Java", "Machine Learning", "Deep Learning",
        "TensorFlow", "Snowflake", "Activepieces", "Cybersecurity"
    ];

    return (
        <main className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-white tracking-tighter">
                        Priya<span className="text-cyan-500">.ai</span>
                    </span>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                        <a href="#publications" className="hover:text-cyan-400 transition-colors">Publications</a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
                        <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
                    </div>
                </div>
            </nav>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-40 pb-20 min-h-screen flex items-center">
                    <motion.div 
                        className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={staggerContainer}>
                            <motion.div variants={fadeInUp}>
                                <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-1.5 text-sm backdrop-blur-md">
                                    Available for Internships
                                </Badge>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                                vespera-works<br />
                                <motion.span 
                                    className="block mt-2 text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                    transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                >
                                    AI/ML Engineer
                                </motion.span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-xl leading-relaxed mt-6">
                                AIML-focused Computer Science student with strong expertise in programming, machine learning, deep learning, and data analysis.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-10">
                                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 shadow-[0_0_20px_rgba(8,145,178,0.3)] px-8 h-14 text-base rounded-full transition-transform hover:scale-105 duration-300">
                                    <a href="#publications">
                                        Explore Work <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild className="border-white/10 hover:bg-white/5 bg-[#111] text-white h-14 px-8 text-base rounded-full transition-transform hover:scale-105 duration-300">
                                    <a href="/resume.pdf">
                                        Download Resume <Download className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Profile Image Sequence */}
                        <motion.div variants={fadeInUp} className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] border border-white/10 bg-black">
                            <ImageSequenceViewer folderName="9" frameCount={40} className="w-full h-full rounded-none" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Executive Summary */}
                <section id="about" className="py-32 overflow-hidden">
                    <motion.div 
                        className="max-w-4xl mx-auto px-6 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={slideInLeft} className="inline-block mb-6">
                            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
                        </motion.div>
                        <motion.h2 variants={slideInRight} className="text-4xl md:text-5xl font-bold text-white mb-10">
                            Research-Driven & Scalable
                        </motion.h2>
                        <motion.p variants={slideInLeft} className="text-xl md:text-3xl text-slate-300 leading-relaxed font-light">
                            I am passionate about building intelligent systems. Experienced in working on comprehensive AI/ML projects, I aim to contribute to innovative solutions that make a tangible impact on complex data challenges.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Publications & Conferences (Moved to top as requested) */}
                <section id="publications" className="py-32 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="flex items-center gap-4 mb-20"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-white">Publications</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                        </motion.div>

                        <motion.div 
                            className="space-y-12"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            {/* Pub 1 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#111] border-white/10 overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 flex flex-col md:flex-row">
                                    <div className="w-full md:w-[400px] shrink-0 border-r border-white/10">
                                        <ImageSequenceViewer folderName="4" frameCount={40} className="w-full h-64 md:h-full rounded-none" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <Badge variant="outline" className="w-fit mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm px-3 py-1">
                                            ICEFEET 2026 ΓÇö Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                                            Hybrid Intelligence Learning Architecture for Pulmonary Hypertension Diagnosis
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            A novel architectural approach utilizing hybrid intelligence to accurately and efficiently diagnose pulmonary hypertension from complex medical datasets.
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Pub 2 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#111] border-white/10 overflow-hidden group hover:border-blue-500/50 transition-all duration-500 flex flex-col md:flex-row-reverse">
                                    <div className="w-full md:w-[400px] shrink-0 border-l border-white/10">
                                        <ImageSequenceViewer folderName="5" frameCount={40} className="w-full h-64 md:h-full rounded-none" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <Badge variant="outline" className="w-fit mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 text-sm px-3 py-1">
                                            ICDSNE 2026 ΓÇö Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                            Scalable Fault Detection in Aircraft Engines via Sequence Modeling and Attention-Based Autoencoding
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Advanced deep learning framework analyzing time-series sensor data to predict remaining useful life and classify engine faults before they occur.
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Pub 3 */}
                            <motion.div variants={slideUp}>
                                <Card className="bg-[#111] border-white/10 overflow-hidden group hover:border-purple-500/50 transition-all duration-500 flex flex-col md:flex-row">
                                    <div className="w-full md:w-[400px] shrink-0 border-r border-white/10">
                                        <ImageSequenceViewer folderName="6" frameCount={40} className="w-full h-64 md:h-full rounded-none" />
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <Badge variant="outline" className="w-fit mb-6 bg-purple-500/10 text-purple-400 border-purple-500/20 text-sm px-3 py-1">
                                            ICDSNE 2026 ΓÇö Under Review
                                        </Badge>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">
                                            Real-Time Detection of Online Grooming Behaviors Using YOLOv8 for Risk Assessment
                                        </h3>
                                        <p className="text-slate-400 text-lg leading-relaxed">
                                            Leveraging state-of-the-art computer vision models like YOLOv8 to identify and assess risks associated with online grooming in real-time environments.
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="flex items-center gap-4 mb-20 flex-row-reverse"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-white">Projects</h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-l from-blue-500/50 to-transparent mr-4" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Project 1 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                                    <ImageSequenceViewer folderName="1" frameCount={40} className="w-full h-64 rounded-none border-b border-white/10" />
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">Tourist Recommendation System</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base line-clamp-4">
                                            Developed a real-time recommendation system using Decision Tree algorithm, integrating weather APIs, user preferences, and travel conditions.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <div className="flex flex-wrap gap-2">
                                            {["Flask", "JavaScript", "Decision Tree", "OpenStreetMap API"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                                    <ImageSequenceViewer folderName="2" frameCount={40} className="w-full h-64 rounded-none border-b border-white/10" />
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">NLP Language & Bias Detection</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base line-clamp-4">
                                            Built an NLP dashboard using FastText, VADER, and TextStat for real-time language detection, sentiment analysis, and readability scoring.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <div className="flex flex-wrap gap-2">
                                            {["FastText", "VADER", "TextStat", "NLP"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={slideUp} className="h-full">
                                <Card className="bg-[#0a0a0a] border-white/10 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] hover:border-purple-500/30 transition-all duration-500 h-full flex flex-col rounded-3xl">
                                    <ImageSequenceViewer folderName="3" frameCount={40} className="w-full h-64 rounded-none border-b border-white/10" />
                                    <CardHeader className="flex-grow pt-8">
                                        <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors">Smart Interview Agent</CardTitle>
                                        <CardDescription className="text-slate-400 mt-4 text-base line-clamp-4">
                                            Implemented an end-to-end pipeline for dynamic question generation, answer analysis, and performance tracking using Generative AI.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-8">
                                        <div className="flex flex-wrap gap-2">
                                            {["GenAI", "Activepieces", "LLM", "Workflow"].map(tag => (
                                                <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-slate-300 px-3 py-1">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience & Skills (Technical Arsenal) */}
                <section id="skills" className="py-32 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={slideInLeft} className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
                                <p className="text-slate-400 text-lg">A deep dive into the frameworks, languages, and tools I use to build scalable AI systems.</p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4 mb-12">
                                {coreSkills.map((skill) => (
                                    <motion.div key={skill} variants={fadeInUp}>
                                        <AntiGravitySkill name={skill} />
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div variants={slideInRight} className="space-y-6 bg-[#111] p-8 rounded-3xl border border-white/5">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-cyan-500" /> Professional Experience
                                </h3>
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl text-white font-medium">Internship Trainee</h4>
                                        <span className="text-cyan-400 text-sm font-medium bg-cyan-500/10 px-3 py-1 rounded-full">Jan 2024 - Apr 2024</span>
                                    </div>
                                    <p className="text-slate-400 mb-4">Razz Security, Bengaluru</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-slate-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-1 shrink-0" />
                                            <span>Vulnerability Assessment & Penetration Testing (VAPT) on web apps.</span>
                                        </li>
                                        <li className="flex items-start text-slate-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-1 shrink-0" />
                                            <span>Mitigated OWASP Top 10 vulnerabilities (SQLi, XSS).</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Technical Arsenal Image Sequence */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10"
                        >
                            <ImageSequenceViewer folderName="8" frameCount={40} className="w-full h-full rounded-none" />
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
                        </motion.div>

                    </div>
                </section>

                {/* Education & Certifications */}
                <section id="education" className="py-32">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Certificates Sequence */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] border border-white/10 order-2 lg:order-1"
                        >
                            <ImageSequenceViewer folderName="7" frameCount={40} className="w-full h-full rounded-none" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-1 lg:order-2"
                        >
                            <motion.div variants={slideInRight} className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education & Credentials</h2>
                                <p className="text-slate-400 text-lg">Academic background and continuous learning certifications.</p>
                            </motion.div>

                            <div className="space-y-8 mb-12">
                                <motion.div variants={slideInRight} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-cyan-500 before:rounded-full before:shadow-[0_0_15px_rgba(6,182,212,0.8)] after:absolute after:left-[7px] after:top-6 after:bottom-[-2rem] after:w-[2px] after:bg-white/10">
                                    <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science (AI & ML)</h3>
                                    <p className="text-cyan-400 font-medium mb-2">M. S. Ramaiah Institute of Technology</p>
                                    <p className="text-slate-500 text-sm">7th Semester (2024–2027)</p>
                                </motion.div>

                                <motion.div variants={slideInRight} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-slate-600 before:rounded-full">
                                    <h3 className="text-xl font-bold text-white mb-2">Diploma in Computer Science</h3>
                                    <p className="text-slate-400 font-medium mb-2">MEI Polytechnic, Bengaluru</p>
                                    <p className="text-slate-500 text-sm">2021–2024</p>
                                </motion.div>
                            </div>

                            <motion.div variants={slideInRight}>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Award className="w-6 h-6 text-blue-500" /> Top Certifications
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Internship Certification ΓÇö Razz Security",
                                        "AWS Academy ΓÇö ML Foundations",
                                        "Generative AI Leader ΓÇö Google Cloud",
                                        "Deep Learning ΓÇö Google Cloud",
                                        "Ethical Hacking ΓÇö Udemy",
                                        "Machine Learning ΓÇö Infosys"
                                    ].map((cert, i) => (
                                        <li key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors">
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                    </div>
                </section>

                {/* Professional (Soft) Skills (Folder 11) */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)] border border-white/10 order-2 lg:order-1"
                        >
                            <ImageSequenceViewer folderName="11" frameCount={40} className="w-full h-full rounded-none" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-1 lg:order-2"
                        >
                            <motion.div variants={slideInRight} className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Skills</h2>
                                <p className="text-slate-400 text-lg">Beyond code, I bring strong interpersonal and strategic skills to every team I join.</p>
                            </motion.div>
                            <div className="space-y-6">
                                {[
                                    { title: "Analytical Problem Solving", desc: "Breaking down complex ML problems into actionable components." },
                                    { title: "Effective Communication", desc: "Articulating technical constraints to non-technical stakeholders." },
                                    { title: "Agile Adaptability", desc: "Thriving in fast-paced, iterative development environments." },
                                    { title: "Collaborative Leadership", desc: "Guiding peers and collaborating on best practices." }
                                ].map((skill, i) => (
                                    <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <h3 className="text-xl font-bold text-purple-400 mb-2">{skill.title}</h3>
                                        <p className="text-slate-400">{skill.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact & Networking (Folder 13) */}
                <section id="contact" className="py-32">
                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10 order-2 lg:order-1"
                        >
                            <ImageSequenceViewer folderName="13" frameCount={40} className="w-full h-full rounded-none" />
                        </motion.div>

                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-1 lg:order-2"
                        >
                            <motion.div variants={slideInRight} className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
                                <p className="text-slate-400 text-lg">Whether it's a project collaboration, a job opportunity, or just a chat about AIΓÇöI'm always open to networking.</p>
                            </motion.div>
                            <motion.div variants={slideInRight} className="space-y-6">
                                <a href="mailto:www.priya6780@gmail.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Email</h4>
                                        <p className="text-slate-400 text-sm">www.priya6780@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">LinkedIn</h4>
                                        <p className="text-slate-400 text-sm">Connect with me</p>
                                    </div>
                                </a>
                                <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-slate-400/50 transition-colors group">
                                    <div className="w-12 h-12 bg-slate-500/10 rounded-full flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">GitHub</h4>
                                        <p className="text-slate-400 text-sm">Explore my code</p>
                                    </div>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-white/5 bg-black/80 backdrop-blur-xl relative z-10">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 font-medium text-sm">┬⌐ 2026 vespera-works. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 group">
                                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 group">
                                <Linkedin className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                            </a>
                            <a href="mailto:www.priya6780@gmail.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110 transition-all duration-300 group">
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
