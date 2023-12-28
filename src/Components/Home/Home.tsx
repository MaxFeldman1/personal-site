import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

const inspLinks = [
                    "https://images.nationalgeographic.org/image/upload/v1638892282/EducationHub/photos/isaac-newton-kneller-painting.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Young_disraeli.jpg",
                    "https://cdn.britannica.com/14/84514-050-AF43A0D9/Alan-M-Turing-1951.jpg",
                    "https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/herzl.jpg?itok=G3G3cgDt&timestamp=1423765362",
                    "https://manhattanrarebooks.cdn.bibliopolis.com/pictures/2187.jpg?auto=webp&v=1546625453",
                    "https://dms-cf-09.dimu.org/image/022ynUn8ztQV?dimension=1200x1200"
                ];

const inspNames = ["Isaac Newton", "Benjamin D'Israeli", "Alan Turing", "Theodor Herzl", "Albert Einstein", "Haakon VII"];

const inspDescs = [
                    "Father of calculus, The man who discovered gravity",
                    "Prime minister of the United Kingdom 1868,1874-1880",
                    "Father of computer science",
                    "Instrumental in the founding of the state of Israel",
                    "Developed special and general relativity",
                    "King of Norway, a man of great honour and valour"
                ];

function Home() {
    let start = (new Date(2021, 10, 1)).getTime();
    let graduation = (new Date(2025, 4, 10)).getTime(); //May 10th, 2025
    let current = (new Date()).getTime();
    console.log("HOME RENDER", graduation, current, start);
    console.log(graduation - current, graduation - start);
    let pct = Math.min(100, 100 * (current - start) / (graduation - start));

    let inspCards = [];
    for (let i = 0; i < inspLinks.length; i++) {
        inspCards.push(
            <Col className='d-flex'>
                <Card className='flex-fill'>
                    <Card.Img variant="top" src={inspLinks[i]} />
                    <Card.Body>
                    <Card.Title>{inspNames[i]}</Card.Title>
                    <Card.Text>{inspDescs[i]}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    return (<>
        <h1>Max Feldman</h1>
        <br />
        <p className='homeCont'>
            This is the official personal webpage of Max Feldman, a Computer Science & Math major at UT Austin.
        </p>
        <br />
        <h4>Degree Progress {pct.toFixed(2)}%</h4>
        <ProgressBar now={pct} className='homeCont' />
        <br />
        <h3>Inspirations</h3>
        <Row lg={inspCards.length} className='homeCont'>
            {inspCards}
        </Row>
    </>);
}

export default Home;