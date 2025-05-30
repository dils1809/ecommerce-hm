import CartItem from '../components/CartItem'

export default {
  title: 'Componentes/CartItem',
  component: CartItem,
}

const Template = (args) => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  nombre: 'Vestido Verde',
  precio: 'Q.179.99',
  img: 'https://via.placeholder.com/150',
  cantidad: 1,
  onIncrement: () => {},
  onDecrement: () => {},
  onDelete: () => {},
}
