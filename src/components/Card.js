import PropTypes from 'prop-types'

const Card = ({children, title, onClick}) => {
    return (
        <div className="card mb-3 cursor-pointer" onClick={onClick}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>{title}</div> 
                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element, //dom객체로만 보내는거
    onClick: PropTypes.func,
}
Card.defaultProps = {
    children: null,
    onClick: () => {}
}

export default Card

