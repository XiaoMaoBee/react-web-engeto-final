import { json } from 'react-router-dom';
import './ApiQR.css';
import { useState } from 'react'

const ApiQR = () => {

    const [userUrl, setUserUrl] = useState('');

    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://engeto.cz/'

    const getQrCode = async () => {
        const response = await fetch(url);
        const data = response.url
        console.log(response)
        console.log(data)

    } 

    getQrCode()

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("submit");
    }


    return <section>
        <div>
        <form onSubmit={formSubmit}>
            <input type="text" 
                   placeholder='Text or URL'
                   onChange={ (e) => setUserUrl(e.target.value)}
                   value={userUrl}/>
            <button>Generovat QR kód</button>

        </form>
        </div>

        <div className='qr-code'>

        </div>

    </section>
}

export default ApiQR;