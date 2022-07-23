const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


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
        'programs': ['Young Adult Out', 'Adult'],
        'trainings': 'n/a',
        'ged': [true, 'self-study'],
        'supportive services': ['bus pass']
    },
    'allan fuhlhage': {
        'name': 'Allan Fuhlhage',
        'age' : 19,
        'programs': ['Young Adult Out', 'Adult'],
        'trainings': 'n/a',
        'ged': [true, 'Thrive Tutoring'],
        'supportive services': ['ged tests']
    },
    'alexander hunter': {
        'name': 'Alexander Hunter',
        'age' : 24,
        'programs': ['Young Adult Out', 'Adult'],
        'trainings': 'n/a',
        'ged': [true],
        'supportive services': ['ged tests']
    }
}