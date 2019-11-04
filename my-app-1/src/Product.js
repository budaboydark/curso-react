import React, { Component } from 'react'
import { client } from './http/client/F1_index'
class Product extends Component {
    constructor(){
        super()
        this.state = {data:[]}
    }

    async componentDidMount(){
        if (this.props.id){
            const produtos = await client.get(`/produtos/${this.props.id}`).then(response => { return response })
            this.setState({ data: produtos.data})
        }else{
            const produtos = await client.get(`/produtos`).then(response => { return response })
            this.setState({ data: produtos.data})
        }
    }

    render(){
        if (this.props.id){
            const { data } = this.state
            if(data.dados){
                return (
                    <div>{data.dados.detalhe.nome}</div>
                )
            }else{
                return (
                    <div>deu ruim</div>
                )
            }
        }else{
            const { data } = this.state
            if(data.dados){
                const list = data.dados.map((product) => 
                    <li>{product.detalhe.nome}-{product.id}</li>
                )
                return (
                    <div><ul>{list}</ul></div>
                )
            }else{
                return (
                    <div>deu ruim</div>
                )
            }
        }
    }
  }
  
  export default Product;