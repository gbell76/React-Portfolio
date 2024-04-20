import {useState} from 'react'

export default function Contact () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const changeName = (event) => {
        setName(event.target.value)
    }

    const checkName = () => {
        if(name === ''){
            if(!error.includes('Name is a required field. ')){
                setError(error => error + 'Name is a required field. ')
            }
        }else{
            setError(error => error.replaceAll('Name is a required field. ', ''))
        }
    }

    const checkEmail = () => {
        if(!email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)){
            if(!error.includes('That is not a valid email. ')){
                setError(error => error + 'That is not a valid email. ')
            }
        }else{
            setError(error => error.replaceAll('That is not a valid email. ', ''))
        }
    }

    const checkMessage = () => {
        if(name === ''){
            if(!error.includes('Message is a required field. ')){
                setError(error => error + 'Message is a required field. ')
            }
        }else{
            setError(error => error.replaceAll('Message is a required field. ', ''))
        }
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changeMessage = (event) => {
        setMessage(event.target.value)
    }

    const clear = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <>
            <h2>Contact</h2>
            <p>Name:</p>
            <input value={name} onChange={changeName} onBlur={checkName}></input>
            <p>Email Adress:</p>
            <input value={email} onChange={changeEmail} onBlur={checkEmail}></input>
            <p>Message:</p>
            <textarea value={message} onChange={changeMessage} onBlur={checkMessage}></textarea>
            <p style={{color: 'red'}}>{error}</p>
            <button onClick={clear}>Submit</button>
        </>
    )
}