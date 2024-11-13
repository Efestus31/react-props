import Button from '../button/Button.jsx'

export default function card(props) {
    return (
        <div className="card">
            <div className="bg">
                <img src={props.image} alt="" />
            </div>
            <div className="description">
                <h3>{props.title}</h3>
                <div className="description-text">
                    <span> {props.content} </span>
                </div>
                <div className='tags'>
                    {props.tags}
                </div>
                <Button />
            </div>
        </div>
    )
}