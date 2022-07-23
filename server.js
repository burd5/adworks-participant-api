const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(participants);
})

app.get('/api/:name', (req, res) => {
    let particName = req.params.name.toLowerCase()
    res.json(participants[particName])
})


const participants = {
    'bijou mbenga': {
        'name': 'Bijou Mbenga',
        'age' : 20,
        'programs': 'Young Adult Out, Adult',
        'trainings': 'n/a',
        'ged': 'Self-Study',
        'supportiveServices': 'Bus Pass'
    },
    'allan fuhlhage': {
        'name': 'Allan Fuhlhage',
        'age' : 19,
        'programs': 'Young Adult Out, Adult',
        'trainings': 'n/a',
        'ged': 'Thrive Tutoring',
        'supportiveServices': 'GED Tests'
    },
    'alexander hunter': {
        'name': 'Alexander Hunter',
        'age' : 24,
        'programs': 'Young Adult Out, Adult',
        'trainings': 'n/a',
        'ged': 'Self-study',
        'supportiveServices': 'GED Tests'
    }
}