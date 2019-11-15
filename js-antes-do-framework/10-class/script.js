class SmoothScroll {
  // aqui contém as principais proproedades da Classe e também o código que é executado logo quando essa classe começa
  constructor(links) {
    this.linkElements = document.querySelectorAll(links)
    this.addClickEvent()
  }

  handleClick(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: 'smooth'
    })
  }

  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener('click', this.handleClick)
    })
  }
}

class ActiveSmoothScroll extends SmoothScroll {
  constructor(links, sections) {
    // o super executa o construtor da classe pai
    super(links)

    this.sectionElements = document.querySelectorAll(sections)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleScroll()
    this.activeNavScroll()
  }

  handleScroll() {
    this.sectionElements.forEach((section, i) => {
      if(window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
        this.linkElements[i].classList.add('active')
      } else {
        this.linkElements[i].classList.remove('active')
      }
    })
  }

  activeNavScroll() {
    window.addEventListener('scroll', this.handleScroll)
  }
}

const scroll = new ActiveSmoothScroll("a[href^='#']", "section")

scroll.addClickEvent()

// console.log(scroll) // objeto