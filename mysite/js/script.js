let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000, // Time in milliseconds (5 seconds in this case)
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
  food.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    previewBox.forEach( preveiw =>{
      let target = preveiw.getAttribute('data-target');
        if(name == target) {
          preveiw.classList.add('active');
        }
    })
  }
});

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none';
  previewBox.forEach( close => {
    close.classList.remove('active');    
  })
}

var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoHeight:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".sales-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoHeight:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 15000, // Time in milliseconds (5 seconds in this case)
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  on: {
    slideChange: function () {
        resetDescriptions();
    }
  }
});


function toggleDescription(button) {
  const content = button.parentNode.querySelector('.description');
  const fullDescription = content.getAttribute('data-full-description');
  const buyButton = button.parentNode.querySelector('.buy-now');
  
  if (content) {
      if (content.classList.contains('truncated')) {
          content.textContent = fullDescription;
          content.classList.remove('truncated');
          button.textContent = 'Read less';
          buyButton.style.display = 'block';
      } else {
          const truncatedDescription = truncateText(fullDescription, 120);
          content.textContent = truncatedDescription;
          content.classList.add('truncated');
          button.textContent = 'Read more';
          buyButton.style.display = 'none';
      }
  }
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
  } else {
      return text;
  }
}

function resetDescriptions() {
  const descriptions = document.querySelectorAll('.description');
  const buyButton = document.querySelector('.buy-now');

  
  descriptions.forEach(description => {
      const fullDescription = description.getAttribute('data-full-description');
      const truncatedDescription = truncateText(fullDescription, 120);
      description.textContent = truncatedDescription;
      description.classList.add('truncated');
      buyButton.style.display = 'none';
  });

  // const buttons = document.querySelectorAll('.btn');
  // buttons.forEach(button => {
  //     button.textContent = 'Read more';
  // });
}

