class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "te", active: false },
      { id: 2, name: "kafe", active: false },
      { id: 3, name: "semola", active: false },
      { id: 4, name: "sopa", active: false },
      { id: 5, name: "agua hirviendo", active: false },
      { id: 6, name: "pan", active: false },
    ],

  }
  handleChangeStatus = (id) => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      items
    })
  }
  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
      </React.Fragment>
    )
  }
}

