class View {
  constructor(elemento) {
    this._elemento = elemento
  }

  template() {
    throw new Error('O método Template deve implementado!')
  }

  update(model) {
    this._elemento.innerHTML = this.template(model)
  }
}
