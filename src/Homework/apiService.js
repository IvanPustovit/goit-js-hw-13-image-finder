
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ


const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal' 

export default {
    page: 1,
    query: '',
    fetchItem (){
        
            const apiKey = '13722015-1e14ecea112e19cd1d66141e7'
            const searchParametr = `&q=${this.query}&page=${this.page}&per_page=12&key=`;

            return fetch(url + searchParametr+ apiKey).then(res => res.json()).then(data => {
                this.page +=1
                return data
            })
        
    },
    get searchQuery (){
        return this.query
    },

    set searchQuery(string){
        this.query = string
    },

    resetPage(){
        this.page = 1
    }
}