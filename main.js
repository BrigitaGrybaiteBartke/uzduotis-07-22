
let masyvas = []

let inputItem = document.querySelector('input[data-type="#inputItem"]')
let buttonEnter = document.querySelector('button[data-type="buttonEnter"]')
let result = document.querySelector('#result')
result.innerHTML = `<p class="text-center mt-4">Krepšelyje kol kas neturite jokių prekių!</p>`

const renderTable = (array) => {
    
    // console.log(array)
    if(masyvas.length > 0) {
        let html = `<table class="table table-borderless d-flex justify-content-end mt-4">
                    <tbody>`
                    
        array.forEach((value, index) => {
            html += `<tr>
                        <td data-type="tableData">
                            <span id="span" class="me-3">${value}</span>
                            <button onclick="removeItem(${index})" type="button" class="btn btn-outline-dark rounded-0">Ištrinti</button>
                        </td>
                    </tr>`
        })
        
        html += `   </tbody>
            </table>`


        result.innerHTML = html

    } else {
        result.innerHTML = `<p class="text-center mt-4">Krepšelyje kol kas neturite jokių prekių!</p>`

        }
}


// ENTER button:
buttonEnter.addEventListener('click', (event) => {
    event.preventDefault()
        if(inputItem.value >= 0 || inputItem === '') {
            result.innerHTML += `<p class="text-center mt-4">Prekė nepasirinkta!</p>`
            result.innerHTML += html
        } else {
            masyvas.push(inputItem.value)
            renderTable(masyvas)
            inputItem.value = ''
   }
})

// DELETE button:
const removeItem = (index) => {
    console.log(index)
    document.querySelectorAll('tr td')[index].remove()
    
    masyvas.splice(index, 1)
    renderTable(masyvas)       
}
