import FavoritesList from './FavoritesList'

export default {
  title: 'Componentes/FavoritesList',
  component: FavoritesList,
}

export const Default = () => (
  <FavoritesList
    favs={[
      { nombre: 'Blusa negra', img: '/assets/prod.jpg' },
      { nombre: 'Falda plisada', img: '/assets/prod.jpg' }
    ]}
  />
)
