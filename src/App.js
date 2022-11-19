import './App.css';
// import Home from './Pages/Home'
import React, {
  useState, 
  useEffect
} from 'react'

function App() {

  const [, updateState] = React.useState();
 const forceUpdate = React.useCallback(() => updateState({}), []);

  const [data,setData] = useState(
    [
        {
          name: 'jaba',
          surname: 'khizanishvili',
          age:23
        },
        {
          name: 'jaba',
          surname: 'khizanishvili',
          age:23
        },
      ]
  )


  // const [values, setValues] = useState({
  //   name: "",
  //   surname: "",
  //   age: "",
  // })

  // function handleChange(e) {
    // const key = e.target.id;
    // const value = e.target.value
    // setValues(values => ({
    //     ...values,
    //     [key]: value,
    // }))
  // }


  function handleSubmit(e) {
    e.preventDefault();
    let form = document.getElementById('jaba');
    console.log(form.elements[0].value,form.elements[1].value, form.elements[2].value );

    data.push(
      {
        name : form.elements[0].value,
        surname: form.elements[1].value,
        age: form.elements[2].value,
      }
    )
    let newArr = data;
    console.log(newArr, 'esaa');
    setData(newArr);
    forceUpdate()
  }

  return (
    <>
    <form id='jaba' 
    onSubmit={handleSubmit}
    >
    <p>Enter Name:</p>
    <input id="name" type="text" 
    // value={values.name} onChange={handleChange}
    ></input>
    <p>Enter surname:</p>
    <input id="surname" type="text"
    //  value={values.surname} onChange={handleChange}
     ></input>
    <p>Enter age:</p>
    <input id="age" type="text" 
    // value={values.age} onChange={handleChange}
     ></input>
      <br></br>
          <button type="submit">submit</button>
    </form>
    
      {
        data.map((e,i)=>{
          return(
            <div key={i} style={{'backgroundColor':"gray", width:"200px", color:'white'}}>
              <p>{e.name}</p>
              <p>{e.surname}</p>
              <p>{e.age}</p>
            </div>
          )
        })
      }
    </>
  );
}

export default App;
