import image from "../images/error404.svg"

function NotFound () {
    return(
        <div className="noteFound">
            <img className="noteFound__image" src={image} alt=""/>
        </div>
    )
}

export default NotFound;