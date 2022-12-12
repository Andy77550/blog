//SERVICES

$(".services-carousel").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const sidebar = document.querySelector('aside');
const showShidebarBtn = document.querySelector('#show__sidebar-btn');
const hideShidebarBtn = document.querySelector('#hide__sidebar-btn');

const showSidebar = () => {
  sidebar.style.left = '0';
  showShidebarBtn.style.display = 'none';
  hideShidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () => {
  sidebar.style.left = '-100%';
  showShidebarBtn.style.display = 'inline-block';
  hideShidebarBtn.style.display = 'none';
}

showShidebarBtn.addEventListener('click', showSidebar);
hideShidebarBtn.addEventListener('click', hideSidebar);