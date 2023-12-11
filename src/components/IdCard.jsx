import './IdCard.css';

function IdCard (props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
       
  return (
  <div className="IdCard">
  <div className="left-column">
  <img src={picture} alt={`${firstName} ${lastName}`} />
  </div>
  <div className="right-column">
    <div className="text-box">
  <p><strong>Last Name:</strong> {lastName}</p>
  <p><strong>First Name:</strong> {firstName}</p>
  <p><strong>Gender:</strong> {gender}</p>
  <p><strong>Height:</strong> {height} cm</p>
  <p><strong>Birth:</strong> {birth.toDateString()}</p>
</div>
</div>
</div>
    )
}


export default IdCard;


