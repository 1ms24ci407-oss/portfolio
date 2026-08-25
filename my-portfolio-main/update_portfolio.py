import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Structural Changes

# Replace "Explore Work" button with "View Projects" and "Download Resume" with "Download CV"
content = re.sub(
    r'<a href="#publications">\s*Explore Work <ArrowRight className="ml-2 h-5 w-5" />\s*</a>',
    '<a href="#projects">\n                                        View Projects <ArrowRight className="ml-2 h-5 w-5" />\n                                    </a>',
    content
)
content = re.sub(
    r'<a href="/resume.pdf">\s*Download Resume <Download className="ml-2 h-5 w-5" />\s*</a>',
    '<a href="/resume.pdf">\n                                        Download CV <Download className="ml-2 h-5 w-5" />\n                                    </a>',
    content
)

# Update Lucide imports
content = re.sub(
    r'import \{ Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Award, CheckCircle2 \} from "lucide-react";',
    'import { Github, Linkedin, Mail, Download, ArrowRight, Briefcase, Award, CheckCircle2, BrainCircuit, MessageSquare, Zap, Users, Send } from "lucide-react";',
    content
)

# Update Professional Skills to use pils-style icons
old_skills = """{[
                                    { title: "Analytical Problem Solving", desc: "Breaking down complex ML problems into actionable components." },
                                    { title: "Effective Communication", desc: "Articulating technical constraints to non-technical stakeholders." },
                                    { title: "Agile Adaptability", desc: "Thriving in fast-paced, iterative development environments." },
                                    { title: "Collaborative Leadership", desc: "Guiding peers and collaborating on best practices." }
                                ].map((skill, i) => (
                                    <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <h3 className="text-xl font-bold text-purple-400 mb-2">{skill.title}</h3>
                                        <p className="text-slate-400">{skill.desc}</p>
                                    </motion.div>
                                ))}"""

new_skills = """{[
                                    { title: "Analytical Problem Solving", desc: "Breaking down complex ML problems into actionable components.", icon: BrainCircuit },
                                    { title: "Effective Communication", desc: "Articulating technical constraints to non-technical stakeholders.", icon: MessageSquare },
                                    { title: "Agile Adaptability", desc: "Thriving in fast-paced, iterative development environments.", icon: Zap },
                                    { title: "Collaborative Leadership", desc: "Guiding peers and collaborating on best practices.", icon: Users }
                                ].map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                    <motion.div key={i} variants={slideInRight} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#cfa075]/30 transition-colors flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#b87333]/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-[#b87333]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#cfa075] mb-2">{skill.title}</h3>
                                            <p className="text-slate-300">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                )})}"""
content = content.replace(old_skills, new_skills)

# Replace Contact section with Let's Connect form
old_contact = """<motion.div variants={slideInRight} className="space-y-6">
                                <a href="mailto:priya6780@gmail.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors group">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Email</h4>
                                        <p className="text-slate-400 text-sm">priya6780@gmail.com</p>
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
                            </motion.div>"""

new_contact = """<motion.div variants={slideInRight} className="space-y-6">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e0a96d] focus:ring-1 focus:ring-[#e0a96d] transition-colors" />
                                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e0a96d] focus:ring-1 focus:ring-[#e0a96d] transition-colors" />
                                    <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e0a96d] focus:ring-1 focus:ring-[#e0a96d] transition-colors resize-none"></textarea>
                                    <Button className="w-full bg-[#e0a96d] hover:bg-[#f3c6a5] text-black font-bold h-14 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(224,169,109,0.4)]">
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </Button>
                                </form>
                            </motion.div>"""
content = content.replace(old_contact, new_contact)

# 2. Color Replacements

# Replace backgrounds
content = content.replace('bg-[#050505]', 'bg-[#0d0514]')
content = content.replace('bg-[#0a0a0a]', 'bg-[#150824]')
content = content.replace('bg-[#111]', 'bg-[#1d0d2b]')

# Button Colors
# "Explore Work" button is Rose Gold
content = content.replace('bg-cyan-600 hover:bg-cyan-500', 'bg-[#e0a96d] hover:bg-[#f3c6a5] text-black')
# "Download Resume" button is Copper
content = content.replace('bg-[#111] text-white', 'bg-[#1d0d2b] text-[#cb6d51] border-[#cb6d51]/50 hover:bg-[#cb6d51]/10')

