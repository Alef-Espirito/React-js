import { useState, useEffect } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import style from './Cliente.module.css';
import Container from '../layout/Container';
import ProjectCard from '../project/ProjectCard';
import Mensage from '../layout/Mensage'
import Loading from '../layout/Loading';

function Clientes() {

   const [APIdata, setAPIdata] = useState([]);
   const [refresh] = useState('');
   const [removeLoading , setRemoveLoading]= useState(false);

   //const [projectMessage, setProjectMessage] = useState('')

   const location = useLocation()
   let mensage = ''
   if(location.state){
      mensage = location.state.mensage
   }

   useEffect(() => {
      axios.get(
         'http://localhost:5000/api/devolucao'
      )
         .then((incomingData) => {
            setAPIdata(incomingData.data);
         })
         .then((data) => {
            console.log(data)
            setRemoveLoading(true)
         })
   }, [refresh]);

   function removeProject(devolucaoid){
      fetch(`http://localhost:5000/api/devolucao/${devolucaoid}`,{
         method: 'DELETE',
         headers:{
            'Content-type':'application/json'
         },
      })
      .then(res => res.json())
      .then(data => {
         setAPIdata(APIdata.filter((data) => data.devolucaoid !== devolucaoid))
         //setProjectMessage('Devolução removida com sucesso!')
      })
      .catch(err => console.log(err))
   }

   return (
      <div className={style.project_container}>
         
         <Container customClass="start">
         {mensage &&  <Mensage type="success" msg={mensage}/>}
            {APIdata.map((data) => (
               <ProjectCard
                  key={data.devolucaoid}
                  devolucaoid={data.devolucaoid}
                  devolucaonumerocompra={data.devolucaonumerocompra}
                  devolucaoconta={data.devolucaoconta}
                  devolucaocliente={data.devolucaocliente}
                  devolucaoqtd={data.devolucaoqtd}
                  devolucaovolta={data.devolucaovolta}
                  devolucaoproduto={data.devolucaoproduto}
                  devolucaoprocedimento={data.devolucaoprocedimento}
                  devolucaomarca={data.devolucaomarca}
                  devolucaocor={data.devolucaocor}
                  devolucaoobs={data.devolucaoobs}
                  handleRemove={removeProject}
                  
               />
            ))}
         </Container>
      </div>
   )
}

export default Clientes;