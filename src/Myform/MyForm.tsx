import React, {Component} from 'react'
import IFormProps from './interface/PropsInterface'
import IFormState from './interface/StateInterface'



class MyForm extends Component<IFormProps, IFormState> {

  state = {
    open:false
  }

  render(){
    const {open} = this.state
    const {children, preview} = this.props
    
    if (open) {
      return (
        <div>
          {children}
          <br />
          <div onClick={()=> this.setState({open:false})}>Close</div>
        </div>
      )
    }

    return (
      <div>
         {preview}
        <br />
        <div onClick={()=> this.setState({open:true })}>Open</div>
      </div>
    )

  }
}

export default MyForm