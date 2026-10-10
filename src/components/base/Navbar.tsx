import React from "react";
import {
  Container,
  Group,
  Text,
  Button,
  Badge,
  Box,
  Burger,
  Drawer,
  Stack,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills & Tech", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(10, 15, 29, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
      py="md"
    >
      <Container size="xl">
        <Group justify="space-between" align="center">
          {/* Left: Logo & Name */}
          <Group gap="md">
            {/* FD Monogram Icon */}
            <Box
              style={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                border: "1.5px solid #06b6d4",
                boxShadow: "0 0 12px rgba(6, 182, 212, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
              }}
            >
              <Text fw={800} fz="lg" c="white">
                FD
              </Text>
            </Box>

            {/* Name & Subtitle */}
            <Box>
              <Text fw={700} fz="md" c="white" lh={1.2}>
                Frankly Dexisne Jr
              </Text>
              <Text
                fz={10}
                fw={600}
                c="dimmed"
                style={{
                  letterSpacing: "1.5px",
                  fontFamily: "monospace",
                }}
              >
                FULL STACK WEB DEV
              </Text>
            </Box>
          </Group>

          {/* Center: Desktop Navigation Links */}
          <Group gap={30} visibleFrom="md">
            {navLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                underline="never"
                c="gray.3"
                fz="sm"
                fw={500}
                style={{
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#38bdf8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#cbd5e1")
                }
              >
                {link.label}
              </Anchor>
            ))}
          </Group>

          {/* Right: Status Pill & CTA Button */}
          <Group gap="md" visibleFrom="md">
            {/* Available for Hire Pill */}
            <Badge
              variant="outline"
              size="lg"
              radius="xl"
              styles={{
                root: {
                  backgroundColor: "rgba(16, 185, 129, 0.08)",
                  borderColor: "rgba(16, 185, 129, 0.25)",
                  color: "#34d399",
                  textTransform: "none",
                  fontWeight: 500,
                  padding: "10px 16px",
                },
              }}
              leftSection={
                <Box
                  w={7}
                  h={7}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
              }
            >
              Available for Hire
            </Badge>

            {/* Direct Contact Button */}
            <Button
              component="a"
              href="#contact"
              size="sm"
              radius="md"
              variant="gradient"
              gradient={{ from: "blue.6", to: "blue.5" }}
              style={{
                boxShadow: "0 0 15px rgba(37, 99, 235, 0.4)",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              GET IN TOUCH
            </Button>
          </Group>

          {/* Mobile Burger Menu Button */}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="md"
            color="white"
          />
        </Group>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        padding="md"
        title="Navigation"
        hiddenFrom="md"
        styles={{
          content: { backgroundColor: "#0f172a", color: "white" },
          header: { backgroundColor: "#0f172a", color: "white" },
        }}
      >
        <Stack gap="lg" mt="md">
          {navLinks.map((link) => (
            <Anchor
              key={link.label}
              href={link.href}
              underline="never"
              c="gray.2"
              fz="lg"
              fw={500}
              onClick={close}
            >
              {link.label}
            </Anchor>
          ))}
          <Badge
            variant="outline"
            size="lg"
            radius="xl"
            color="teal"
            w="fit-content"
            mt="md"
          >
            Available for Hire
          </Badge>
          <Button
            component="a"
            href="#contact"
            onClick={close}
            size="md"
            radius="md"
            variant="gradient"
            gradient={{ from: "blue.6", to: "blue.5" }}
          >
            GET IN TOUCH
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Navbar;