function namee(props) {

    const dats=props.datass

    const ioo=dats.map((s,index)=>{
        console.log({s});
       
      return  <li  Key={index}>{s} {index} </li>
      
    })
    return(


        <ul>{ioo}</ul>

    )
    
}

export default namee