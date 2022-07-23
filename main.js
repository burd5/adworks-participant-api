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
            document.querySelector('#supportiveServices').innerHTML = `Supportive Services: ${JSON.stringify(data.supportiveServices)}`
            let paragraphs = document.querySelectorAll('p')
            for(paragraph of paragraphs){
                paragraph.style.display = 'inline-block'
            }
})};