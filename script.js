document.addEventListener('DOMContentLoaded', () => {
    const mainLoad = document.querySelector('.your-project');
    const announLoad = document.querySelector('.announcements')
    const trendingLoad = document.querySelector('.trending')
    setTimeout(() => {
        mainLoad.classList.add('animate')
        announLoad.classList.add('animate')
        trendingLoad.classList.add('animate')
    }, 300)

})