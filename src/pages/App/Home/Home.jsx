import './Home.css'
import home from './home.JPG'

export default function Home() {
    return (
        <main>
            <div className='home-page'>
                <p className='home-child'>As the music world constantly changes, Downhill Uprise aggressively strives to be the high-energy, spirited band that rock music longs to keep alive. Formed in 2019, 4 passionate musicians strive tirelessly to prove that rock and its soul are alive and well. Their songs are often met with powerful and gritty vocals, ripping guitar licks, rumbling bass, and thundering, yet precise, drumming. Influenced by bands like Metallica, Buckcherry, Avenged Sevenfold, and Breaking Benjamin, these 4 Sovereigns of String are on a mission to contribute to a new chapter in rock history.</p>
                <img className='home-child' src={home} alt="Home" />
            </div>


        </main>
    )
}