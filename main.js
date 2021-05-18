const label = document.querySelectorAll('label');


label.forEach(item => {
    console.log(item)
    item.innerHTML = item.innerText.split('').map((letter, idx) => {
       return`<span style="transition-delay: ${idx*50}ms">${letter}</span>`;
    }).join('');
    
})