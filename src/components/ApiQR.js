// import { json } from 'react-router-dom';
import './ApiQR.css';
import { useState, useEffect} from 'react'


const ApiQR = () => {    

    const [userUrl, setUserUrl] = useState('');
    let url  = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${userUrl}`
    

    // Zrušení okamžitého načtení stránky po odeslání formuláře
    const formSubmit = (e) => {
        e.preventDefault() 

            setUserUrl(url)            
        }
        

    

    // useEffect( () => {
    //     setUserUrl('')
    //  })

    

// const getQrCode = () => {
//     setUserUrl(url)  
// }
  


    return <section className='api-container'>
        <div>
        <form onSubmit={formSubmit} className='form-box'>
            <input type="text" 
                   placeholder='Text or URL'
                   onChange={ (e) => setUserUrl(e.target.value)}
                   value={userUrl}/>

            <button>Generovat QR kód</button>            

        </form>        
        </div>

        <div className='qr-code'>
            <img src={userUrl} alt="" />
        </div>

    </section>
}

export default ApiQR;





    // Příprava dat z api
    // const getQrCode = async () => {
    //     const response = await fetch(url);
    //     const data = response.url
    //     console.log(response)
    //     console.log(data)

    // } 


     // useEffect( () => {
    //     getQrCode()
    // },[])  