import './profile.css'

export default function Profile(props) {
    return (
        <div>
            <h2>{props.firstName}</h2>
            <img alt="no logo" className="user-profile" src={props.imgUrl}></img>
            <p>{props.title}</p>
        </div>
    )
}