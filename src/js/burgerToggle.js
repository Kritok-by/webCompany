export const burgerToggle = (el)=>{
  const currEl = document.querySelector(el)
  currEl.classList.contains('active')?currEl.classList.remove('active'):currEl.classList.add('active')
}