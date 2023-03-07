
// Import Icons.
const html_icon= <i className="fa-brands fa-html5 fa-3x" ></i>
const css_icon=<i className="fa-brands fa-css3 fa-3x"/>
const js_icon=<i className="fa-brands fa-js fa-3x"/>
const react_i=<i className="fa-brands fa-react fa-3x" />
const node_i=<i className="fa-brands fa-node-js fa-3x"/>

//database para mongo db
const db_i=<i className="fa-solid fa-database fa-3x"/>

//gear para postman
const gear_i=<i className="fa-solid fa-gear fa-3x"/>

const github_i=<i className="fa-brands fa-github fa-3x"/>
const git_i=<i className="fa-brands fa-git fa-3x"/>


const Icons=()=>{
    return(
        <div className="iconos_in" >

            <div className='icons_each' >
                <p>{html_icon} </p>
                <p>HTML 5</p>
            </div>
            <div className='icons_each' >
                <p>{css_icon} </p>
                <p>CSS</p>
            </div>
            <div className='icons_each' >
                <p>{js_icon} </p>
                <p>Javascript</p>
            </div>
            <div className='icons_each' >
                <p>{react_i} </p>
                <p>React</p>
            </div>
            <div className='icons_each' >
                <p>{node_i} </p>
                <p>Node JS</p>
            </div>
            <div className='icons_each' >
                <p>{db_i} </p>
                <p>MongoDb</p>
            </div>
            <div className='icons_each' >
                <p>{gear_i} </p>
                <p>Postman</p>
            </div>
            <div className='icons_each' >
                <p>{github_i} </p>
                <p>Github</p>
            </div>
            <div className='icons_each' >
                <p>{git_i} </p>
                <p>GIT</p>
            </div>

        </div>
    )
}

export default Icons