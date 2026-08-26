"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AntiGravitySkill from "@/components/AntiGravitySkill";
// import ImageSequenceViewer from "@/components/ImageSequenceViewer";
import { Github, Linkedin, Mail, Download, ArrowRight, ExternalLink, FileText, Award, BrainCircuit, MessageSquare, Zap, Users, Send, Database, Cpu, Layers, ShieldCheck, Terminal, Network, Menu, X, Briefcase } from "lucide-react";
import React from "react";
import PublicationsScrollContainer from "@/components/ui/motion-scroll-container";

function useTypingEffect(words: string[], typingSpeed = 90, deletingSpeed = 55, pauseMs = 1800) {
    const [displayed, setDisplayed] = React.useState("");
    const [wordIdx, setWordIdx] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const current = words[wordIdx];
        let timeout: ReturnType<typeof setTimeout>;
        if (!isDeleting && displayed === current) {
            timeout = setTimeout(() => setIsDeleting(true), pauseMs);
        } else if (isDeleting && displayed === "") {
            setIsDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
            }, isDeleting ? deletingSpeed : typingSpeed);
        }
        return () => clearTimeout(timeout);
    }, [displayed, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

    return displayed;
}

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLElement>(null);
    const typedTitle = useTypingEffect(["AI/ML Engineer", "Deep Learning Researcher", "Neural Architect", "AI Systems Builder"]);

    const [expandedPub, setExpandedPub] = React.useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        // Replace with your Web3Forms access key
        formData.append("access_key", "27e1b659-ceef-48e7-80b1-17774d76f6cd");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, []);

    // Animation variants

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } }
    };

    const slideInLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2, duration: 1.2 } }
    };

    const slideInRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.2, duration: 1.2 } }
    };

    const slideUp: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.2, duration: 1.0 } }
    };

    const coreSkills = [
        { name: "Python", icon: Terminal },
        { name: "Deep Learning", icon: Layers },
        { name: "TensorFlow", icon: Zap },
        { name: "Snowflake", icon: Database },
        { name: "Cybersecurity", icon: ShieldCheck },
        { name: "NLP", icon: MessageSquare },
        { name: "Computer Vision", icon: Cpu },
        { name: "API Integration", icon: Network },
        { name: "Generative AI", icon: BrainCircuit }
    ];

    return (
        <div className="bg-[#0B0E14]">
            {/* Navigation - Pinned at top */}
            <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#home" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Priya Logo" className="h-10 md:h-12 w-auto object-contain" />
                    </a>
                    <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
                        <a href="#about" className="hover:text-cyan-400 transition-colors relative group py-2">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#publications" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Publications
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#experience" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Experience
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Projects
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Skills
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors relative group py-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4 ml-6 pl-6 border-l border-white/10">
                        <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden border-white/20 text-white text-xs h-9 px-4 rounded-full flex items-center gap-2"
                    >
                        {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        {isMenuOpen ? "Close" : "Menu"}
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={false}
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, y: 0, pointerEvents: "auto" },
                        closed: { opacity: 0, y: -20, pointerEvents: "none" }
                    }}
                    className="absolute top-full left-0 w-full mt-2 md:hidden"
                >
                    <div className="glass rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4">
                        {["home", "about", "publications", "experience", "projects", "skills", "education", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-slate-300 hover:text-cyan-400 font-medium py-3 px-4 border-b border-white/5 capitalize transition-colors flex items-center justify-between group"
                            >
                                {item}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </nav>

            <main ref={containerRef} className="flex flex-col min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
                {/* Data Grid Overlay */}
                <div className="fixed inset-0 grid-overlay z-0 opacity-20 pointer-events-none" />

                <div className="relative z-10">
                    {/* Hero Section */}
                    <section id="home" className="min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-24 pb-12">
                        <motion.div
                            className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-row items-center justify-between gap-3 sm:gap-6 md:gap-12"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            {/* Text — left side */}
                            <motion.div variants={staggerContainer} className="flex flex-col items-start text-left flex-1 min-w-0">
                                <motion.div variants={fadeInUp}>
                                    <div className="inline-flex items-center gap-1.5 mb-4 md:mb-8 glass px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-cyan-500/30 animate-breathe shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                        <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3 shrink-0">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-cyan-500"></span>
                                        </span>
                                        <span className="caption-text font-medium text-cyan-400 uppercase tracking-wider whitespace-nowrap">Available for Internships</span>
                                    </div>
                                </motion.div>

                                <motion.h1 variants={fadeInUp} className="hero-title font-bold text-white tracking-tight mb-2 md:mb-4 brand-logo">
                                    Priyadarshini V
                                    <span className="text-gradient font-inter tracking-normal normal-case block hero-title">{typedTitle}<span className="animate-pulse text-cyan-400">|</span></span>
                                </motion.h1>

                                <motion.p variants={fadeInUp} className="body-text text-muted-foreground max-w-xl mt-2 md:mt-4 font-normal">
                                    Specializing in deep learning, machine learning, and the development of scalable AI solutions for solving complex industrial and real-world challenges.
                                </motion.p>

                                <motion.div variants={fadeInUp} className="flex flex-wrap justify-start gap-2 md:gap-4 mt-4 md:mt-10">
                                    <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/20 px-3 sm:px-6 md:px-8 h-9 sm:h-12 md:h-14 text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                        <a href="#projects">
                                            View Projects <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild className="border-white/20 hover:bg-white/5 text-white h-9 sm:h-12 md:h-14 px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                            Download CV <Download className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="lg" asChild className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 h-9 sm:h-12 md:h-14 px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base font-medium rounded-lg md:rounded-xl transition-all hover:scale-105 active:scale-95 duration-300">
                                        <a href="#contact">
                                            Contact Me <Mail className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Profile image — right side, smaller on mobile */}
                            <motion.div variants={fadeInUp} className="relative flex justify-center items-center w-[148px] sm:w-[200px] md:w-[280px] lg:w-[340px] shrink-0">
                                <div className="relative w-full aspect-[4/5] rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] glass group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent z-10 pointer-events-none opacity-40" />
                                    <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                                    <video
                                        src="/Profile.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 relative z-0"
                                    />
                                    <div className="absolute inset-0 border border-white/10 rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] pointer-events-none z-20" />
                                    <div className="absolute inset-0 rounded-[1.25rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-[inset_0_0_30px_rgba(6,182,212,0.2)] pointer-events-none z-10" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>



                    {/* Executive Summary */}
                    <section id="about" className="min-h-[50vh] flex items-center overflow-hidden py-24">
                        <motion.div
                            className="max-w-4xl mx-auto px-6 w-full text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-200px" }}
                            variants={fadeInUp}
                        >
                            <motion.div className="flex justify-center mb-6">
                                <span className="caption-text font-medium uppercase tracking-[0.2em] text-cyan-400 glass px-4 py-2 rounded-full border border-cyan-500/20">
                                    About Me
                                </span>
                            </motion.div>
                            <h2 className="section-heading font-bold text-white mb-4 md:mb-8 text-center">
                                Research-Driven AI Solutions
                            </h2>
                            <div className="body-text text-muted-foreground max-w-3xl mx-auto text-center">
                                <p>
                                    I am an aspiring Artificial Intelligence and Machine Learning engineer passionate about developing intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, predictive analytics, and full-stack development. I transform data into actionable insights and build scalable solutions that deliver measurable impact.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Patents & Publications */}
                    <section id="publications" className="min-h-[80vh] flex items-center py-20 bg-[#0B0E14]/50 overflow-hidden">
                        <motion.div
                            className="max-w-7xl mx-auto px-6 w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-200px" }}
                            variants={slideInRight}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white">Patents & Publications</h2>
                                <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                            </div>
                            <p className="text-muted-foreground text-lg mb-10 max-w-3xl">
                                My patents and research focus on applying artificial intelligence to solve complex edge-computing, healthcare, and predictive maintenance challenges.
                            </p>

                            <PublicationsScrollContainer
                                publications={[
                                    {
                                        id: "patent-edge-anomaly",
                                        title: "Low-Power Real-Time Video Anomaly Detection on Edge",
                                        badge: "INDIAN PATENT APPLICATION",
                                        desc: "Filed as Co-Inventor with MSRIT (App No. 202641084253 · Filed 09 Jul 2026). Patent application for a low-power real-time video anomaly detection architecture operating on edge devices to deliver high throughput with minimal power consumption.",
                                        video: "/9.mp4",
                                        href: "mailto:priya6780@gmail.com?subject=Inquiry: Low-Power Real-Time Video Anomaly Detection on Edge",
                                    },
                                    {
                                        id: "icefeet-pulmonary-hypertension",
                                        title: "Hybrid Intelligence Learning Architecture for Pulmonary Hypertension Diagnosis",
                                        badge: "ICEFEET 2026 — Under Review",
                                        desc: "Non-invasive, multi-model deep learning solution combining DenseNet and Grad-CAM++ for early diagnosis and classification of pulmonary hypertension from CT images.",
                                        video: "/4.mp4",
                                        href: "mailto:priya6780@gmail.com?subject=Inquiry: Hybrid Intelligence Learning Architecture",
                                    },
                                    {
                                        id: "icaihc-aircraft-engine-faults",
                                        title: "Scalable Fault Detection in Aircraft Engines via Sequence Modeling & Attention Autoencoding",
                                        badge: "ICAIHC 2026 — Under Review",
                                        desc: "Learned Fusion Autoencoder Ensemble and Interpretability Transformer for turbofan engine anomaly detection and RUL prediction benchmarked on NASA CMAPSS dataset.",
                                        video: "/5.mp4",
                                        href: "mailto:priya6780@gmail.com?subject=Inquiry: Scalable Fault Detection in Aircraft Engines",
                                    },
                                ]}
                            />
                        </motion.div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="min-h-[70vh] flex items-center py-20 bg-[#0B0E14] overflow-hidden">
                        <motion.div
                            className="max-w-7xl mx-auto px-6 w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-200px" }}
                            variants={slideInLeft}
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
                                <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                            </div>

                            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                                {/* Vertical glowing line divider */}
                                <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-teal-300 to-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-10" />

                                {/* Card 1: BHEL */}
                                <motion.div 
                                    variants={slideUp} 
                                    whileHover={{ y: -6 }}
                                    className="h-full"
                                >
                                    <div className="bg-[#12161F] border-2 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.25)] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
                                        
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                            Internship Trainee
                                        </h3>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                                <Briefcase className="w-5 h-5 text-cyan-400" />
                                            </div>
                                            <span className="text-lg font-semibold text-slate-200">
                                                BHEL, Bengaluru
                                            </span>
                                        </div>

                                        <div className="text-cyan-400/90 text-sm font-medium mb-6 flex items-center gap-2">
                                            <span>July 2026 – Aug 2026</span>
                                        </div>

                                        <ul className="list-disc list-outside space-y-3 text-slate-300 text-sm md:text-base leading-relaxed pl-5 mt-2 flex-grow">
                                            <li>
                                                Developed an LLM-powered Retrieval-Augmented Generation (RAG) chatbot for intelligent question answering over business documents.
                                            </li>
                                            <li>
                                                Participated in an industrial visit to BHEL, gaining practical exposure to large-scale manufacturing processes, industrial automation, engineering systems, production workflows, and plant operations.
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Card 2: Razz Security */}
                                <motion.div 
                                    variants={slideUp} 
                                    whileHover={{ y: -6 }}
                                    className="h-full"
                                >
                                    <div className="bg-[#12161F] border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
                                        
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                            Internship Trainee
                                        </h3>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                                <Briefcase className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <span className="text-lg font-semibold text-slate-200">
                                                Razz Security, Bengaluru
                                            </span>
                                        </div>

                                        <div className="text-cyan-400/90 text-sm font-medium mb-6 flex items-center gap-2">
                                            <span>Jan 2024 – Apr 2024</span>
                                        </div>

                                        <ul className="list-disc list-outside space-y-3 text-slate-300 text-sm md:text-base leading-relaxed pl-5 mt-2 flex-grow">
                                            <li>
                                                Performed VAPT using Burp Suite, Nmap, and Metasploit, identifying OWASP Top 10 vulnerabilities including SQL Injection, XSS, and CSRF.
                                            </li>
                                            <li>
                                                Conducted security log analysis, supported incident response, and applied foundational malware analysis techniques for threat identification.
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="py-24 overflow-hidden relative">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="flex items-center gap-4 mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
                                <div className="flex-grow h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent ml-4" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                                {[
                                    {
                                        id: "tourist-recommender",
                                        title: "Tourist Recommendation System",
                                        desc: "Developed a real-time recommendation system achieving 94% accuracy in user-preference matching using custom decision tree heuristics.",
                                        video: "/1.mp4",
                                        tags: ["Flask", "JavaScript", "Decision Tree", "OpenStreetMap API"],
                                        github: "https://github.com/Priya67803/tourist_recommender.git",
                                        demo: "https://tourist-recommender.onrender.com",
                                    },
                                    {
                                        id: "nlp-bias",
                                        title: "NLP Language & Bias Detection",
                                        desc: "Built a high-performance NLP dashboard that reduced latency by 20% while detecting nuanced linguistic biases in real-time.",
                                        video: "/2.mp4",
                                        tags: ["FastText", "VADER", "TextStat", "NLP"],
                                        github: "https://github.com/Priya67803/NLP_.git",
                                        demo: "#",
                                    },
                                    {
                                        id: "graph-rag",
                                        title: "Multi-Modal Graph RAG for Driver Safety",
                                        desc: "Architected a multi-modal Graph RAG system integrating telemetry and spatial analysis to enable context-aware driver safety monitoring and risk prediction.",
                                        video: "/3.mp4",
                                        tags: ["Graph RAG", "Multi-Modal", "AI", "Safety"],
                                        github: "https://github.com/Priya67803/RAG.git",
                                        demo: "https://rag-six-rho.vercel.app",
                                    },
                                    {
                                        id: "smart-interview-agent",
                                        title: "Smart Interview Preparation Agent",
                                        desc: "Developed an LLM-powered agent for dynamic question generation, interview evaluation, and performance tracking using Python, OpenAI API, Activepieces, prompt engineering, and REST APIs.",
                                        video: "/10.mp4",
                                        tags: ["Python", "OpenAI API", "Activepieces", "Prompt Engineering", "REST APIs"],
                                        github: "https://github.com/Priya67803/smart-interview-agent",
                                        demo: "https://interview-agent.vercel.app",
                                    },
                                ].map((project, i) => {
                                    return (
                                        <motion.div
                                            key={project.id}
                                            className="relative group min-h-[520px] flex flex-col"
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ amount: 0.3, once: true }}
                                            variants={{
                                                offscreen: {
                                                    y: 200,
                                                    opacity: 0,
                                                },
                                                onscreen: {
                                                    y: 0,
                                                    rotate: i % 2 === 0 ? -3 : 3,
                                                    opacity: 1,
                                                    transition: {
                                                        type: "spring",
                                                        bounce: 0.4,
                                                        duration: 0.8,
                                                    },
                                                },
                                            }}
                                            whileHover={{
                                                rotate: 0,
                                                scale: 1.02,
                                                y: -8,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {/* Main Clean Card without background color glows */}
                                            <Card className="bg-[#12161F] border-white/10 overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 h-full flex flex-col rounded-3xl min-h-[520px]">
                                                {/* Video Header */}
                                                <div className="relative h-64 shrink-0 overflow-hidden bg-black/40">
                                                    <video
                                                        src={project.video}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        className="w-full h-full object-cover border-b border-white/10 group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>

                                                <CardHeader className="flex-grow pt-6 px-8">
                                                    <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                                                        {project.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-slate-300 mt-4 text-base leading-relaxed">
                                                        {project.desc}
                                                    </CardDescription>
                                                </CardHeader>

                                                <CardContent className="pb-8 px-8 mt-auto flex flex-col gap-6">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.map((tag) => (
                                                            <Badge
                                                                key={tag}
                                                                variant="outline"
                                                                className="border-white/10 bg-white/5 text-slate-300 px-3 py-1 text-xs font-medium"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            asChild
                                                            className="flex-1 border-white/10 hover:bg-white/10 text-white gap-2"
                                                        >
                                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                                <Github className="w-4 h-4" /> GitHub
                                                            </a>
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            asChild
                                                            className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white gap-2 font-medium"
                                                        >
                                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="w-4 h-4" /> Demo
                                                            </a>
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Experience and Skills (Technical Arsenal) */}
                    <section id="skills" className="py-20 bg-[#0B0E14]/50">
                        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                            {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInLeft}
                                className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/10 order-1 lg:order-2"
                            >
                                <video src="/8.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="flex flex-col items-center lg:items-start order-2 lg:order-1"
                            >
                                <motion.div variants={slideInRight} className="mb-10 text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
                                    <p className="text-muted-foreground text-base max-w-lg">A comprehensive toolkit spanning machine learning, deep learning, data engineering, cloud platforms, and modern software development.</p>
                                </motion.div>

                                <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                                    {coreSkills.map((skill) => (
                                        <motion.div key={skill.name} variants={fadeInUp}>
                                            <div className="glass p-3 md:p-5 rounded-2xl flex items-center gap-2 md:gap-4 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group">
                                                <div className="p-2 md:p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] skill-icon-glow shrink-0">
                                                    <skill.icon className="w-4 h-4 md:w-5 md:h-5" />
                                                </div>
                                                <span className="text-[11px] xs:text-xs md:text-base font-medium text-slate-100 truncate">{skill.name}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Education & Certifications */}
                    <section id="education" className="py-20">
                        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                            {/* Video First on Mobile (order-1) */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInLeft}
                                className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] border border-white/10 order-1"
                            >
                                <video src="/7.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                <div className="absolute inset-0 border-[1px] border-white/10 rounded-3xl pointer-events-none" />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="flex flex-col items-center lg:items-start order-2"
                            >
                                <motion.div variants={slideInRight} className="mb-10 text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education and Credentials</h2>
                                    <p className="text-muted-foreground text-base">Academic background and continuous learning certifications.</p>
                                </motion.div>

                                <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-6 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">B.E. Computer Science (AI and ML)</h3>
                                    <p className="text-cyan-400 font-medium mb-2">M. S. Ramaiah Institute of Technology</p>
                                    <p className="text-slate-500 text-sm">7th Semester (2024–2027)</p>
                                </motion.div>

                                <motion.div variants={slideInRight} className="bg-[#12161F]/50 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">Diploma in Computer Science</h3>
                                    <p className="text-muted-foreground font-medium mb-2">MEI Polytechnic, Bengaluru</p>
                                    <p className="text-slate-500 text-sm">2021–2024</p>
                                </motion.div>

                                <motion.div variants={slideInRight}>
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Award className="w-6 h-6 text-blue-500" /> Top Certifications
                                    </h3>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            { name: "Internship Certification — Razz Security", link: "/internship%20certificate.pdf" },
                                            { name: "AWS Academy — ML Foundations", link: "/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_Badge_Badge20251110-30-ja54zf.pdf" },
                                            { name: "Generative AI Leader — Google Cloud", link: "/Gen ai.pdf" },
                                            { name: "Deep Learning — Google Cloud", link: "/deep learning.pdf" },
                                            { name: "Ethical Hacking — Udemy", link: "/Ethical hacking.pdf" },
                                            { name: "Machine Learning — Infosys", link: "/ML certificate.pdf" },
                                            { name: "Snowflake — Data Warehousing", link: "/snowflake.pdf" }
                                        ].map((cert, i) => (
                                            <li key={i}>
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block bg-white/5 border border-white/5 p-4 rounded-xl text-slate-200 text-base font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
                                                >
                                                    <span>{cert.name}</span>
                                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Professional (Soft) Skills */}
                    <section className="py-20 snap-section">
                        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                            {/* Video First on Mobile (order-1), Second on Desktop (lg:order-2) */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={slideInLeft}
                                className="relative w-full max-w-[380px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)] border border-white/10 order-1 lg:order-2"
                            >
                                <video src="/11.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover max-h-[300px] md:max-h-full" />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="flex flex-col items-center lg:items-start order-2 lg:order-1"
                            >
                                <motion.div variants={slideInRight} className="mb-10 text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Skills</h2>
                                    <p className="text-muted-foreground text-base">Beyond code, I bring strong interpersonal and strategic skills to every team I join.</p>
                                </motion.div>
                                <div className="space-y-6">
                                    {[
                                        { title: "Analytical Problem Solving", desc: "Breaking down complex ML problems into actionable components.", icon: BrainCircuit },
                                        { title: "Effective Communication", desc: "Articulating technical constraints to non-technical stakeholders.", icon: MessageSquare },
                                        { title: "Agile Adaptability", desc: "Thriving in fast-paced, iterative development environments.", icon: Zap },
                                        { title: "Collaborative Leadership", desc: "Guiding peers and collaborating on best practices.", icon: Users }
                                    ].map((skill, i) => {
                                        const Icon = skill.icon;
                                        return (
                                            <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors flex gap-4">
                                                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                                    <Icon className="w-6 h-6 text-cyan-500" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-cyan-500 mb-2">{skill.title}</h3>
                                                    <p className="text-slate-300">{skill.desc}</p>
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Contact and Networking */}
                    <section id="contact" className="py-20">
                        <div className="max-w-5xl mx-auto px-6">
                            <motion.div
                                className="glass rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="flex flex-col items-start text-left">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
                                        <p className="text-muted-foreground mb-8 max-w-sm">I'm always open to discussing AI, Machine Learning, research collaborations, and exciting career opportunities.</p>

                                        <div className="relative w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden border border-white/5 mb-8">
                                            <video src="/13.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                        </div>

                                        <div className="flex flex-col items-start gap-4 mb-8">
                                            <div className="flex items-center gap-4 text-slate-300">
                                                <div className="p-2 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <span className="font-medium">priya6780@gmail.com</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <a href="https://linkedin.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                                <a href="https://github.com/Priya67803" className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-white hover:text-black transition-all">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
                                        {submitStatus === 'success' && (
                                            <div className="absolute -top-12 left-0 w-full bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-center text-sm font-medium">
                                                Message sent successfully! I'll get back to you soon.
                                            </div>
                                        )}
                                        {submitStatus === 'error' && (
                                            <div className="absolute -top-12 left-0 w-full bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-center text-sm font-medium">
                                                Something went wrong. Please try again.
                                            </div>
                                        )}
                                        <form className="space-y-4" onSubmit={handleContactSubmit}>
                                            <div>
                                                <label className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-2 block ml-1">Name</label>
                                                <input type="text" name="name" required placeholder="Enter your name" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                                            </div>
                                            <div>
                                                <label className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-2 block ml-1">Email</label>
                                                <input type="email" name="email" required placeholder="Enter your mail" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors" />
                                            </div>
                                            <div>
                                                <label className="text-xs font-normal text-slate-500 uppercase tracking-widest mb-2 block ml-1">Message</label>
                                                <textarea name="message" required placeholder="How can we collaborate?" rows={3} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
                                            </div>
                                            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 font-medium h-12 rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
                                                {isSubmitting ? "Sending..." : "Send Neural Message"} {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* Integrated Footer - Moved Outside Sections */}
                <footer className="mt-auto pt-20 pb-10 border-t border-white/5 bg-black/40 backdrop-blur-xl w-full relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                            <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="mb-4">
                                    <img src="/logo.png" alt="Priya Logo" className="h-10 w-auto object-contain" />
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                                    Architecting the next generation of intelligent systems through research-driven AI and scalable deep learning architectures.
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Navigation</h4>
                                <ul className="space-y-4 text-slate-400 text-sm">
                                    <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                                    <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                                    <li><a href="#publications" className="hover:text-cyan-400 transition-colors">Publications</a></li>
                                    <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                                    <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                                </ul>
                            </div>

                            {/* Socials/Connect */}
                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Connect</h4>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Priya67803" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/priya-v-77b396273/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="mailto:priya6780@gmail.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Resume CTA */}
                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">Credentials</h4>
                                <Button variant="outline" asChild className="border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-medium px-6 h-12 rounded-xl transition-all">
                                    <a href="/resume.pdf">Download Full CV <Download className="ml-2 w-4 h-4" /></a>
                                </Button>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-muted-foreground/60 text-xs font-normal uppercase tracking-widest">
                                Designed and developed with passion for Artificial Intelligence and Innovation.
                            </p>
                            <p className="text-muted-foreground/80 text-xs font-normal">
                                © 2026 Priyadarshini V. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
