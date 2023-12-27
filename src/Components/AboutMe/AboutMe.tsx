import { Image, ListGroup, ListGroupItem} from 'react-bootstrap';
import './AboutMe.scss';

const mainPic = require("../../assets/taqueria.jpeg");

function AboutMe() {
    return (<>
        <h1>About Me</h1>
        <br />
        <div className='imgDiv'>
            <Image src={mainPic} thumbnail />
            <h6>@ a taqueria in Mexico City, Mexico</h6>
        </div>
        <p className='abmCont'>
            I am a Computer Science and Mathematics major at UT Austin.
            Unlike many here I was born in Austin, other than a few years in Houston, I have always lived in the capital of Texas.
            I began my journey as a programmer in my freshman year of high school, from the moment I wiped my school laptop's OS and installed linux I have never looked back.
            I have a strong passion for foreign languages; when I am not working on school work or some side project you can find me working on my Norwegian or Hebrew (I am persuing a minor in the Hebrew language).
            I also believe in the saying that a strong body is a strong mind, over the past year and a half I have worked hard to not just be the endurance athlete I was in high school but also develop as a strength athlete.
            In spare bits of time here and there I do my best to keep track of global financial markets and current events.
            Hobbies aside, I believe that the most important task for me at my current age is to amass as much knowledge of computer science and mathematics as possible.
            I have a particularly strong interest in pure mathematics and I plan to study analysis (real and complex), topology, and abstract algebra while still in college.
        </p>

        <h3>Personal Records</h3>
        <ListGroup className='abmCont'>
            <ListGroupItem> <h6><b>1600m:</b> 4:57</h6> </ListGroupItem>
            <ListGroupItem> <h6><b>5000m:</b> 17:21</h6> </ListGroupItem>
            <ListGroupItem> <h6><b>half marathon:</b> 1:18:53</h6> </ListGroupItem>
            <ListGroupItem> <h6><b>bench press:</b> 285lbs</h6> </ListGroupItem>
            <ListGroupItem> <h6><b>squat:</b> 335lbs</h6> </ListGroupItem>
            <ListGroupItem> <h6><b>longest programming session:</b> 19 hours</h6> </ListGroupItem>
        </ListGroup>
        <br />
        <div className='abmCont quote'>
            <p className='quoteCont'><i>"Nei!"</i></p>
            <p className='quoteRef'>- Haakon VII</p>
        </div>
        <br />
    </>);
}

export default AboutMe;