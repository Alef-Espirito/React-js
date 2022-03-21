import { useHistory } from 'react-router-dom'

import style from './NovoFornecedor.css'
import ProjectForm from '../project/ProjectForm';

function NovoFornecedor(){   

    const history = useHistory()

    function createPost(devolucoes) {
        
        fetch('http://localhost:5001/devolucoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(devolucoes),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                history.push('/clientes', { message: 'Projeto criado com sucesso!' })
            })
    }

    return(
        <div className={style.novofornecedor}>
            <h1 className={style.novofornecedor}>Cadastro de devolução</h1>
            <ProjectForm handleSubmit={createPost} btnText='Cadastrar'/>
        </div>
    )  
}

export default NovoFornecedor;