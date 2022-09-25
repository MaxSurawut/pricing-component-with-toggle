const checkbox = document.querySelector('#check')
const basicPrice = document.querySelector('.basic-price')
const proPrice = document.querySelector('.pro-price')
const masterPrice = document.querySelector('.master-price')

checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        basicPrice.textContent = "199.99"
        proPrice.textContent = "249.99"
        masterPrice.textContent = "399.99"
    }else{
        basicPrice.textContent = "19.99"
        proPrice.textContent = "24.99"
        masterPrice.textContent = "39.99"
    }
})