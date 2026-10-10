import { Container, Title, Text, Badge, Grid, Card, Group, ThemeIcon, Box } from "@mantine/core";
import { SiLaravel,  SiNodedotjs, SiNestjs, SiReact } from "react-icons/si";
import { IconDatabase, IconLayout, IconServer } from "@tabler/icons-react";


// Top Core Highlighted Technologies
const coreTech = [
  {
    icon: SiReact,
    title: "ReactJS",
    subtitle: "Frontend Component UI",
    color: "#61DAFB",
    bgGlow: "rgba(97, 218, 251, 0.15)",
  },
  {
    icon: SiLaravel,
    title: "Laravel",
    subtitle: "v5.4 - v11 MVC Engine",
    color: "#FF2D20",
    bgGlow: "rgba(255, 45, 32, 0.15)",
  },
  {
    icon: SiNestjs,
    title: "NestJS",
    subtitle: "Scalable Node Architecture",
    color: "#E0234E",
    bgGlow: "rgba(224, 35, 78, 0.15)",
  },
  {
    icon: SiNodedotjs,
    title: "NodeJS",
    subtitle: "Asynchronous Runtime",
    color: "#5FA04E",
    bgGlow: "rgba(95, 160, 78, 0.15)",
  },
];

// Categorized Skill Badges
const categories = [
  {
    title: "Backend & Server Engine",
    icon: IconServer, // Import IconServer from @tabler/icons-react
    iconColor: "teal",
    skills: [
      "NodeJS",
      "NestJS",
      "ExpressJS",
      "PHP",
      "Laravel",
      "RESTful APIs",
    ],
  },
  
  {
    title: "Databases & DevOps",
    icon: IconDatabase,
    iconColor: "blue",
    skills: ["MySQL", "MSSQL", "PostgresSQL", "Eloquent ORM", "Docker", "Git"],
  },
  {
    title: "UI & Frontend Ecosystem",
    icon: IconLayout,
    iconColor: "orange",
    skills: ["React", "Angular", "Vue.js", "NextJS", "Typescript", "Mantine UI", "Tailwind CSS"],
  },
  
];

const TechStack = () => {
  return (
    <Container pt={80} pb={80} size="xl">
      {/* Header */}
      <Box ta="center" mb={50}>
        <Badge
          variant="outline"
          color="blue"
          size="lg"
          radius="xl"
          mb="sm"
          styles={{
            root: {
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              borderColor: "rgba(56, 189, 248, 0.2)",
              color: "#38bdf8",
              letterSpacing: "1px",
            },
          }}
        >
          CORE COMPETENCIES
        </Badge>
        <Title order={2} c="white" fz={{ base: 28, md: 40 }} fw={800}>
          SKILLS AND TECHNOLOGIES
        </Title>
        <Text c="dimmed" maw={650} mx="auto" mt="xs" fz="md">
          Proven tech stack deployed across high-availability booking engines, real-time barcoding modules, and e-learning platforms.
        </Text>
      </Box>

      {/* Top Section: Main Tech Cards */}
      <Grid mb={30}>
        {coreTech.map((tech, index) => {
          const IconComp = tech.icon;
          return (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
              <Card
                padding="xl"
                radius="lg"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                {/* Glowing Icon Outer Circle */}
                <Box
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: tech.bgGlow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  mb="md"
                >
                  <IconComp size={38} color={tech.color} />
                </Box>
                <Text c="white" fw={700} fz="xl">
                  {tech.title}
                </Text>
                <Text c="dimmed" fz="xs" fw={500} mt={4}>
                  {tech.subtitle}
                </Text>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>

      {/* Bottom Section: Categorized Skill Boxes */}
      <Grid>
        {categories.map((cat, index) => {
          const CatIcon = cat.icon;
          return (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card
                padding="lg"
                radius="lg"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  height: "100%",
                }}
              >
                <Group mb="lg">
                  <ThemeIcon
                    variant="light"
                    color={cat.iconColor}
                    size="lg"
                    radius="md"
                  >
                    <CatIcon size={20} />
                  </ThemeIcon>
                  <Text c="white" fw={700} fz="lg">
                    {cat.title}
                  </Text>
                </Group>

                <Group gap="xs">
                  {cat.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="filled"
                      size="lg"
                      radius="sm"
                      styles={{
                        root: {
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          color: "#94a3b8",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          textTransform: "none",
                          fontFamily: "monospace",
                          fontWeight: 500,
                          padding: "10px 12px",
                        },
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </Group>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TechStack;