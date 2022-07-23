document.querySelector('button').addEventListener('click', provideInformation)

function provideInformation(){
    let participantName = document.querySelector('#name').value;

    fetch(`https://adworks-participant-api.herokuapp.com/api/${participantName}`)
    .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('#parName').innerHTML = `Name: ${JSON.stringify(data.name)}`
            document.querySelector('#age').innerHTML = `Age: ${JSON.stringify(data.age)}`
            document.querySelector('#programs').innerHTML = `Programs: ${JSON.stringify(data.programs)}`
            document.querySelector('#ged').innerHTML = `GED Services: ${JSON.stringify(data.ged)}`
            document.querySelector('#supportiveServices').innerHTML = `Supportive Services: ${JSON.stringify(data.supportiveServices)}`

            document.querySelector('img').style.display = 'none'

            let paragraphs = document.querySelectorAll('p')
            for(paragraph of paragraphs){
                paragraph.style.display = 'inline-block'
                paragraph.style.fontSize = '20px'
                paragraph.style.color = 'white'
                paragraph.style.background = 'rgb(54, 109, 111)'
            }
})};