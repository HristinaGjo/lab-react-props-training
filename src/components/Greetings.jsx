import './Greetings.css'

const Greetings = ({lang, children}) => {
    
        let greetingMessage;

        if (lang === 'de') {
          greetingMessage = `Hallo ${children}!`;
        } else if (lang === 'en') {
          greetingMessage = `Hello ${children}!`;
        } else if (lang === 'es') {
          greetingMessage = `Hola ${children}!`;
        } else if (lang === 'fr') {
          greetingMessage = `Bonjour ${children}!`;
        } else {
          greetingMessage = `Greetings ${children}!`;
        }
        
        return (
            <div className='greetings-container'>
              {greetingMessage}
            </div>
    )
}

export default Greetings;
