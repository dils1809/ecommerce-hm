import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Componentes/Header',
  component: Header,
  decorators: [
    (Story) => <BrowserRouter><Story /></BrowserRouter>,
  ]
}

export const Default = () => <Header />
