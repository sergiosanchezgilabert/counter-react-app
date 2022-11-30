import PropTypes from 'prop-types' //yarn add prop-types

export const FirstApp = ({ title, subtitle, inf }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>Y tengo {subtitle} años</h2>
            <h3>{inf}</h3>
        </>)
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    inf: 'Informacion interna'
}