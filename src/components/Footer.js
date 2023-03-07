
const mail_i=<i className="fa-regular fa-envelope"></i>

const ubic_i=<i className="fa-solid fa-location-dot"></i>
const linkedin_i=<i className="fa-brands fa-linkedin"></i>
const github_i=<i className="fa-brands fa-github"/>


const Footer =()=>{
    return(
        <div className="Footer">


                <div className="nav2_data" >
                    <p>{mail_i} javiergueneau@gmail.com</p>
                </div>

                <div className="nav2_data">
                    <p>{ubic_i} Santiago - Chile.
                    </p>
                </div>

                <div className="nav2_data">
                    <a href="https://www.linkedin.com/in/javiergueneau/" target='_blank'>
                        {linkedin_i} https://www.linkedin.com/in/javiergueneau/   </a>
                </div>
                
                <div className="nav2_data">

                    <a href="https://github.com/javier-gueneau" target='_blank' >{github_i}https://github.com/javier-gueneau</a>
                </div>


        </div>
    )
}

export default Footer