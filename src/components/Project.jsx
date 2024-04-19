import gitHubLogo from '../assets/githubLogo.png'

const Project = ({props}) => {
    const {gitHub, deployed, name, background} = props
    console.log(props)
    return(
        <>
            <section style={{width: '50%', backgroundImage: `url(${background})`, backgroundSize: '100%', display: 'flex', alignContent: 'flex-start'}}>
                <a  href={gitHub} style={{height: '10%', padding: '5px'}}>
                    <img src={gitHubLogo} style={{height: '100%'}}></img>
                </a>
                <a href={deployed} style={{marginTop: '5px', backgroundColor: 'white', height: '10%'}}>{name}</a>
            </section>
        </>
    )
}

export default Project