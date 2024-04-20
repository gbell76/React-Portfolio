import Project from '../components/Project'
import buyMeThings from '../assets/buyMeThings.jpg'
import mediMinder from '../assets/MediMinder.png'
import horiseon from '../assets/Horiseon.png'
import dailyPlanner from '../assets/DailyPlanner.png'
import randomPasswordGenerator from '../assets/RandomPasswordGenerator.png'
import noteTaker from '../assets/NoteTaker.png'

export default function Portfolio () {
    return(
        <>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <Project props={{gitHub: 'https://github.com/rbenjamin4/WishList', deployed: 'https://smart-wish-list.onrender.com/', name: 'Buy Me Things!', background: buyMeThings}} />
                <Project props={{gitHub: 'https://github.com/cspecialblackberry/MediMinder-App', deployed: 'https://mediminder-e3e3cf63329a.herokuapp.com/', name: 'MediMinder', background: mediMinder}} />
                <Project props={{gitHub: 'https://github.com/gbell76/Horiseon-Refractor', deployed: 'https://gbell76.github.io/Horiseon-Refractor/', name: 'Horiseon', background: horiseon}} />
                <Project props={{gitHub: 'https://github.com/gbell76/Daily-Planner', deployed: 'https://gbell76.github.io/Daily-Planner/', name: 'Daily Planner', background: dailyPlanner}} />
                <Project props={{gitHub: 'https://github.com/gbell76/Random-Password-Generator', deployed: 'https://gbell76.github.io/Random-Password-Generator/', name: 'Random Password Generator', background: randomPasswordGenerator}} />
                <Project props={{gitHub: 'https://github.com/gbell76/NoteTaker', deployed: 'https://radiant-earth-46210-9197eabcf6ec.herokuapp.com/', name: 'Note Taker', background: noteTaker}} />
            </div>
        </>
    )
}