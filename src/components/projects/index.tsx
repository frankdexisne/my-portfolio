import {
  Grid,
  Container,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  List,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import doffImage from "../../assets/projects/doff.png";
import lexmondImage from "../../assets/projects/lexmond.png";
import southflorida from "../../assets/projects/south-florida.png";
import telehealthImage from "../../assets/projects/telehealth.png";
import msmisImage from "../../assets/projects/msmis.png";
import projectlerImage from "../../assets/projects/projectler.jpeg";
import wordpress from "../../assets/projects/wordpress.gif";
import cornerstone from "../../assets/projects/cornerstone.webp";

interface IProject {
  image: string;
  title: string;
  description: string | React.ReactNode;
  link?: string;
  role: string;
  otherSection: React.ReactNode;
  buttonText?: string;
}

const projects: IProject[] = [
  {
    image: doffImage,
    title: "Daily Overland Freight Forwarder (Website & Mobile App)",
    description:
      "Company website and mobile app with integrated online booking, live parcel tracking and tracing, and a streamlined quotation request system.",
    link: "https://dailyoverland.com",
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 6, JQuery, Javascript, Vue, Framework7 MySQL <br />{" "}
          <b>UI Library</b> <br /> Regna, Gentellela
        </Text>
      </>
    ),
  },
  {
    image: doffImage,
    title: "Daily Overland Freight Forwarder (Manifest Barcoding)",
    description:
      "A barcoding module with three phases—dispatching, receiving, and releasing—that tracks the location of customer parcels in real time.",
    link: "https://dailyoverland.com",
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          PHP, JQuery, Javascript, MySQL <br /> <b>UI Library</b> <br /> Regna,
          Gentellela
        </Text>
      </>
    ),
  },
  {
    image: cornerstone,
    title: "Cornerston Marketing Solution Inc. Wordpress Projects",
    description: (
      <List fz="sm" spacing={3}>
        <List.Item>
          <a
            href="https://sfccooling.com/"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            South Florida Crane and Cooling Air Conditioning and Heating
          </a>
        </List.Item>
        <List.Item>
          {" "}
          <a
            href="https://www.lepcofs.com/"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            Lepco HVAC & Food Service Solutions
          </a>
        </List.Item>
        <List.Item>
          {" "}
          <a
            href="https://www.islandaireac.com/"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            Island Aire
          </a>
        </List.Item>
        <List.Item>
          <a
            href="https://www.callairsolutions.com/"
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            Air Solutions
          </a>
        </List.Item>
      </List>
    ),
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          PHP, Wordpress, MySQL <br />
        </Text>
      </>
    ),
  },
  {
    image: lexmondImage,
    title: "Lexmond Online Tutorial Services",
    description:
      "Interactive online tutorials, practice tests, and expert guidance for aspiring attorneys preparing for the Bar",
    link: "https://app.lexmond.ph/",
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 10, ReactJS, Typescript, MySQL <br /> <b>
            UI Library
          </b> <br /> Mantine UI Library
        </Text>
      </>
    ),
  },
  {
    image: telehealthImage,
    title: "Telehealth Information System with integration to IHOMIS",
    description:
      "An innovative “Call Center for Health” service that captures patient consultations through an online platform and automatically syncs records with iHOMIS (Integrated Hospital Operations and Management Information System).",
    link: "https://lexmond.ph",
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL,
          MSSQL <br /> <b>UI Library</b> <br /> Mantine UI Library
        </Text>
      </>
    ),
    buttonText: "View Screenshots",
  },
  {
    image: msmisImage,
    title: "Material and Supply Management Inventory System",
    description:
      "Developed a responsive inventory management system for hospitals, enabling real-time monitoring of medical supplies and equipment, automated replenishment, and precise record-keeping across all units.",
    link: "https://lexmond.ph",
    role: "Full Stack Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL{" "}
          <br /> <b>UI Library</b> <br /> Mantine UI Library
        </Text>
      </>
    ),
    buttonText: "View Screenshots",
  },
  {
    image: projectlerImage,
    title: "Projectler",
    description:
      "Projectler App streamlines task assignment, progress tracking, and team collaboration for smoother project execution.",
    link: "https://app.projectler.com",
    role: "Backend Developer",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          NodeJS, ExpressJS, NextJS, Typescript, MySQL <br /> <b>
            UI Library
          </b>{" "}
          <br /> Material UI Library
        </Text>
      </>
    ),
  },
];

interface ProjectItemProps {
  project: IProject;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={project.image} h={160} alt={project.title} />
      </Card.Section>
      <div className="min-h-[80px]">
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{project.title}</Text>
        </Group>
      </div>

      <div className="min-h-[120px]">
        <Text size="sm" c="dimmed">
          {project.description}
        </Text>
      </div>

      <div className="min-h-[150px]">{project.otherSection}</div>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        component="a"
        target="_blank"
        href={project.link}
        disabled={project.link === undefined}
      >
        {project.buttonText ? project.buttonText : "View Website"}
      </Button>
    </Card>
  );
};

const Projects = () => {
  return (
    <Container
      size="xl"
      py={70}
      className="flex flex-col justify-center items-center"
    >
      <Title c="white">MY PROJECTS</Title>

      <Carousel
        mt={40}
        slideSize="30%"
        slideGap="md"
        controlsOffset="sm"
        withControls
        withIndicators={false}
      >
        {projects.map((project, index) => (
          <Carousel.Slide key={index}>
            <ProjectItem project={project} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default Projects;
