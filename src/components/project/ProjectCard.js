import style from './ProjectCard.module.css'

import {Link} from 'react-router-dom'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({ devolucaotid, devolucaonumerocompra, devolucaoconta, devolucaocliente, devolucaovolta, devolucaoproduto, devolucaoprocedimento, devolucaomarca, devolucaocor, devolucaoobs, handleRemove}){
const remove = (e) => {
    e.preventDefault()
    handleRemove(devolucaotid)
}
    

    return(
    <div className={style.project_card}>
        <h4>#{devolucaonumerocompra}</h4>
        <p><span>Conta: </span>{devolucaoconta}</p>
        <p><span>Nome: </span>{devolucaocliente}</p>
        <p><span>Volta: </span>{devolucaovolta}</p>
        <p><span>Sku: </span> {devolucaoproduto}</p>
        <p><span>Procedimento: </span> {devolucaoprocedimento}</p>
        <p><span>Marca: </span> {devolucaomarca}</p>
        <p><span>Cor: </span> {devolucaocor}</p>
        <p><span>Obs: </span> {devolucaoobs}</p>
        <div className={style.project_card_ctions}>
            <Link to={`clientes/detalhes/${devolucaonumerocompra}`}>
                <BsPencil/>  Editar
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/> Excluir
            </button>
        </div>
    </div>
)
}

export default ProjectCard;