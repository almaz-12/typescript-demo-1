const skills: string[] = ['html', 'css', 'js', 'vue'];

for (const skill of skills) {
  console.log(skill)
}


skills.filter(s => s !== 'css')