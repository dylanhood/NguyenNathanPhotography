import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.png';
import GreenCtgImg from '../images/greenctg.JPG';
import CoinTrackerImg from '../images/cointracker.JPG';
import CavinImg from '../images/cavinimg.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'Kameron Hergins',
    desc: 'To describe Kam, he is one of my frequent models',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Kayln Ward',
    desc:
      'A random person I asked to take pictures of and she is pretty cool and genuine.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Micah Sarmiento',
    desc:
      'He is considered to be one of my first college friends! He is a very talented singer who is very humble and has a great sense of humour!',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Drew Sallman',
    desc:
      'This picture was in the fall of 2020. Drew is considered to be one of my good high school friends.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Dylan Hood',
    desc:
      'This picture of Dylan Hood was for his LinkedIn profile. He is one of my good friends who is trying to learn more about coding!',
    img: ProjectImg,
  },
];

export default projects;
