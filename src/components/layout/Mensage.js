import {useState, useEffect} from 'react'

import style from '../layout/Mensage.module.css';
//import { useEffect, useState } from 'react/cjs/react.production.min';

function Mensage({type, msg}){

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const time = setTimeout(() => {
            
        setVisible(false)

        },3000)

        return () =>  clearTimeout(time)
    },[msg])

    return (
        <>
        {visible &&(
            <div className={`${style.mensage} ${style[type]}`}><p>{msg}</p></div>
        )}
        </>
    )
}

export default Mensage;