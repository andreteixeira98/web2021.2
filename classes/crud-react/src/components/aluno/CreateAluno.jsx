import React, { Component } from 'react';

class CreateAluno extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '' }

        this.setNome = this.setNome.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        alert('Nome: ' + this.state.nome);
        this.setState({ nome: '' });
    }
    render() {
        return (
            <div>
                <h4>Criar Aluno</h4>
                <form action="" onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor="">Name:</label>
                        <input type="text" className='form-control'
                            value={this.state.nome} onChange={this.setNome}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="">Curso:</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">IRA:</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value='Send' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateAluno;

