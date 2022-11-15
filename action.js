const card=document.querySelector('.card')
const menuIcon=document.querySelector('.menu-icon')
const dashboard=document.querySelector('.menu')

menuIcon.addEventListener('click',openDashboard)
function openDashboard(){
	card.classList.toggle('moveCard');
	dashboard.classList.toggle('moveDashboard')
}

	
	const searchIcon=document.querySelector('.search-icon')
	const searchBox=document.querySelector('.search-input')


	searchIcon.addEventListener('click',openInput)
	function openInput(){
		searchBox.classList.toggle('showSearch');
		searchBox.previousElementSibling.classList.toggle('hideElement');
		searchBox.previousElementSibling.previousElementSibling.classList.toggle('hideElement')
		
	}