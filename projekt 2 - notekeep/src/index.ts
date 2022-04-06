import express from 'express'
import {Request, Response} from 'express'

const app = express()
var router = express.Router()
const notes: Note[] = []

class Note {
  title: string;
  content:string;
  //createDate?: string
  tags?: string[];
  id?: number;
}

class Tag{
  id?: number;
  name: string;
}

app.use(express.json())

app.get('/', function (req, res) {
  const note = { title: 'book'}
  const jsonNote = JSON.stringify(note)
  res.send(note)
})

app.post('/', function (req: Request, res:Response) {
  const title = req.body.title 
  res.status(200).send('note title: ${title}')
})

app.put('/', function (req: Request, res:Response) {

  //const jsonNote = JSON.stringify(note)
  //res.send(note)
})

app.delete('/', function (req, res) {
  res.send('GET Hello World')
})


app.listen(3000)