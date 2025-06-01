import PropTypes from 'prop-types'

const productCardPropTypes = {
  id: PropTypes.number,
  nombre: PropTypes.string,
  precio: PropTypes.number,
  precioAnt: PropTypes.number,
  img: PropTypes.string,
  estrellas: PropTypes.number,
  onVerDetalle: PropTypes.func
}

export default productCardPropTypes
