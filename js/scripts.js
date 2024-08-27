const skillsElement = document.getElementById("skills");
const showSkillBtn = document.getElementById("show-skill-btn");

showSkillBtn.addEventListener("click", function() {
  if (skillsElement.classList.contains("skills-hidden")) {
    skillsElement.classList.replace("skills-hidden", "skills-visible");
    this.textContent = "Hide Skill";
  } else {
    skillsElement.classList.replace("skills-visible", "skills-hidden");
    this.textContent = "Show Skill";
  }
});

function openOverlay(projectId) {
  document.getElementById(projectId).style.display = "flex";
}

function closeOverlay(projectId) {
  document.getElementById(projectId).style.display = "none";
}
