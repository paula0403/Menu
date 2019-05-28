const Header = (props) => {
  const activeItems = props.items.filter(item => item.active)
  return (

    <header>
      <h2>Tamano del orden: {activeItems.length}</h2>
      <h2>La quenta: {activeItems.length ? `${activeItems.length * 2} euro` : "Compras nada, no pagas"}</h2>
    </header>
  )

}