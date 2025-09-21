import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
  Avatar,
} from "@mantine/core";
import image from "../../assets/my-photo.jpg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title} c="white">
            FRANKLY D. DEXISNE JR
          </Title>
          <Text c="dimmed" mt="sm" fz={26} fw={600}>
            Full Stack Developer
          </Text>

          <List
            mt={50}
            spacing="sm"
            size="sm"
            c="white"
            fz={16}
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
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

          <Group mt={30}>
            <Button
              component="a"
              href="mailto:frankdexisne1692@gmail.com"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Email Me
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              My Portfolio
            </Button>
          </Group>
        </div>
        <Avatar src={image} className={classes.image} />
      </div>
    </Container>
  );
};

export default Header;
