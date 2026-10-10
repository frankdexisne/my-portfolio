import {
  Title,
  Text,
  Container,
  Group,
  Button,
  Badge,
  Card,
  Grid,
  ThemeIcon,
  Stack,
} from "@mantine/core";
import {
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconClock,
  IconFileText,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <Container size="xl" py={80} style={{ textAlign: "center" }}>
      {/* Top Header Section */}
      <Title c="white" fz={{ base: 36, md: 48 }} fw={900}>
        Contact
      </Title>
      <Text c="gray.3" fz="lg" mt={10}>
        Interested in working together? Let's have a conversation.
      </Text>

      {/* Location Badge */}
      <Group justify="center" mt={20} mb={50}>
        <Badge
          variant="outline"
          color="gray"
          size="lg"
          radius="xl"
          leftSection={<IconMapPin size={14} color="#38bdf8" />}
          styles={{
            root: {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.15)",
              textTransform: "none",
              fontWeight: 500,
              color: "#94a3b8",
              padding: "5px 18px",
            },
          }}
        >
          Guinobatan, Albay, Philippines, 4503
        </Badge>
      </Group>

      {/* Main Contact Card */}
      <Card
        mx="auto"
        maw={900}
        radius="lg"
        padding="xl"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          textAlign: "left",
        }}
      >
        <Grid align="center" gutter={40}>
          {/* Left Column: Info Text & Badges */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={3} c="white" fz={26} fw={700}>
              Let's build something great.
            </Title>
            <Text c="gray.4" fz="sm" mt="xs" lh={1.6}>
              Whether you need an enterprise web application, API integration,
              or an end-to-end full-stack platform, I'm ready to bring your vision into reality.
            </Text>

            <Stack gap="xs" mt={25}>
              {/* Email Info Tag */}
              <Group gap="xs">
                <ThemeIcon size={32} radius="md" color="blue" variant="light">
                  <IconMail size={16} />
                </ThemeIcon>
                <Text
                  fz="sm"
                  c="gray.3"
                  fw={500}
                  style={{ fontFamily: "monospace" }}
                >
                  frankdexisne1692@gmail.com
                </Text>
              </Group>

              {/* Response Time Tag */}
              <Group gap="xs">
                <ThemeIcon size={32} radius="md" color="cyan" variant="light">
                  <IconClock size={16} />
                </ThemeIcon>
                <Text
                  fz="sm"
                  c="gray.3"
                  fw={500}
                  style={{ fontFamily: "monospace" }}
                >
                  Response Time: Within 24 Hours
                </Text>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Column: Action Buttons */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              {/* Primary Email CTA */}
              <Button
                size="lg"
                radius="md"
                variant="gradient"
                gradient={{ from: "blue.6", to: "indigo.6" }}
                component="a"
                href="mailto:frankdexisne1692@gmail.com"
                fullWidth
              >
                Send Direct Email
              </Button>

              {/* GitHub Button */}
              <Button
                size="md"
                radius="md"
                variant="outline"
                color="gray"
                leftSection={<IconBrandGithub size={18} />}
                component="a"
                target="_blank"
                href="https://github.com/frankly1692"
                fullWidth
                styles={{
                  root: {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    color: "#f8fafc",
                  },
                }}
              >
                GitHub Profile 1
              </Button>

              <Button
                size="md"
                radius="md"
                variant="outline"
                color="gray"
                leftSection={<IconBrandGithub size={18} />}
                component="a"
                target="_blank"
                href="https://github.com/frankdexisne"
                fullWidth
                styles={{
                  root: {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    color: "#f8fafc",
                  },
                }}
              >
                GitHub Profile 2
              </Button>

              {/* LinkedIn Button */}
              <Button
                size="md"
                radius="md"
                variant="outline"
                color="gray"
                leftSection={<IconBrandLinkedin size={18} color="#0077b5" />}
                component="a"
                target="_blank"
                href="https://www.linkedin.com/in/frankly-dexisne-227256148/"
                fullWidth
                styles={{
                  root: {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    color: "#f8fafc",
                  },
                }}
              >
                LinkedIn Network
              </Button>

              {/* View Resume Button */}
              <Button
                size="md"
                radius="md"
                variant="outline"
                color="gray"
                leftSection={<IconFileText size={18} color="#38bdf8" />}
                component="a"
                target="_blank"
                href="https://docs.google.com/document/d/1U0uPguPH152eajTj7eWLfWp_iNPmuer40_NrYUDErts/edit?usp=drive_link"
                fullWidth
                styles={{
                  root: {
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    color: "#f8fafc",
                  },
                }}
              >
                View Resume
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default Contact;