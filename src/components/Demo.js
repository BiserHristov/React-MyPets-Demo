import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DemoPage = () => {
    const onButtonClickHandler = () => {
        console.log('Increase');
        console.log(state.step);
        console.log(Number(state.step));
        setState(oldState => ({ ...oldState, count: oldState.count + Number(oldState.step) }))
    }
    
    const [state, setState] = useState({
        count: 11,
        step: 1
    })

    const [character, setCharacter] = useState({ name: 'Noboody' })

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${state.step}`)
            .then(res => res.json())
            .then(result => setCharacter(result))

    }, [state.step])

    useEffect(() => {
        return () => {
            console.log("ComponentWillUnmount!!!!!!");
        };
    }, []);

   

    const onStepSelectChangehandler = (e) => {

        setState(oldState => ({ ...oldState, step: Number(e.target.value) }))
    }

    return (
        <div>
            <h1>{character.name} - Counter</h1>
            <div>{state.count}</div>
            <button onClick={onButtonClickHandler}>Increment</button>
            <label htmlFor='step'>Step:</label>
            <select name='step' id='step' onChange={onStepSelectChangehandler}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <div>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default DemoPage