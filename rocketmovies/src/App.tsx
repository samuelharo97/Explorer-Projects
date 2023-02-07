import { useState } from 'react'
import { InputText, MovieCard } from '@components'
import { AiOutlineMail } from 'react-icons/ai'

import './styles/index.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App h-screen w-screen bg-zinc-600 ">
            <InputText placeholder="E-mail" icon={AiOutlineMail}></InputText>
        </div>
    )
}

export default App
