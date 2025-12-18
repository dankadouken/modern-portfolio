// scrollToSection.js - Utility function for smooth scrolling
// Reusable across multiple components

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