# Cyan -> Rose Gold (#e0a96d)
content = re.sub(r'text-cyan-500', 'text-[#e0a96d]', content)
content = re.sub(r'text-cyan-400', 'text-[#f3c6a5]', content)
content = re.sub(r'bg-cyan-500/10', 'bg-[#e0a96d]/10', content)
content = re.sub(r'bg-cyan-500/20', 'bg-[#e0a96d]/20', content)
content = re.sub(r'bg-cyan-500', 'bg-[#e0a96d]', content)
content = re.sub(r'border-cyan-500/50', 'border-[#e0a96d]/50', content)
content = re.sub(r'border-cyan-500/20', 'border-[#e0a96d]/20', content)
content = re.sub(r'border-cyan-500/30', 'border-[#e0a96d]/30', content)
content = re.sub(r'border-cyan-500', 'border-[#e0a96d]', content)
content = re.sub(r'hover:text-cyan-400', 'hover:text-[#f3c6a5]', content)
content = re.sub(r'hover:bg-cyan-500', 'hover:bg-[#e0a96d]', content)
content = re.sub(r'hover:border-cyan-500', 'hover:border-[#e0a96d]', content)

# Blue -> Copper (#cb6d51)
content = re.sub(r'text-blue-500', 'text-[#cb6d51]', content)
content = re.sub(r'text-blue-400', 'text-[#e58a6d]', content)
content = re.sub(r'bg-blue-500/10', 'bg-[#cb6d51]/10', content)
content = re.sub(r'bg-blue-500', 'bg-[#cb6d51]', content)
content = re.sub(r'border-blue-500/50', 'border-[#cb6d51]/50', content)
content = re.sub(r'border-blue-500/20', 'border-[#cb6d51]/20', content)
content = re.sub(r'border-blue-500/30', 'border-[#cb6d51]/30', content)
content = re.sub(r'border-blue-500', 'border-[#cb6d51]', content)
content = re.sub(r'hover:text-blue-400', 'hover:text-[#e58a6d]', content)
content = re.sub(r'hover:border-blue-500', 'hover:border-[#cb6d51]', content)

# Purple -> Soft Rose/Light Copper (#b87333 -> let's use #cfa075)
content = re.sub(r'text-purple-500', 'text-[#cfa075]', content)
content = re.sub(r'text-purple-400', 'text-[#e8bc96]', content)
content = re.sub(r'bg-purple-500/10', 'bg-[#cfa075]/10', content)
content = re.sub(r'bg-purple-500', 'bg-[#cfa075]', content)
content = re.sub(r'border-purple-500/50', 'border-[#cfa075]/50', content)
content = re.sub(r'border-purple-500/20', 'border-[#cfa075]/20', content)
content = re.sub(r'border-purple-500/30', 'border-[#cfa075]/30', content)
content = re.sub(r'border-purple-500', 'border-[#cfa075]', content)
content = re.sub(r'hover:text-purple-400', 'hover:text-[#e8bc96]', content)
content = re.sub(r'hover:border-purple-500', 'hover:border-[#cfa075]', content)

# Gradients
content = content.replace('from-cyan-400 via-blue-500 to-purple-600', 'from-[#f3c6a5] via-[#e0a96d] to-[#cb6d51]')
content = content.replace('from-transparent via-cyan-500 to-transparent', 'from-transparent via-[#e0a96d] to-transparent')
content = content.replace('from-cyan-500/50 to-transparent', 'from-[#e0a96d]/50 to-transparent')
content = content.replace('from-blue-500/50 to-transparent', 'from-[#cb6d51]/50 to-transparent')

# Box shadows (RGBA conversions)
content = content.replace('rgba(8,145,178,0.3)', 'rgba(224,169,109,0.3)')
content = content.replace('rgba(6,182,212,0.15)', 'rgba(224,169,109,0.15)')
content = content.replace('rgba(6,182,212,0.1)', 'rgba(224,169,109,0.1)')
content = content.replace('rgba(6,182,212,0.8)', 'rgba(224,169,109,0.8)')

content = content.replace('rgba(59,130,246,0.15)', 'rgba(203,109,81,0.15)')
content = content.replace('rgba(59,130,246,0.1)', 'rgba(203,109,81,0.1)')

content = content.replace('rgba(168,85,247,0.15)', 'rgba(207,160,117,0.15)')
content = content.replace('rgba(168,85,247,0.1)', 'rgba(207,160,117,0.1)')

# Background blurs
content = content.replace('bg-cyan-900/10', 'bg-[#4a2636]/20')
content = content.replace('bg-blue-900/10', 'bg-[#3b1f14]/20')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated page.tsx")
