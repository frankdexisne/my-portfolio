import {
  IconCheck,
  IconMapPin,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import {
  Container,
  List,
  Text,
  ThemeIcon,
  Title,
  Grid,
  Badge,
  Box,
} from "@mantine/core";
import image from "../../assets/my-profile.png";
import classes from "./header.module.css";
import LazyImage from "../base/LazyImage";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Container size="xl">
      <Grid py={{ base: 60, md: 130 }} align="center">
        {/* Left Section - Text Info */}
        <Grid.Col
          span={{ base: 12, md: 7 }}
          order={{ base: 2, md: 1 }}
          style={{ textAlign: isMobile ? "center" : "left" }}
        >
          {/* Location Badge */}
          <Badge
            variant="outline"
            color="gray"
            size="lg"
            radius="xl"
            leftSection={<IconMapPin size={14} color="#38bdf8" />}
            mb="md"
            styles={{
              root: {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.15)",
                textTransform: "none",
                fontWeight: 500,
                color: "#94a3b8",
              },
            }}
          >
            Guinobatan, Albay, Philippines
          </Badge>

          {/* Main Title */}
          <Title className={classes.title} c="white" fz={{ base: 36, md: 52 }} fw={900}>
            FRANKLY D.{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue.4", to: "cyan.3" }}
              inherit
            >
              DEXISNE JR
            </Text>
          </Title>

          {/* Subtitle */}
          <Text c="gray.3" mt="xs" fz={{ base: 20, md: 26 }} fw={600}>
            Full Stack Web Developer
          </Text>

          {/* Brief Bio Summary */}
          <Text c="dimmed" mt="md" fz="lg" maw={600}>
            Architecting robust, end-to-end web applications with performant backends,
            secure database foundations, and intuitive high-converting interfaces.
          </Text>

          {/* Highlights List */}
          <List
            mt={35}
            spacing="md"
            size="md"
            c="gray.2"
            icon={
              <ThemeIcon
                size={22}
                radius="xl"
                variant="gradient"
                gradient={{ from: "blue.6", to: "cyan.5" }}
              >
                <IconCheck size={14} stroke={2.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Full-stack developer crafting performant, high-uptime applications.
            </List.Item>
            <List.Item>
              Building modern web experiences with clean, testable code.
            </List.Item>
            <List.Item>
              From database architecture to frontend—complete end-to-end delivery.
            </List.Item>
            <List.Item>
              Object-Oriented Programming (OOP) & Clean Architecture enthusiast.
            </List.Item>
          </List>

        </Grid.Col>

        {/* Right Section - Image Frame */}
        <Grid.Col
          span={{ base: 12, md: 5 }}
          order={{ base: 1, md: 2 }}
          className="flex justify-center"
        >
          <Box pos="relative" style={{ display: "inline-block" }}>
            {/* Status Pill Badge */}
            

            {/* Profile Image Wrap */}
            <div
              style={{
                borderRadius: "50%",
                padding: "6px",
                background: "linear-gradient(135deg, #2563eb, #06b6d4)",
                boxShadow: "0 0 35px rgba(6, 182, 212, 0.3)",
              }}
            >
              <LazyImage
                src={image}
                alt="Frankly D. Dexisne Jr"
                className={classes.image}
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  maxWidth: "340px",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;