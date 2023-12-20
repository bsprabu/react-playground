const header = React.createElement('h1', {
    id: 'title',
    test: 'testProps'
}, 'Hello....');
const root =  ReactDOM.createRoot(document.getElementById('root'));


const parent = React.createElement('div', { id : 'parent'}, 
    React.createElement('div' , { id: 'child'}, 
    [React.createElement('h1', {key:"h1"}, 'Hi I am Nested...H1'), React.createElement('h2', {id: 'h2'}, 'Hi I am Nested...H2')])
);


root.render(parent);