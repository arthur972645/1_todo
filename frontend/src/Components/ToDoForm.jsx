import React from "react";
import {Button, Form } from 'react-bootstrap';
import axios from 'axios'

const ToDoForm = () => {



    const [tarefa, setTarefa] = React.useState('')
    const [descricao, setDescricao] = React.useState('')

    const handleSubmit = async () => {

        event.preventDefault()
        try{
            await axios.post("http://localhost:3333/tarefas", {
            tarefa,
            descricao,
        })
        }catch {
            console.log("deu erro!")
        }
        
    }


    return(
        <>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text " placeholder="Digita ai"
            value={tarefa}
            onChange={(event) => setTarefa(event.target.value)}
            
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} 
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
        />
      </Form.Group>
      <Button type="submit">+</Button>
    </Form>
    </>
    )
}

export default ToDoForm