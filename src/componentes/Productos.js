import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { mostrarProductos } from '../actions/productosActions';

class Productos extends Component {

  componentDidMount() {
    this.props.mostrarProductos();
  }
  

  render() {
    return (
      <h1>Productos</h1>
    )
  }
}

// state
const mapStateToProps = (state) => ({
  productos: state.productos.productos
})

export default connect(mapStateToProps, { mostrarProductos })(Productos);
