
const masyvas = []

const input = document.querySelector('input')
const enterButton = document.querySelector('button[data-type="enterButton"]')
const result = document.querySelector('#result')
result.innerHTML = 'Krepšelyje kol kas neturite jokių prekių.'


    const renderTable = (array) => {
            if(masyvas.length > 0) {
                let html = `<table class="table table-borderless d-flex justify-content-end mt-4">`
                array.forEach((value, index) => {
                    html += `<tr>
                                <td data-type="tableData">
                                    <span class="me-3">${value}</span>
                                    <button onclick="removeItem(${index})" type="button" class="btn btn-outline-dark rounded-0">Ištrinti</button>
                                </td>
                            </tr>`
                    })
                
                html += `     </tr>
                        </table>`
                
                result.innerHTML = html        
     
            } else {
                result.innerHTML = 'Krepšelyje kol kas neturite jokių prekių.'
             }
    }

        // ENTER paspaudimo f-ja
        enterButton.addEventListener('click', (event) => {
            event.preventDefault()
                masyvas.push(input.value)
                console.log(masyvas)        
                renderTable(masyvas)    
        })
        
        const removeItem = (index) => {
            document.querySelectorAll('tr td')[index].remove()
            // let i = 0
            //     if(masyvas.indexOf(index) > -1)
            //     masyvas.slice(index, 1)
        }


