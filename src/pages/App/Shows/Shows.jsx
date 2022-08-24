import './Shows.css'
import shows from './shows.jpg'

export default function Shows() {
    return (
        <main>
            <header>
                <h1 className='show-child'>
                    Come see us at a live show!<br /><br />
                    <h2>
                    Booking inquiries:<br />
                    <a href="mailto:downhilluprisebooking@gmail.com">downhilluprisebooking@gmail.com</a>
                    </h2>
                    </h1>
                <img className='show-child' src={shows} alt="Shows" />
            </header>
            <iframe
                className="widget_iframe"
                src="https://www.reverbnation.com/widget_code/html_widget/artist_6592672?widget_id=52&amp;posted_by=artist_6592672&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit"
                width="80%"
                height="550px"
                frameborder="0"
                scrolling="no"
                title="shows"
            />
        </main>

    )
}