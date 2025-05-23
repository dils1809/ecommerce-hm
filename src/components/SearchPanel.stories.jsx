import SearchPanel from './SearchPanel'

export default {
  title: 'Componentes/SearchPanel',
  component: SearchPanel,
}

export const Default = () => (
  <SearchPanel sugerencias={['Crochet', 'Beachwear', 'Total look']} />
)
