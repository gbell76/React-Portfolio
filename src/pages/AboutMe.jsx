import avatar from '../assets/avatar.jpg'

export default function AboutMe () {
    return(
        <>
            <h2>About Me</h2>
            <div className='profile'>
                <img style={{maxWidth: '50%', marginRight: '20px'}} src={avatar}></img>
                <p style={{textIndent: '5%'}}>Currently pursuing bootcamp certification in software engineering. Hardworking computer science graduate looking to continue expanding expertise and make use of programming skills and knowledge. Seeking challenging entry level position with opportunities to showcase strengths and engage with a dynamic company.</p>
            </div>
        </>
    )
}