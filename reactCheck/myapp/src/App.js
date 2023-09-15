import Content from "./Components/Content/Content"
import Header from "./Components/Header/Header"
import PageFive from "./Components/PageFive/PageFive"
import PageThree from "./Components/PageThree/PageThree"
import PageTwo from "./Components/PageTwo/PageTwo"

function App(){
    return(
        <div>
            <Header/>
            <PageTwo/>
            <PageThree/>
            <Content/>
            <PageFive/>
        </div>
    )
}

export default App