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
} from "@mantine/core";
import doffImage from "../../assets/projects/doff.png";
import lexmondImage from "../../assets/projects/lexmond.png";
import southflorida from "../../assets/projects/south-florida.png";
import telehealthImage from "../../assets/projects/telehealth.png";
import msmisImage from "../../assets/projects/msmis.png";
import projectlerImage from "../../assets/projects/projectler.jpeg";

interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
  otherSection: React.ReactNode;
}

const projects: IProject[] = [
  {
    image: doffImage,
    title: "Daily Overland Freight Forwarder Company Website",
    description:
      "Company website with integrated online booking, live parcel tracking and tracing, and a streamlined quotation request system.",
    link: "https://dailyoverland.com",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 6, JQuery, Javascript, MySQL <br /> <b>
            UI Library
          </b> <br /> Regna, Gentellela
        </Text>
      </>
    ),
  },
  {
    image: lexmondImage,
    title: "Lexmond Online Tutorial Services",
    description:
      "Interactive online tutorials, practice tests, and expert guidance for aspiring attorneys preparing for the Bar",
    link: "https://lexmond.ph",
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
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL,
          MSSQL <br /> <b>UI Library</b> <br /> Mantine UI Library
        </Text>
      </>
    ),
  },
  {
    image: msmisImage,
    title: "Material and Supply Management Inventory System",
    description:
      "Developed a responsive inventory management system for hospitals, enabling real-time monitoring of medical supplies and equipment, automated replenishment, and precise record-keeping across all units.",
    link: "https://lexmond.ph",
    otherSection: (
      <>
        <Text size="sm" c="dimmed" mt={20}>
          <b>Technology </b> <br />
          Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL{" "}
          <br /> <b>UI Library</b> <br /> Mantine UI Library
        </Text>
      </>
    ),
  },
  {
    image: projectlerImage,
    title: "Projectler",
    description:
      "Projectler App streamlines task assignment, progress tracking, and team collaboration for smoother project execution.",
    link: "https://app.projectler.com",
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
      >
        View Website
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
      <Title c="white">Projects</Title>
      <Grid mt={40}>
        {projects.map((project) => (
          <Grid.Col span={3}>
            <ProjectItem project={project} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
