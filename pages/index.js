import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <>
      <Head>
        <title>Groove Music Corporation</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="groove">
        <Hero />
      </div>
      <div id="nosotros" className="mt-32">
        <SectionTitle
          pretitle="Quienes formamos Groove Music Corporation?"
          title="Nosotros">
          ¡Únete a nuestra Comunidad de DJs Multidisciplinarios! Desde el vibrante ritmo del House, pasando por la energía del Techno hasta el contagioso sabor del Reggaetón, estamos aquí para hacer que cada momento sea inolvidable. Somos más que un grupo, somos una familia dedicada a facilitar la vida de aquellos que buscan disfrutar de la mejor música.
        </SectionTitle>
      </div>

      <Testimonials />

      <div id="productos" className="mt-32">
        <SectionTitle
          pretitle="Estás buscando algun disco o vinilo?"
          title="Productos">
          ¡Pronto tendrás acceso a una selección exclusiva de vinilos que están disponibles para la venta! Además, podrás disfrutar de nuestras sesiones más solicitadas, para ofrecerte una experiencia musical única.
        </SectionTitle>
      </div>
      <Benefits imgPos="right" data={benefitTwo} />

      <div id="contacto" className="mt-32">
        <SectionTitle
          pretitle="Necesitas algun Dj para tu evento?"
          title="Contacto">
          Si deseas contactar con nosotros no dudes en enviarnos un mail a:
          <a href="mailto:groovemusiccorporation@hotmail.com" className="pl-1 underline text-blue-400 italic">groovemusiccorporation@hotmail.com</a>
        </SectionTitle>
      </div>
      <Video />
      <div id="contacto" className="mt-32">
        <SectionTitle
          pretitle="Un poquito de nosotros"
        >
          Groovemusic Corporation ®️
          El 11 de enero de 2024, Resurge con su CEO Vicente Groove A.K.A Vicentekno Pitch, un apasionado de la música electrónica y el marketing, decide revivir el proyecto que inició en 2004. Esta vez, se enfoca en utilizar su vasta experiencia para ayudar, impulsar y lanzar a las nuevas generaciones de DJs y productores de música electrónica.

          Si estás dando tus primeros pasos o llevas tiempo intentando alcanzar tus objetivos, en Groovemusic Corporation estamos aquí para ayudarte. No importa tu edad, nunca es tarde para perseguir tus sueños.

          <br />
          Bienvenid@s... comienza el camino.
        </SectionTitle>
      </div>
      <Footer />
    </>
  );
}

export default Home;