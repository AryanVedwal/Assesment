document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const parentToggle = btn.closest('.toggle');

        // Close all open sections
        document.querySelectorAll('.toggle.open').forEach(section => {
          if (section !== parentToggle) {
            section.classList.remove('open');
            section.querySelector('.btn').textContent = 'Customize'; // Reset text to 'Customize'
          }
        });

        // Toggle the clicked section
        if (parentToggle) {
          parentToggle.classList.toggle('open');
          btn.textContent = parentToggle.classList.contains('open') ? 'Collapse -' : 'Customize +';
        }
      });
    });
  });