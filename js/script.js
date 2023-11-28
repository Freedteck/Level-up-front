const noti = document.querySelector('.notification')
const about = document.querySelector('.about')
const aboutExpand = document.querySelector('.about-expand')
const arrow = document.querySelector('.arrow svg')
const items = document.querySelector('.items')
const notiExpand = document.querySelector('.noti-expand')
const radio = document.querySelectorAll('.radio')
const progress = document.querySelector('.progress p')
const innerBar = document.querySelector('.inner-bar')
const cards = document.querySelectorAll('.card')
const visible = document.querySelectorAll('.visible')
const pVisible = document.querySelectorAll('p.visible')
const btnMore = document.querySelectorAll('.btn-more')
const image = document.querySelectorAll('.image')
const cancelBtn = document.querySelector('.cancel')
const info = document.querySelector('.info')
const menuItem = document.querySelectorAll(`[role="menuitem"]`)
const tabIndex = document.querySelectorAll(`[tabindex="0"]`)
const names = document.querySelector('.name')
const short = document.querySelector('.short')
const allMenuItem = document.querySelectorAll('.about-expand *')


allMenuItem.forEach(item => {
  item.style.display = 'none'
})
function openMenu() {
  aboutExpand.classList.toggle('show')
  about.ariaExpanded = 'true'
  allMenuItem.forEach(item => {
    item.style.display = 'flex'
  })
}

function closeMenu() {
  about.ariaExpanded = 'false'
  aboutExpand.classList.remove('show')
  allMenuItem.forEach(item => {
    item.style.display = 'none'
  })
}

function toggleMenu() {
  const expanded = about.ariaExpanded === 'true'
  if (expanded) {
    closeMenu()
  } else {
    openMenu()
  }
}


cancelBtn.addEventListener('click', () => {
  info.style.display = 'none'
})
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('active')
    })
    visible.forEach(item => {
      item.classList.add('hide')
    })

    card.classList.add('active')
    pVisible[index].classList.remove('hide')
    btnMore[index].classList.remove('hide')
    image[index].classList.remove('hide')
  })
})

let menuIndex = -1
about.addEventListener('click', (e) => {
  console.log(e.target.classList);
  toggleMenu()
  about.blur()
})

about.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    toggleMenu()
    menuItem.item(0).focus()
    menuIndex = 0
  }
})

let winIndex = -1

// Select elements with tabIndex="0" and style.display not equal to "none"
const elementsWithTabIndex = document.querySelectorAll('[tabindex="0"]:not([style*="display: none"])');

// Now, elementsWithTabIndex is a NodeList containing the desired elements

function keys() {
  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' && about.ariaExpanded === 'true') {
      if (menuIndex === menuItem.length - 1) {
        menuIndex = -1
      }
      menuIndex++
      menuItem[menuIndex].focus()
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight' && about.ariaExpanded === 'false') {
      winIndex++

      elementsWithTabIndex[winIndex].focus()

    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' && about.ariaExpanded === 'true') {
      if (menuIndex === 0) {
        menuIndex = menuItem.length
      }
      menuIndex--
      console.log(menuIndex);
      menuItem[menuIndex].focus()
      // menuIndex--
    }
    if (e.key === 'Escape' && about.ariaExpanded === 'true') {
      closeMenu()
    }
  })
}
keys()


arrow.classList.add('up')
arrow.addEventListener('click', () => {
  arrow.classList.toggle('up')
  if (arrow.classList.contains('up')) {
    items.style.display = 'none'
    arrow.innerHTML = `<path 
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
                    fill="#000"
                    />`
  } else {
    items.style.display = 'flex'
    arrow.innerHTML = `<path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z"
                    fill="#000"
                  />`
  }

})

noti.addEventListener('click', () => {
  notiExpand.classList.toggle('show')
  noti.blur()
})

let index = 0
let progressText = `${index} / 5 completed`
let prog = 0
progress.textContent = progressText
radio.forEach(radios => {
  radios.classList.add('mark')
  radios.addEventListener('click', () => {
    radios.classList.toggle('mark')
    if (radios.classList.contains('mark')) {
      if (index !== 0) {
        index--
        progressText = `${index} / 5 completed`
        progress.textContent = progressText
      }
      prog -= 20
      innerBar.style.width = `${prog}%`

      radios.innerHTML = `                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#8a8a8a"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 6"
                  />
                </svg>`
    } else {
      index++
      progressText = `${index} / 5 completed`
      progress.textContent = progressText
      prog += 20
      innerBar.style.width = `${prog}%`
      radios.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`
    }
  })
})

document.addEventListener('click', (e) => {
  if (e.target !== about && about.ariaExpanded === 'true') {
    aboutExpand.classList.remove('show')
    menuIndex = -1
  }
  if (e.target !== noti && !noti.contains(e.target)) {
    notiExpand.classList.remove('show')
  }
})