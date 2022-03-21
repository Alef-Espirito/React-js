import axios from 'axios';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
//import Input from '../form/Input';

import styles from './ProjectForm.module.css';

function ProjectForm() {

    const [devolucaoNumeroCompra, setNcompra] = useState('');
    const [devolucaoConta, setConta] = useState('');
    const [devolucaoCliente, SetCliente] = useState('');
    const [devolucaoQtd, setQtd] = useState('');
    const [devolucaoVolta, setVolta] = useState('');
    const [devolucaoProduto, setProduto] = useState('');
    const [devolucaoProcedimento, setProcedimento] = useState('');
    const [devolucaoMarca, setMarca] = useState('');
    const [devolucaoCor, setCor] = useState('');
    const [devolucaoObs, setObs] = useState('');
    const [setRefresh] = useState('');
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        const devolucao = {devolucaoNumeroCompra, devolucaoConta, devolucaoCliente, devolucaoQtd, devolucaoVolta, devolucaoProduto, devolucaoProcedimento, devolucaoMarca, devolucaoCor, devolucaoObs };

        axios.post('http://localhost:5000/api/devolucao', devolucao)
            .then((data) => {
                setRefresh(data);
                
            });
            history.push('/clientes',{mensage:'Cadastrado com sucesso!'})

    }

    return (
        <div className={styles.form_control}>
            <div>
            <form>  
                <label> N°compra : </label>
                <input 
                type="number"
                text="N°compra"
                placeholder="Digite o número de compra" 
                onChange={(e) => 
                setNcompra(e.target.value)} 
                />
                <label> Conta : </label>
                <input 
                type="text" 
                text="Conta"
                placeholder="Digite a conta" 
                onChange={(e) => 
                setConta(e.target.value)} 
                />
                <label> Nome : </label>
                <input 
                type="text"
                text="Nome"
                placeholder="Digite o nome do cliente" 
                onChange={(e) => 
                SetCliente(e.target.value)} 
                />
                <label> Quantidade : </label>
                <input 
                type="text"
                text="Quantidade"
                placeholder="Digite a quantidade" 
                onChange={(e) => 
                setQtd(e.target.value)} 
                />
                
                <label> Volta : </label> 
                <input 
                type="text"
                text="Volta"
                placeholder="Qual a volta?" 
                onChange={(e) => 
                setVolta(e.target.value)} 
                />
                </form>
                </div>

                <div>
                <form>
                <label> Sku : </label>
                <input 
                type="text"
                text="Sku"
                placeholder="Nome do produto" 
                onChange={(e) => 
                setProduto(e.target.value)} 
                />
                <label> Procedimento : </label>
                <input 
                type="text"
                text="Procedimento"
                placeholder="Qual o procedimento?" 
                onChange={(e) => 
                setProcedimento(e.target.value)} 
                />
                <label> Marca : </label>
                <input 
                type="text"
                text="Marca"
                placeholder="Nome da marca" 
                onChange={(e) => 
                setMarca(e.target.value)} 
                />
                <label> Cor : </label>
                <input 
                type="text"
                text="Cor"
                placeholder="Qual a cor" 
                onChange={(e) => 
                setCor(e.target.value)} 
                />
                <label> Observação : </label>
                <input 
                type="text"
                text="Observação"
                placeholder="Digite uma observação..." 
                onChange={(e) => 
                setObs(e.target.value)} 
                />
                </form> 
                </div>

                <button className={styles.button}onClick={handleSubmit}><span>Enviar </span></button>
            
            </div>       
    )
}

export default ProjectForm;