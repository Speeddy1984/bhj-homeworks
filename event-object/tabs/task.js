const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

function activeTab(event) {
    const arrayTab = Array.from(tab);
    let indexOfTab = arrayTab.indexOf(this);
    
    tab.forEach((item) => {
        item.classList.remove('tab_active');
    })
    this.classList.add('tab_active');

    tabContent.forEach((item) => {
        item.classList.remove('tab__content_active');
    })
    tabContent[indexOfTab].classList.add('tab__content_active');
}

tab.forEach((item) => {
    item.addEventListener('click', activeTab);
})

