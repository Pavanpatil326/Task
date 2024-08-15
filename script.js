// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.accordion-container');
  
    faqContainer.addEventListener('click', (e) => {
      const groupHeader = e.target.closest('.accordion-btn');
  
      if (!accordion-btn) return;
  
      const group = accordion-btn.parentElement;
      const groupBody = group.querySelector('.accordion-description');
      const icon = groupHeader.querySelector('i');
  
      // Toggle icon
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
      // Toggle visibility of body
      groupBody.classList.toggle('open');
  
      // Close other open FAQ bodies
      const otherGroups = faqContainer.querySelectorAll('.accordion-item');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.accordion-description');
          const otherIcon = otherGroup.querySelector('.accordion-btn i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });
  