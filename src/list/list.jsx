// function ListsPoints2(props)

// {
//     const mydata = props.myvalue;
//     const rl = mydata.map((listvalues) =>{
//         console.log("done")
//         console.log(listvalues)
//         return <li>{listvalues}</li>

//     });


// return <div className="container">
//     <ul>{rl}</ul>

// </div>}
// export default ListsPoints2



// function ListsPoints2()
// {
//     const arr=[1,2,3,4,5];
//     const output=arr.map((values)=>
//     {
//         return <li>{values}</li>
//     }
// )
// return<div>
//     <ul>
//         {output}
//     </ul>
// </div>
// }
// export default ListsPoints2

function ListsPoints2(props)

{
    const mydata = props.myvalue;
    const rl = mydata.map((listvalues,index) =>{
        console.log("done")
        console.log(listvalues)
        return <li> {index+1} {listvalues}</li>

    });


return <div className="container">
    <ul>{rl}</ul>

</div>}
export default ListsPoints2