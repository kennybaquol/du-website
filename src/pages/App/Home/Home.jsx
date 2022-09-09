import './Home.css'
import home from './home.JPG'

export default function Home() {
    return (
        <main>
            <div className='home-page'>
                <p className='home-child'>If you're looking for a great 90's and 00's Rock experience, then you've found it! Downhill Uprise will bring the best high energy show to any venue or event. Their takes on your favorite classics are often met with powerful and gritty vocals, ripping guitar licks, rumbling bass, and precise thundering of drums. This will bring you back to the best days of Stone Temple Pilots, Metallica, Pearl Jam, and so much more! With great setlists that will keep you on your feet and singing all night! Join us when we host an amazing night of your favorite rock songs.
</p>
                <img className='home-child' src={home} alt="Home" />
            </div>


        </main>
    )
}