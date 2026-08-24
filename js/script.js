const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target)
            entry.target.classList.add("show")
        } 
        else {
            entry.target.classList.remove("show")
        }
    })
}, {})

const blocTextElements = document.querySelectorAll(".blocText")
const blocTextPortofolioElements = document.querySelectorAll(".blocTextPortofolio")
const blocTextContactElements = document.querySelectorAll(".blocTextContact")
const blocImageElements = document.querySelectorAll(".image")

blocTextElements.forEach(element => observer.observe(element))
blocTextPortofolioElements.forEach(element => observer.observe(element))
blocTextContactElements.forEach(element => observer.observe(element))
blocImageElements.forEach(element => observer.observe(element))