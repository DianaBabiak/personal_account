import {Main} from "./layout/main/Main.tsx";
import {Header} from "./layout/header/Header.tsx";

function App() {


    return (
        <div className=" max-w-[1440px] min-w-[320px] mx-auto w-full">
            <Header/>
            <Main/>
        </div>
    )
}

export default App
