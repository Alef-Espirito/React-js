import style from './SubmitButton.module.css'

function SubmitButton(){
    return (
        <div>
            <button className={style.btn}>Cadastrar</button>
        </div>
    )
}

export default SubmitButton;