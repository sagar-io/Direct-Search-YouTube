const search = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-button')


function handleSearchSubmit() {
    const searchQuery = search.value;
    if(search.value == '') return 
    const ytPrefix = `https://www.youtube.com/results?search_query=${searchQuery}`
    const link = document.createElement('a')
    link.href = ytPrefix;
    link.click(); 
}

search.addEventListener('keydown', (e) => {
    if(e.key == 'Enter')
      return handleSearchSubmit()
})
searchBtn.addEventListener('click', handleSearchSubmit)