import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsVerticalIcon,
  MusicalNoteIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/vinilo.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Productos destacados",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Accede a nuestra collección de vinilos",
      desc: "Nuestro catalogo <a style='color: blue;text-decoration: underline;font-weight: 900;cursor: pointer;' href='https://www.discogs.com/es/user/GroovemusicRecords' target='_blank'>Ver</a>",
      icon: <MusicalNoteIcon />,
    },
    {
      title: "Disponibles en ebay",
      desc: "Si estás interesado <a style='color: blue;text-decoration: underline;font-weight: 900;cursor: pointer;' href='https://www.ebay.es/usr/groovemusicrecords' target='_blank'>Visitanos</a>",
      icon: <AdjustmentsVerticalIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
