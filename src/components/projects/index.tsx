import React from "react";
import {
  Container,
  Card,
  Image,
  Text,
  Button,
  Title,
  List,
  Grid,
  Badge,
  Box,
  Group,
  Stack,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

import doffImage from "../../assets/projects/doff.png";
import lexmondImage from "../../assets/projects/lexmond.png";
import telehealthImage from "../../assets/projects/telehealth.png";
import msmisImage from "../../assets/projects/msmis.png";
import projectlerImage from "../../assets/projects/projectler.jpeg";
import veriqrImage from "../../assets/projects/dvote-logo.png";
import cornerstone from "../../assets/projects/cornerstone.webp";

interface IProject {
  image: string;
  categoryBadge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  link?: string;
  role: string;
  tech: string;
  uiLibrary?: string;
  integration?: string;
  buttonText?: string;
}

const projects: IProject[] = [
  {
    image: doffImage,
    categoryBadge: "WEB & MOBILE APP",
    badgeColor: "blue",
    title: "Daily Overland Freight Forwarder",
    subtitle: "Full-Cycle Freight Booking & Live Parcel Tracking",
    description:
      "Comprehensive freight company platform with online customer booking, live parcel tracking and tracing across transport hubs, and a streamlined quotation request automation system.",
    link: "https://dailyoverland.com",
    role: "Full Stack Developer",
    tech: "Laravel 6, JQuery, Javascript, Vue, Framework7, MySQL",
    uiLibrary: "Regna, Gentellela Admin Suite",
    buttonText: "View System Details",
  },
  {
    image: doffImage,
    categoryBadge: "LOGISTICS BARCODING",
    badgeColor: "teal",
    title: "Manifest Barcoding System",
    subtitle: "Daily Overland Freight Logistics Pipeline",
    description:
      "An industrial-grade barcoding module with three mission-critical operational phases—Dispatching, Receiving, and Releasing—enabling accurate real-time location monitoring for thousands of daily parcels.",
    link: "https://dailyoverland.com",
    role: "Full Stack Developer",
    tech: "PHP, JQuery, Javascript, MySQL",
    uiLibrary: "Regna, Gentellela",
    buttonText: "View System Details",
  },
  {
    image: cornerstone,
    categoryBadge: "WORDPRESS & CMS ENGINEERING",
    badgeColor: "cyan",
    title: "Cornerstone Marketing Solutions",
    subtitle: "Multi-Client Commercial Digital Ecosystem",
    description: (
      <List fz="sm" spacing={4} c="gray.3" withPadding icon={<span style={{ color: "#38bdf8" }}>•</span>}>
        <List.Item>
          <a href="https://sfccooling.com/" target="_blank" rel="noreferrer" style={{ color: "#f8fafc", textDecoration: "none" }}>
            <b>South Florida Crane and Cooling</b> Air Conditioning & Heating
          </a>
        </List.Item>
        <List.Item>
          <a href="https://www.lepcofs.com/" target="_blank" rel="noreferrer" style={{ color: "#f8fafc", textDecoration: "none" }}>
            <b>Lepco HVAC</b> & Food Service Solutions
          </a>
        </List.Item>
        <List.Item>
          <a href="https://www.islandaireac.com/" target="_blank" rel="noreferrer" style={{ color: "#f8fafc", textDecoration: "none" }}>
            <b>Island Aire</b> & Air Solutions Network
          </a>
        </List.Item>
      </List>
    ),
    role: "Full Stack Developer",
    tech: "PHP, WordPress Core, Custom Plugins, MySQL",
    buttonText: "View Case Study",
  },
  {
    image: lexmondImage,
    categoryBadge: "EDTECH & FINTECH",
    badgeColor: "grape",
    title: "Lexmond Online Tutorial Services",
    subtitle: "2025 Bar Exam Preparation & Scheduling Portal",
    description:
      "Interactive online tutorial and bar examination review scheduling portal, complete with automated curriculum delivery and secure payment processing through Paymongo.",
    link: "https://www.facebook.com/lexmond.ph",
    role: "Full Stack Developer",
    tech: "Laravel 10, React, MySQL",
    uiLibrary: "Mantine UI Library",
    integration: "Paymongo Payment Gateway",
    buttonText: "View System Details",
  },
  {
    image: projectlerImage, // Make sure projectlerImage is imported at the top
    categoryBadge: "PROJECT MANAGEMENT",
    badgeColor: "orange",
    title: "Projectler",
    subtitle: "Contractor Lead & Estimation Management Platform",
    description:
      "A specialized project management web application engineered for contractors to monitor sales leads, streamline project estimations, and manage building projects end-to-end.",
    link: "https://app.projectler.com",
    role: "Backend Developer",
    tech: "NodeJS, ExpressJS, NextJS, Typescript, MySQL",
    uiLibrary: "Material UI Library",
    buttonText: "View System Details",
  },
  {
    image: telehealthImage,
    categoryBadge: "HEALTHCARE & INTEGRATIONS",
    badgeColor: "indigo",
    title: "Telehealth Information System (iHOMIS)",
    subtitle: "Real-time Patient Consultation & EHR Sync Engine",
    description:
      "An innovative 'Call Center for Health' service capturing online consultations with direct sync protocols to iHOMIS (Integrated Hospital Operations and Management Information System).",
    link: "https://www.facebook.com/BRHMCTeleHealthHighway",
      role: "Full Stack Developer",
    tech: "Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL, MSSQL",
    uiLibrary: "Mantine UI Library",
    buttonText: "View System Details",
  },
  {
    image: msmisImage,
    categoryBadge: "ENTERPRISE INVENTORY",
    badgeColor: "green",
    title: "Material & Supply Inventory System",
    subtitle: "Hospital Medical Equipment & Asset Monitoring",
    description:
      "Responsive hospital inventory platform enabling real-time monitoring of medical supplies, automated replenishment workflows, and multi-unit audit logging.",
    role: "Full Stack Developer",
    tech: "Laravel 11, ReactJS, Typescript, NodeJS, Express, Socket.io, MySQL",
    uiLibrary: "Mantine UI Library",
    buttonText: "Request System Demo",
  },
  {
    image: veriqrImage, // Import your preview image asset at the top
    categoryBadge: "EMPLOYEE VERIFICATION",
    badgeColor: "cyan",
    title: "VeriQR Verification Portal",
    subtitle: "Outsourced Workforce Status & Deployment Verification",
    description:
      "A web verification portal designed to instantly validate the active employment and deployment status of outsourced personnel across client sites.",
    link: "https://veriqr.dvotesoftware.com/",
    role: "Full Stack Developer",
    tech: "NestJS, ReactJS, Typescript, Docker, MySQL",
    uiLibrary: "Mantine UI Library",
    buttonText: "View System Details",
  }
];

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      radius="lg"
      padding="xl"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        {/* Card Header Preview Image with Overlay Badge */}
        <Box pos="relative" mb="md">
          <Badge
            pos="absolute"
            top={12}
            left={12}
            style={{ zIndex: 5 }}
            size="md"
            radius="sm"
            color={project.badgeColor}
            variant="filled"
          >
            {project.categoryBadge}
          </Badge>

          <Image
            src={project.image}
            h={180}
            radius="md"
            alt={project.title}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.08)",
              filter: "brightness(0.9)",
            }}
          />
        </Box>

        {/* Title & Subtitle */}
        <Title order={3} c="white" fz={22} fw={700}>
          {project.title}
        </Title>
        <Text c="cyan.4" fz="xs" fw={600} mt={2} mb="sm">
          {project.subtitle}
        </Text>

        {/* Main Body Description */}
        <Box mih={80} mb="md">
          {typeof project.description === "string" ? (
            <Text fz="sm" c="gray.4" lh={1.5}>
              {project.description}
            </Text>
          ) : (
            project.description
          )}
        </Box>

        {/* Tech Stack Details */}
        <Stack gap={4} mt="md" pt="sm" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
          <Text fz="xs" c="gray.5" style={{ fontFamily: "monospace" }}>
            <strong style={{ color: "#94a3b8" }}>TECHNOLOGY:</strong> {project.tech}
          </Text>
          {project.uiLibrary && (
            <Text fz="xs" c="gray.5" style={{ fontFamily: "monospace" }}>
              <strong style={{ color: "#94a3b8" }}>UI LIBRARY:</strong> {project.uiLibrary}
            </Text>
          )}
          {project.integration && (
            <Text fz="xs" c="gray.5" style={{ fontFamily: "monospace" }}>
              <strong style={{ color: "#38bdf8" }}>INTEGRATION:</strong> {project.integration}
            </Text>
          )}
        </Stack>
      </div>

      {/* Action Button */}
      <Button
        component="a"
        href={project.link || "#"}
        target="_blank"
        disabled={!project.link && !project.buttonText?.includes("Demo")}
        fullWidth
        mt={25}
        size="md"
        radius="md"
        variant="gradient"
        gradient={{ from: "blue.6", to: "indigo.6" }}
        rightSection={<IconExternalLink size={16} />}
      >
        {project.buttonText || "View Website"}
      </Button>
    </Card>
  );
};

const Projects = () => {
  return (
    <Container size="xl" py={90}>
      {/* Top Section Header */}
      <Group justify="space-between" align="flex-end" mb={40}>
        <Box maw={600}>
          <Title order={2} c="white" fz={{ base: 32, md: 44 }} fw={900}>
            MY PROJECTS
          </Title>
          <Text c="gray.4" fz="md" mt={6}>
            Real-world enterprise applications built with high standards of architecture, security, and responsive UI delivery.
          </Text>
        </Box>

        <Text c="dimmed" fz="xs" style={{ fontFamily: "monospace" }}>
          Featured work from actual production deployments
        </Text>
      </Group>

      {/* 2x2 Grid Layout */}
      <Grid gutter="lg">
        {projects.map((project, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6 }}>
            <ProjectCard project={project} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;