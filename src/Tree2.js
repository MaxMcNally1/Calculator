import NumberType from "./NumberType"
import AdditionType from "./AdditionType"
import SuntractionType from "./SubtractionType"
import MultiType from "./MultiType"
import DivisionType from "./DivisionType"

export default function Tree2(node) {
        if (node.node.left) {
            console.log('dog')
            if (node.node.left.type === "NUMBER") {
                console.log(node.node.left.value)
                return <AdditionType node={node.node.left} />
            } 
            if (node.node.left.type === "ADDITION") {
                console.log('ADDBOX',node.node.left.type)
                return <NumberType node={node.node.left}/>
            }
            if (node.node.left.type === "SUBTRACTION") {
                console.log('SUBBOX',node.node.left.type)
                return <SuntractionType node={node.node.left}/>
            }
            if (node.node.left.type === "MULTIPLICATION") {
                console.log('MULTIBOX',node.node.left.type)
                return <MultiType node={node.node.left}/>
            }
            if (node.node.left.type === "DIVISION") {
                console.log('DIVBOX',node.node.left.type)
                return <DivisionType node={node.node.left}/>
            }
            

            
        }
    }

    
