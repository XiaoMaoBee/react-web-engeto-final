// import { json } from 'react-router-dom';
import './ApiQR.css';
import { useState, useEffect} from 'react'


const ApiQR = () => {

    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://'

    const [userUrl, setUserUrl] = useState('');

    
    // Příprava dat z api
    const getQrCode = async () => {
        const response = await fetch(url);
        const data = response.url
        console.log(response)
        console.log(data)

    } 

    useEffect( () => {
        getQrCode()
    },[])    
    

    const createQrCode = () => {
        const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${userUrl}`

        setUserUrl(qrCode)
        
        console.log('já jsem ' + qrCode)       

         
    }

    // Zrušení okamžitého načtení stránky po odeslání formuláře
    const formSubmit = (e) => {
        e.preventDefault()
        console.log("submit");
    }


    return <section className='api-container'>
        <div>
        <form onSubmit={formSubmit} className='form-box'>
            <input type="text" 
                   placeholder='Text or URL'
                   onChange={ (e) => setUserUrl(e.target.value)}
                   value={userUrl}/>
            <button onClick={createQrCode}>Generovat QR kód</button>
        </form>        
        </div>

        <div className='qr-code'>
            <img src={userUrl} alt="" />
        </div>

    </section>
}

export default ApiQR;