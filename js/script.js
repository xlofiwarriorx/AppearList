'use strict'

const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click', openContent)

function openContent  (e) {
	const target = e.target
	const list = target.closest('.list')
	const content = list.querySelector('.list__content')
	if (
		!target.classList.contains('open')
	) {
		content.classList.toggle('open')
		const string = list.querySelector('.list__string')
		if (content.classList.contains('open')) {
			string.innerHTML = '^'
		}
		else {
			string.innerHTML = '˅'
		}
	}
}



