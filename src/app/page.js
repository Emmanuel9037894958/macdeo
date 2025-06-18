// import FormInput from '../Components/FormInput';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import NavBar from '../Components/NavBar';
import { EmblaCarousel } from '../EmblaCarousel';
import MiddleRange from '../Components/MiddleRange';
import SecondRange from '../Components/SecondRange';
import LastNote from '../Components/LastNote';
import Impact from '@/Components/Impact';
import FormInput from '@/Components/FormInput';

export default function Home() {
  return (
    <div>
       {/* <NavBar /> */}
        <EmblaCarousel />
        <Hero />
        <MiddleRange />
        <SecondRange />
        <FormInput />
        <Impact />
        <LastNote />
        {/* <Footer /> */}
    </div>
  );
}
