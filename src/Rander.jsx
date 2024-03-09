
// --------------option 1 (if-else)
// export default function Rander({task, isFinished}){
//    if (isFinished===false) {
//     return <h3>not true : {task} </h3>
    
//    }
//    else{
//     return <h3>not false : {task} </h3>
//    }
// }


// -------------------option 2 (ternary)
// export default function Rander({task, isFinished}){
//        return (
//         <li>{isFinished ? 'done' : 'not yet' } {task} </li>
//        )
//     }

// ---------------------option 3 (&&, ||)
// export default function Rander({task, isFinished}){
//        return (
//         <li> {task} {isFinished && ':done'} </li>
//        )
//     }

// export default function Rander({task, isFinished}){
//            return (
//             <li> {task} {isFinished || ':not done'} </li>
//            )
//         }


// --------------------option 4(variable)

export default function Rander({task, isFinished}){
    let listItem
       if (isFinished===false) {
        listItem =  <h3>false : {task} </h3>
        
       }
       else{
        listItem = <h3>true : {task} </h3>
       }
       return listItem;
    }




