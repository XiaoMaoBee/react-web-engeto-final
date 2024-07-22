import './DescriptionBox.css';
import ThemeButton from './ThemeButton'
import { useState } from 'react';
import artDescriptions from '../data'

const DescriptionBox = () => {

    const [description, setDescription] = useState(artDescriptions[0].description)

    console.log(description)

    const showDescription = () => {
        artDescriptions.map( oneItem => {
            const {id, image, artist_name, art, skill_level, description} = oneItem
            return <div key={id}>
                setDescription({ThemeButton.buttonTitle})
            <p >{description}</p>
            </div>
        })
    }

    showDescription();


    return <section>
        <h1>Description box</h1>

        <div>
            {
                artDescriptions.map( oneDescription => {
                    const {id, image, artist_name, art, skill_level, description} = oneDescription;
                    return <ThemeButton key={id}
                                        buttonTitle={art}/>
                })
            }
        </div>
        <div>
            {
        artDescriptions.map( oneItem => {
            const {id, image, artist_name, art, skill_level, description} = oneItem
            return <div key={id}>
                
            <p >{description}</p>
            </div>})
}
            </div>







     {/*    <ThemeButton buttonTitle={"Dancing"} 
                     showDescription={showDescription}/>

        <ThemeButton buttonTitle={"Taichi / Kungfu"} 
                     showDescription={showDescription}/>

        <ThemeButton buttonTitle={"Story-writing"} 
                     showDescription={showDescription}/>

        <ThemeButton buttonTitle={"Drawing"} 
                     showDescription={showDescription}/>

        <ThemeButton buttonTitle={"Dancing"} 
                     showDescription={showDescription}/> */}


    </section>
}

export default DescriptionBox;