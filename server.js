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
    res.json(caseload);
})

app.get('/api/:name', (req, res) => {
    let particName = req.params.name.toLowerCase()
    res.json(caseload[particName])
})


const caseload = {
    'bijou mbenga': {
        'name': 'Bijou Mbenga',
        'age' : 20,
        'programs': 'Young Adult Out, Adult',
        'trainings': 'n/a',
        'ged': 'Self-Study',
        'supportiveServices': 'Bus Pass',
        'status': 'Active',
        'Term Date': 54,
    },
    'allan fuhlhage': {
        'name': 'Allan Fuhlhage',
        'age' : 19,
        'programs': 'Young Adult Out, Adult',
        'trainings': 'n/a',
        'ged': `Thrive Tutoring[March: $2300', 'April: $1200']`,
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