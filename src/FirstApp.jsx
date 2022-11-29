import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>Y tengo {subtitle} años</h2>
        </>)
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}