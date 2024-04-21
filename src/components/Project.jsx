import gitHubLogo from '../assets/githubLogo.png'

const Project = ({props}) => {
    const {gitHub, deployed, name, background} = props
    return(
        <>
            <section className={'Project'} style={{backgroundImage: `url(${background})`, backgroundSize: '100%', display: 'flex', alignContent: 'flex-start', margin: '5px', backgroundRepeat: 'no-repeat'}}>
                <a  href={gitHub} style={{height: '10%', padding: '5px'}}>
                    <img src={gitHubLogo} style={{height: '100%'}}></img>
                </a>
                <a href={deployed} style={{marginTop: '5px', backgroundColor: 'white', color: 'black', height: '10%'}}>{name}</a>
            </section>
        </>
    )
}

export default Project