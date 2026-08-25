with open('app/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Build replacement blocks
def cyan_buttons(email_subject):
    return [
        '                                        <div className="flex flex-wrap gap-3">\n',
        f'                                            <Button variant="outline" asChild className="w-fit border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400 font-bold gap-2"><a href="mailto:priya6780@gmail.com?subject={email_subject}">Request Abstract <Mail className="w-4 h-4" /></a></Button>\n',
        '                                            <Button variant="outline" asChild className="w-fit border-white/10 hover:bg-white/5 text-slate-300 font-bold gap-2"><a href="#" target="_blank" rel="noopener noreferrer"><FileText className="w-4 h-4" /> View Paper</a></Button>\n',
        '                                        </div>\n',
    ]

def blue_buttons(email_subject):
    return [
        '                                        <div className="flex flex-wrap gap-3">\n',
        f'                                            <Button variant="outline" asChild className="w-fit border-blue-500/30 hover:bg-blue-500/10 text-blue-400 font-bold gap-2"><a href="mailto:priya6780@gmail.com?subject={email_subject}">Request Abstract <Mail className="w-4 h-4" /></a></Button>\n',
        '                                            <Button variant="outline" asChild className="w-fit border-white/10 hover:bg-white/5 text-slate-300 font-bold gap-2"><a href="#" target="_blank" rel="noopener noreferrer"><FileText className="w-4 h-4" /> View Paper</a></Button>\n',
        '                                        </div>\n',
    ]

# Map: 1-indexed line of the <Button> opening -> replacement lines + how many lines to consume
# Pub1: lines 291-293 (cyan) -> cyan_buttons
# Pub2: lines 314-316 (blue) -> blue_buttons  
# Pub3: lines 337-339 (cyan) -> cyan_buttons
replacements = {
    290: (cyan_buttons('Abstract Request: Pulmonary Hypertension Paper'), 3),   # 0-indexed line 290 = line 291
    313: (blue_buttons('Abstract Request: Aircraft Engine Paper'), 3),
    336: (cyan_buttons('Abstract Request: YOLOv8 Grooming Paper'), 3),
}

new_lines = []
i = 0
while i < len(lines):
    if i in replacements:
        repl_lines, consume = replacements[i]
        new_lines.extend(repl_lines)
        i += consume
    else:
        new_lines.append(lines[i])
        i += 1

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done, total lines:", len(new_lines))
# Verify
with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()
print("FileText occurrences:", content.count('FileText'))
print("Request Abstract occurrences:", content.count('Request Abstract'))
