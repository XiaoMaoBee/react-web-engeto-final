// import { json } from 'react-router-dom';
import './ApiQR.css';
import { useState, useEffect } from 'react'


const ApiQR = () => {    

    const [userUrl, setUserUrl] = useState('');
    const [inputString, setInputString] = useState('');

    let url  = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://`
    
    const formSubmit = (e) => {
        e.preventDefault()

        if (!inputString) {
            setUserUrl('')
        }
    }
    

    useEffect( () => {
        url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://`        
        
    }, [])

    const resetQR = () => {
        setUserUrl('')
        setInputString('')
    }


    return <section className='api-container'>
        <div>
        <form onSubmit={formSubmit} className='form-box'>
            <input type="text" 
                   placeholder='Enter URL in shape <wanted-url.com>'
                   onChange={ (e) => setInputString(e.target.value)}
                   value={inputString}/>

            <button onClick={ () => setUserUrl(`${url}${inputString}`)}>Generate QR code</button> 
            <button onClick={resetQR}>Reset QR form</button>           

        </form>        
        </div>

        <div className='qr-code'>
            <img src={userUrl} alt="" />
        </div>

    </section>}


export default ApiQR; 