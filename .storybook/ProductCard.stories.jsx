import ProductCard from '../components/ProductCard'

export default {
  title: 'Componentes/ProductCard',
  component: ProductCard,
}

const Template = (args) => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  nombre: 'Vestido Verde',
  precio: 'Q.179.99',
  precioAnt: 'Q.219.99',
  img: 'https://via.placeholder.com/150',
  estrellas: '★★★★☆',
}
