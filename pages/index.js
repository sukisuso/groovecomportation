import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Colaborators from "../components/colaborators";

const Home = () => {
  return (
    <>
      <Head>
        <title>Groovemusic Corporation</title>
        <meta
          name="description"
          content="Groovemusic coporation is a contact dj's comunity"
        />
        <link rel="icon" href="/img/logo_web.jpeg" />
      </Head>
      <Navbar />
      <div id="groove">
        <Hero />
      </div>
      <div id="nosotros" className="mt-32">
        <SectionTitle
          pretitle="¿Quiénes formamos Groovemusic Corporation?"
          title="Nosotros">
          ¡Únete a nuestra Comunidad de DJs Multidisciplinarios! Desde el vibrante ritmo del House, pasando por la energía del Techno hasta el hipnótico ritmo del trance, estamos aquí para hacer que cada momento sea inolvidable. Somos más que un grupo, somos una familia dedicada a facilitar la vida de aquellos que buscan disfrutar de la mejor música.
        </SectionTitle>
      </div>

      <Testimonials />

      <div id="productos" className="mt-32">
        <SectionTitle
          pretitle="¿Estás buscando algun disco o vinilo?"
          title="Productos">
          Pronto tendrás acceso a nuestras sesiones más especiales , canciones de gratis descarga...y mucho más.
          <a href="https://soundcloud.com/groovemusiccorporation" className="pl-1 underline text-blue-400 italic">soundcloud</a>
        </SectionTitle>
      </div>
      <Benefits imgPos="right" data={benefitTwo} />


      <div id="contacto" className="mt-32">
        <SectionTitle
          pretitle="¿Necesitas algun Dj para tu evento?"
          title="Contacto">
          Si deseas contactar con nosotros no dudes en enviarnos un mail a:
          <a href="mailto:groovemusiccorporation@hotmail.com" className="pl-1 underline text-blue-400 italic">groovemusiccorporation@hotmail.com</a>
        </SectionTitle>
      </div>
      <Video />

      <div id="colaboradores" className="mt-32">
        <SectionTitle
          pretitle="¿Quieres ayudar con el proyecto?"
          title="Colaboradores">
        </SectionTitle>
      </div>
      <Colaborators />

      <div className="mt-32">
        <SectionTitle
          pretitle="Un poquito de nosotros"
        >
          "Concepto Groovemusic"
          <br />

          Eventos que activarán todos tus sentidos ....
          <br />
          ...............Música que llega al Alma...............
          <br />
          El movimiento Groovemusic arranca en el año 2000... su primera fase consistió en la realización de Eventos, contratación de Deejays, y su tienda Online Groovemusic Records.
          <br />
          Enero de 2024
          Tras años de experiencia en el mundo Deejay, llegó el momento de renovar ideas ....
          <br />
          Nacen nuevos proyectos para el grupo ...
          <br />
          ***Groovemusic Deejays Team
          Equipo Official DJ by Groovemusic Corporation
          <br />
          <br />
          <a href="https://www.facebook.com/GroovemusicDeejaysTeam" target="_blank" className="pl-1 underline text-blue-400 italic">https://www.facebook.com/GroovemusicDeejaysTeam</a>
          <br />
          <br />
          ***Groovemusic Talent Pool
          Enfadado para ayudar, impulsar y lanzar a nuevos Deejays y Productores de música electrónica
          <br />
          <br />
          <a href="https://www.facebook.com/GroovemusicTalentPool" target="_blank" className="pl-1 underline text-blue-400 italic">https://www.facebook.com/GroovemusicTalentPool</a>
          <br />
          <br />
          ***La comunidad de Groovemusic Corporation
          El lugar que todo Artista necesita
          <br />
          <br />
          <a href="https://www.facebook.com/LacomunidaddeGroovemusiccorporation" target="_blank" className="pl-1 underline text-blue-400 italic">https://www.facebook.com/LacomunidaddeGroovemusiccorporation</a>

          <br />
          <br />
          Todo ello por y para que, el público en general, pueda disfrutar del concepto GROOVEMUSIC
          <br />
          Si estás empezando o llevas un tiempo intentando llegar a tu objetivo...
          <br />
          En Groovemusic Corporation Queremos ayudarte...., No importa tu edad, nunca es tarde para hacer realidad tus sueños...
          <br />
          Creamos ideas,
          <br />
          Fabricamos soluciones,
          <br />
          ¡ Hacemos el bien y no miramos a quién !
          <br />
          Comienza el camino...
          <br />
          Bienvenid@s
          <br />
          ¡¡¡ Que comience el Juego !!!
          <br />
          GRUPO <br />

          Groovemusic Corporation
          <br />
          <br /> <br />
          Próximamente.....
          <br />
          Nuevos Proyectos están ya en marcha y muy pronto verán la luz....,
          únete a la familia Groovemusic Corporation.



        </SectionTitle>
      </div>
      <Footer />
    </>
  );
}

export default Home;