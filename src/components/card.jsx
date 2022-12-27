const Card = ({title, img, desc}) => { 
    return (
        <div className="col-12 col-md-4 colorChange">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body bg-oscuro">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}; 
export default Card;