document.querySelector('button').addEventListener('click', provideInformation)

function provideInformation(){
    let name = document.querySelector('#name').value;
    fetch(`https://adworks-participant-api.herokuapp.com/api/${name}`)
    .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('#info').innerHTML = JSON.stringify(data)
})};