import Button from "./ButtonComponent";

export default function Nav({level}) {
 let style={
    border:'3px solid white' 
    ,backgroundColor:"saddlebrown",
    color:"white"
 }
    
 
    return (
        <nav className="Nav-bar">
    <Button style={style} Text="تغيير المستوي"/>      
     <h1>{level}</h1>
    <img src="./picture1.png"/>
        </nav>
    )
}