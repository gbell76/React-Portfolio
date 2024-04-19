import Project from '../components/Project'
import buyMeThings from '../assets/buyMeThings.jpg'

export default function Portfolio () {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
            </div>
        </>
    )
}