import { IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { Container, List, Text, ThemeIcon, Title, Grid } from "@mantine/core";
import image from "../../assets/my-profile.png";
import classes from "./header.module.css";
import LazyImage from "../base/LazyImage";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Container size="xl">
      <Grid py={130}>
        <Grid.Col
          span={{ base: 12, md: 7 }}
          order={{ base: 2, sm: 1 }}
          style={{ flex: 1, justifyItems: !isMobile ? "left" : "center" }}
        >
          <Title className={classes.title} c="white">
            FRANKLY D. DEXISNE JR
          </Title>
          <Text c="dimmed" mt="sm" fz={26} fw={600}>
            Full Stack Web Developer
          </Text>

          <List
            mt={50}
            spacing="sm"
            size="sm"
            c="white"
            fz={16}
            style={{
              flex: 1,
              justifyItems: !isMobile ? "flex-start" : "center",
            }}
            icon={
              !isMobile ? (
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              ) : undefined
            }
          >
            <List.Item>
              Full-stack developer crafting performant apps.
            </List.Item>
            <List.Item>
              Building modern web experiences with clean code.
            </List.Item>
            <List.Item>
              From database to frontend—end-to-end development.
            </List.Item>
            <List.Item>Object-Oriented Programming enthusiast</List.Item>
          </List>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 5 }}
          order={{ base: 1, sm: 2 }}
          className="flex justify-center"
        >
          {/* <Avatar src={image} className={classes.image} /> */}
          <LazyImage
            src={image}
            alt="Frankly D. Dexisne Jr"
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Header;
