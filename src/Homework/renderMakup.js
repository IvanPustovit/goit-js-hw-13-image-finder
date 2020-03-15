
import apiService from './apiService'
import inputMarkup from './input.hbs'
import cart from './cart.hbs'


class RenderMarkup{
    constructor(){
        this.name = 0
        this.root = document.querySelector('#root')
    }

bildMarkup(){
    this.root.insertAdjacentHTML('beforeend', inputMarkup())
    this.searchForm = document.querySelector('#search-form')
    this.input = document.querySelector('input')
    
};

startFech(e){
    e.preventDefault()
    const gallery = document.querySelector('#gallery')
    const form = e.target.children
    const input = form.query
    this.name  = input.value
    gallery.innerHTML = ''
    apiService.resetPage()
    apiService.searchQuery = this.name

    apiService.fetchItem()
    .then(data=>{
        const markup = cart(data.hits)
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
        gallery.insertAdjacentHTML('beforeend', markup)
    })
    input.value = ''
}

loadMoreBtn(){
    apiService.fetchItem()
    .then(data=>{
        const markup = cart(data.hits)
        const gallery = document.querySelector('#gallery')
        gallery.insertAdjacentHTML('beforeend', markup)
        
    })
}



addLisner(){
this.searchForm.addEventListener('submit', this.startFech)
const btn = document.querySelector('button[data-action="Load more"]')
btn.addEventListener('click', this.loadMoreBtn)

btn.addEventListener('click', () => {

let top = +window.scrollY+800

    setTimeout(()=>{
        window.scrollTo({
            top: top,
            behavior: 'smooth'})
    },1000)
})}

start(){
    this.bildMarkup()
    this.addLisner()
    }
}

const markupFeach = new RenderMarkup()
markupFeach.start()