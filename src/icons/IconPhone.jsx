import PropTypes from "prop-types"

function IconPhone({color, size}){

return (
	<>
    <svg fill={color} height={size} width={size} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20">
        <path d="M12 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.5 17.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2ZM12 13H2V4h10v9Z"/>
    </svg>
    </>
    )
}

IconPhone.propTypes = {
	color: PropTypes.string,
	size: PropTypes.string
  }
  
export default IconPhone
