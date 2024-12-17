/*Loading================================================================================*/
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});

/*Content_download================================================================================*/
let wrapper = document.querySelector('.wrapper');
window.addEventListener('load', (event) => {
	wrapper.classList.add('loaded');
});

//burger=====================================================================================================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__burger');
const body = document.querySelector('body');

if (iconMenu) {
    iconMenu.addEventListener('click', function clickButtonBurger(event) {
        menuBody.classList.toggle('active');
        iconMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
}

//catalog-filters header=====================================================================================================================================================
const toggleButton = document.getElementById("toggleButton");
const contentBox = document.getElementById("catalog-filters-modal");
const iconDefault = document.querySelector(".icon-default");
const iconActive = document.querySelector(".icon-active");

toggleButton.addEventListener("click", function (e) {
    e.preventDefault();
    
    const isVisible = contentBox.style.display === "block";
    contentBox.style.display = isVisible ? "none" : "block";
    
    if (isVisible) {
        document.body.classList.remove('no-scroll');
        iconDefault.style.display = "block";
        iconActive.style.display = "none";
    } else {
        document.body.classList.add('no-scroll');
        iconDefault.style.display = "none";
        iconActive.style.display = "block";
    }
});


//show more=====================================================================================================================================================
    const filterOptions = document.querySelectorAll(".catalog-filter-option");

    filterOptions.forEach((option) => {
        const variants = option.querySelectorAll(".catalog-filter-option-variant .text-header");
        const showMore = option.querySelector(".show-more");
        const showMoreText = showMore?.querySelector(".text-header");
        const svgIcon = showMore?.querySelector("svg");

        if (!showMore || !showMoreText || !svgIcon) return;

        if (variants.length > 5) {
            for (let i = 5; i < variants.length; i++) {
                variants[i].classList.add("hidden");
            }

            showMore.style.display = "flex";
            let isExpanded = false;

            showMore.addEventListener("click", function () {
                isExpanded = !isExpanded;

                if (isExpanded) {
                    variants.forEach((variant) => variant.classList.remove("hidden"));
                    showMoreText.textContent = "Скрыть";
                    svgIcon.style.transform = "rotate(180deg)";
                } else {
                    for (let i = 5; i < variants.length; i++) {
                        variants[i].classList.add("hidden");
                    }
                    showMoreText.textContent = "Еще";
                    svgIcon.style.transform = "rotate(0deg)";
                }
            });
        }
        else {
            showMore.style.display = "none";
        }
    });

    const modal = document.getElementById('catalog-filters-modal');

    function openModal() {
        modal.style.display = 'block';
        document.body.classList.add('catalog-filters-open');
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('catalog-filters-open');
    }
    