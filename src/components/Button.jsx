import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({children, onClick, type}){
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;
