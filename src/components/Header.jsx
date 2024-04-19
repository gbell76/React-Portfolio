import Nav from './NavTabs'

const Header = () => {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h1>George Bell</h1>
                <Nav />
            </div>
        </>
    )
}

export default Header