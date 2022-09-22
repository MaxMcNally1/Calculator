import { useState } from 'react';
import './App.css';
import * as Parser from './parser/formula-parser.js';
import Tree2 from './Tree2';
const parse = Parser.parse;

function App() {
  let [formula, formulaChange] = useState('($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)');
  let [syntaxTree, syntaxTreeChange] = useState('');
  let [syntaxTreeJson, syntaxTreeJsonChange] = useState(null);
  let [visualizerOutput, visualizerChange] = useState('');

  console.log(syntaxTreeJson)
  let treeData = {
    "type": "ADDITION",
    "left": {
      "type": "NUMBER",
      "value": 4
    },
    "right": {
      "type": "DIVISION",
      "left": {
        "type": "NUMBER",
        "value": 4
      },
      "right": {
        "type": "NUMBER",
        "value": 2
      }
    }
  }

  const updateAst = () => {
    console.log('creating ast view...');
    const newSyntaxTree = parse(formula);
    syntaxTreeChange(newSyntaxTree);

    console.log('The ast is: ', syntaxTree);
    syntaxTreeJsonChange(JSON.stringify(newSyntaxTree, null, 2));
  };

  const convertAstToFormula = () => {     
    console.log('converting ast to string...');
    visualizerChange("TO BE IMPLEMENTED");
  };

  return (
    <div className='formulizer'>
      <h1>Welcome to the formulizer!</h1>
      <h3>Input formula</h3>
      <p>
        <textarea 
          cols={100} 
          rows={8} 
          value={formula} 
          onChange={(event) => formulaChange(event.target.value)}/> <br/>
      </p>
      <p><button onClick={updateAst}>Parse and update AST View</button></p>
      <h3>Syntax tree</h3>
      <pre style={{maxHheight: '300px', overflowy: 'auto',backgroundColor: '#eeeeee'}}>{syntaxTreeJson}</pre>
      <p><button onClick={convertAstToFormula}>Convert AST to Formula</button></p>
      <h3>Visualizer-to-Formula</h3>
      <p>{visualizerOutput}</p>
      <Tree2 node={treeData}/>
    </div>
  );
}

export default App;
