import Accordion from "./accordion"

function App(){
    const data=[{
        key: 0,
        label: "HTML",
        content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript"
    },{
        key: 1,
        label: "CSS",
        content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },{
        key: 2,
        label: "JavaScript",
        content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
    }]

    return(
       <Accordion data={data}/>
    );
}

export default App;