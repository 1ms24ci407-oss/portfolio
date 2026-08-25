import re
import os

files_to_process = ['app/page.tsx', 'components/AntiGravitySkill.tsx']

for file_path in files_to_process:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Backgrounds
    content = content.replace('bg-[#0d0514]', 'bg-[#050505]')
    content = content.replace('bg-[#150824]', 'bg-[#0a0a0a]')
    content = content.replace('bg-[#1d0d2b]', 'bg-[#111]')
    
    # Hero buttons
    content = content.replace('bg-[#e0a96d] hover:bg-[#f3c6a5] text-black text-white', 'bg-cyan-600 hover:bg-cyan-500 text-white')
    content = content.replace('bg-[#e0a96d] hover:bg-[#f3c6a5] text-black', 'bg-cyan-600 hover:bg-cyan-500')
    content = content.replace('bg-[#1d0d2b] text-white', 'bg-[#111] text-white')
    content = content.replace('bg-[#1d0d2b] text-[#cb6d51] border-[#cb6d51]/50 hover:bg-[#cb6d51]/10', 'bg-[#111] text-white')

    # Cyan / Rose Gold
    content = content.replace('text-[#e0a96d]', 'text-cyan-500')
    content = content.replace('text-[#f3c6a5]', 'text-cyan-400')
    content = content.replace('bg-[#e0a96d]/10', 'bg-cyan-500/10')
    content = content.replace('bg-[#e0a96d]/20', 'bg-cyan-500/20')
    content = content.replace('bg-[#e0a96d]', 'bg-cyan-500')
    content = content.replace('border-[#e0a96d]/50', 'border-cyan-500/50')
    content = content.replace('border-[#e0a96d]/20', 'border-cyan-500/20')
    content = content.replace('border-[#e0a96d]/30', 'border-cyan-500/30')
    content = content.replace('border-[#e0a96d]', 'border-cyan-500')

    # Blue / Copper
    content = content.replace('text-[#cb6d51]', 'text-blue-500')
    content = content.replace('text-[#e58a6d]', 'text-blue-400')
    content = content.replace('bg-[#cb6d51]/10', 'bg-blue-500/10')
    content = content.replace('bg-[#cb6d51]', 'bg-blue-500')
    content = content.replace('border-[#cb6d51]/50', 'border-blue-500/50')
    content = content.replace('border-[#cb6d51]/20', 'border-blue-500/20')
    content = content.replace('border-[#cb6d51]/30', 'border-blue-500/30')
    content = content.replace('border-[#cb6d51]', 'border-blue-500')

    # Purple / Soft Rose
    content = content.replace('text-[#cfa075]', 'text-purple-500')
    content = content.replace('text-[#e8bc96]', 'text-purple-400')
    content = content.replace('text-[#b87333]', 'text-purple-500')
    content = content.replace('bg-[#cfa075]/10', 'bg-purple-500/10')
    content = content.replace('bg-[#b87333]/10', 'bg-purple-500/10')
    content = content.replace('bg-[#cfa075]', 'bg-purple-500')
    content = content.replace('border-[#cfa075]/50', 'border-purple-500/50')
    content = content.replace('border-[#cfa075]/20', 'border-purple-500/20')
    content = content.replace('border-[#cfa075]/30', 'border-purple-500/30')
    content = content.replace('border-[#cfa075]', 'border-purple-500')

    # Gradients
    content = content.replace('from-[#f3c6a5] via-[#e0a96d] to-[#cb6d51]', 'from-cyan-400 via-blue-500 to-purple-600')
    content = content.replace('from-transparent via-[#e0a96d] to-transparent', 'from-transparent via-cyan-500 to-transparent')
    content = content.replace('from-[#e0a96d]/50 to-transparent', 'from-cyan-500/50 to-transparent')
    content = content.replace('from-[#cb6d51]/50 to-transparent', 'from-blue-500/50 to-transparent')

    # Box shadows (RGBA conversions)
    content = content.replace('rgba(224,169,109,0.3)', 'rgba(8,145,178,0.3)')
    content = content.replace('rgba(224,169,109,0.2)', 'rgba(6,182,212,0.2)')
    content = content.replace('rgba(224,169,109,0.15)', 'rgba(6,182,212,0.15)')
    content = content.replace('rgba(224,169,109,0.1)', 'rgba(6,182,212,0.1)')
    content = content.replace('rgba(224,169,109,0.8)', 'rgba(6,182,212,0.8)')
    content = content.replace('rgba(224,169,109,0.4)', 'rgba(6,182,212,0.4)')

    content = content.replace('rgba(203,109,81,0.15)', 'rgba(59,130,246,0.15)')
    content = content.replace('rgba(203,109,81,0.1)', 'rgba(59,130,246,0.1)')

    content = content.replace('rgba(207,160,117,0.15)', 'rgba(168,85,247,0.15)')
    content = content.replace('rgba(207,160,117,0.1)', 'rgba(168,85,247,0.1)')

    # Background blurs
    content = content.replace('bg-[#4a2636]/20', 'bg-cyan-900/10')
    content = content.replace('bg-[#3b1f14]/20', 'bg-blue-900/10')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {file_path}")
