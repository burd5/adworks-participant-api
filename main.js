document.querySelector('button').addEventListener('click', provideInformation)

function provideInformation(){
    let name = document.querySelector('#name').value;
    fetch(`https://adworks-participant-api.herokuapp.com/api/${name}`)
    .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('#name').innerHTML = JSON.stringify(data.name)
            document.querySelector('#age').innerHTML = JSON.stringify(data.age)
            document.querySelector('#programs').innerHTML = JSON.stringify(data.programs)
            document.querySelector('#supportiveServices').innerHTML = JSON.stringify(data.supportiveServices)
})};