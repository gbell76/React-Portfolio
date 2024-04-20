import Nav from './NavTabs'

const Header = () => {
    return(
        <>
            <div className={'Header'} style={{justifyContent: 'space-between'}}>
                <h1>George Bell</h1>
                <Nav />
            </div>
        </>
    )
}

export default Header