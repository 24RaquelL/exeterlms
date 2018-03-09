import React from 'react';
import ReactDOM from 'react-dom';

// Hands On Project 1
ReactDOM.render(
    <div>
        <h1>Tips for breaking down a new concept</h1>
        <div>
            <ul>
                <li>Many concepts can't be tackled all at once</li>
                <ul>
                    <li>Work with the parts you can understand</li>
                    <li>Take breaks to stay fresh</li>
                </ul>
                <li>Develop a plan to learn the parts you don't know</li>
                <ul>
                    <li>Start with the parts that you know</li>
                    <li>Build new concepts on top</li>
                </ul>
            </ul>
        </div>
    </div>,
    document.getElementById('root')
  )
  
//Hands On Project 2
// Convert the following JSX
/*
const output =
  <div>
    <p>React: A JavaScript library for building user interfaces</p>
    <p>Redux: A predictable state container for JavaScript apps</p>
    <p>Reselect: A simple selector library for Redux</p>
  </div>;

ReactDOM.render(output, document.getElementById('root'));
*/
const libraries = [
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      title: 'Redux',
      description: 'A predictable state container for JavaScript apps'
    },
    {
      title: 'Reselect',
      description: 'A simple selector library for Redux'
    }
  ];

  // This is not a component, it's a regular function that takes a JavaScript object and returns JSX
const showLib = lib =>
  (
    <div>
        <p>key={lib.title}: key={lib.description} </p>
        <p>key={lib.title}: key={lib.description} </p>
        <p>key={lib.title}: key={lib.description} </p>
    </div>
  );

const output = libraries.map(libraries);
  
ReactDOM.render(<div>output</div>, document.getElementById('root'));


//Hands On Project 3
// convert the following JSX
const output = <div>
    <div>
        <h1 id="title">Major General's Song</h1>
        <div>
          <p>Author: Gilbert and Sullivan</p>
          <p>1879</p>
        </div>
    </div>
</div>

ReactDOM.render(output, document.getElementById('root'));
//to be generated by the use of this function:
const header = makeHeader({ id: 'title', text: "Major General's Song" });
const author = makeBody({ author: 'Gilbert and Sullivan', year: 1879 });
const majorGeneral = makeSong(header, lyrics);

ReactDOM.render(output, document.getElementById('root'));