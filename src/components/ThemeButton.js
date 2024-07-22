import './ThemeButton.css';
import artDescriptions from '../data';

const ThemeButton = ({buttonTitle}) => {

    const showDescription = () => {
        artDescriptions.map( oneItem => {
            const {id, image, artist_name, art, skill_level, description} = oneItem
            return <div key={id}>
                setDescription({ThemeButton.buttonTitle})
            <p >{description}</p>
            </div>
        })
    }



    return <>
        <button onClick={showDescription}>{buttonTitle}</button>
    </>
}

export default ThemeButton;