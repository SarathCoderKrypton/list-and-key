import Tasktwo from "./tasktwo";
function Taskone(props){
    return(
        <>
        <h1>This Task Done By Sarath Kumar{props.valu}</h1>
        <Tasktwo valu={2}/>
        </>
    )
}
export default Taskone