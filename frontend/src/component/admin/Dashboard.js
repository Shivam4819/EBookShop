// import  React ,{useEffect,useState}from "react";
// import {Button, ButtonToggle, Container, Form, FormGroup} from 'reactstrap';
// import {Link} from "react-router-dom";
// import axios from "axios";

// export default function BooksCategories(){

//     const [arr,setArr]= useState([])

//     //
//     useEffect(()=>{
//         axios.get("http://localhost:3000/api/v1/category")
//             .then(response=> {console.log(response)
//                 setArr(response.data)
//             })
//     },[])



//     return(
//         <div>
//             <h2>Categories</h2>

//             <div className="container">
//                 <table className="table">
//                     <thead>
//                     <tr>
//                         {/* <th>ID</th> */}
//                         <th>Name</th>
                       
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {
//                         arr.map(value => {
//                             console.log(value)
//                             return (
//                                 <tr>
//                                     {/* <td>{value.id}</td> */}
//                                     <td>{value.name}</td>
//                                     {/*<td><button className="btn btn-warning" >Delete</button></td>*/}
//                                 </tr>
//                             )
//                         })
//                     }
//                     </tbody>
//                 </table>
//                 {/* <ButtonToggle outline color="link"><Link to ="/admintask" >Task Manager</Link></ButtonToggle> */}
//             </div>
//         </div>
//     )
// }

