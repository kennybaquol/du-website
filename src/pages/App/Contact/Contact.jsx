import './Contact.css'
import contact from './contact.jpg'

export default function Contact() {
    return (
        <main className='contact-page'>
            <img src={contact} alt="Contact" />
            <div>
                <p>Downhill Uprise offers up to 4 hours of cover songs that promote high energy, dancing, and food/drink sales. Whether it's an intimate acoustic venue, full club performance, or party in your backyard, we've got the entertainment covered. Full sound system and lights can also be provided by request.</p>
                <h2>
                    Booking inquiries:<br />
                    <a href="mailto:downhilluprisebooking@gmail.com">
                        downhilluprisebooking@gmail.com
                    </a>
                </h2>
            </div>
            <div className='socials'>
                <h2>Follow us on socials!</h2>
                <h3>Facebook | <a href="https://www.facebook.com/downhilluprise">DownhillUprise</a></h3>
                <h3>Instagram | <a href="https://www.instagram.com/downhilluprise/">DownhillUprise</a></h3>
                <h3>Spotify | <a href="https://open.spotify.com/artist/7mUpGvImwfXocungr7DLxf?si=urFq89F2SIugLFRMg7ZAMg">Downhill Uprise</a></h3>
            </div>
        </main>

    )
}