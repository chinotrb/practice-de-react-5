import PropTypes from  'prop-types';

export const FirstApp = ({
    title = 'cosas que pasan', 
    subTitle = 'pasan que cosas'
}) => {
    
    return(
        <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        </>
    )
}

FirstApp.PropTypes = {
    title : PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    name : 'Bryan',
    subTitle: 'no hay subtitulo',
    title : 'saber que paso?'
}