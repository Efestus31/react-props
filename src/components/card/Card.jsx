import Button from '../button/Button.jsx'

export default function card() {
    return (
        <div className="card">
            <div className="bg">
                <span className='fine-text'>
                    600 x 400
                </span>
            </div>
            <div className="description">
                <h3>Titolo del post</h3>
                <div className="description-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet numquam obcaecati asperiores alias quo blanditiis?
                    Sapiente quidem, ratione molestiae sequi at impedit minus eos voluptatem doloribus!
                    Ratione enim maiores ad?
                </div>
                <Button />
            </div>
        </div>
    )
}