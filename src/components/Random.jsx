import './Random.css'

const Random = ({min, max}) => {
const randomValue=  Math.floor(Math.random() * (max - min + 1)) + min;

return (
    <div>
        <div className='random-container'>
        Random value between {min} and {max} = {randomValue}  
    </div>
    </div>
)

}

export default Random;