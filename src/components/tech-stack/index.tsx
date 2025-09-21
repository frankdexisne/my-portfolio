import { Container, Image, Text, Title, Grid } from "@mantine/core";
import classes from "./tech-stack.module.css";
import javascriptIcon from "../../assets/javascript.png";
import reactIcon from "../../assets/react.png";
import laravelIcon from "../../assets/laravel.png";
import nodeJSIcon from "../../assets/nodejs.png";
import mySQLIcon from "../../assets/mysql.png";
import mssqlIcon from "../../assets/mssql.png";
import gitIcon from "../../assets/git.png";
import nextJsIcon from "../../assets/nextjs.png";
import phpIcon from "../../assets/php.png";
import typescriptIcon from "../../assets/typescript.png";
import framework7Icon from "../../assets/framework7.svg";
import vueIcon from "../../assets/vue.png";
import restApiIcon from "../../assets/rest-api-icon.webp";
import wordpressIcon from "../../assets/wordpress.png";
import jqueryIcon from "../../assets/jquery.png";
import expressJsIcon from "../../assets/express-js.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import tailwindcssIcon from "../../assets/tailwindcss.png";

const data = [
  {
    image: phpIcon,
    title: "PHP",
  },
  {
    image: laravelIcon,
    title: "Laravel",
  },
  {
    image: javascriptIcon,
    title: "Javascript",
  },
  {
    image: jqueryIcon,
    title: "JQuery",
  },
  {
    image: reactIcon,
    title: "React",
  },

  {
    image: nodeJSIcon,
    title: "NodeJS",
  },
  {
    image: expressJsIcon,
    title: "ExpressJS",
  },
  {
    image: mySQLIcon,
    title: "MySQL",
  },
  {
    image: mssqlIcon,
    title: "MSSQL",
  },
  {
    image: gitIcon,
    title: "Git",
  },
  {
    image: nextJsIcon,
    title: "NextJS",
  },
  {
    image: typescriptIcon,
    title: "Typescript",
  },
  {
    image: framework7Icon,
    title: "Framework7",
  },
  {
    image: vueIcon,
    title: "Vue",
  },
  {
    image: restApiIcon,
    title: "Rest API",
  },
  {
    image: wordpressIcon,
    title: "Wordpress",
  },
  {
    image: bootstrapIcon,
    title: "Bootstrap",
  },
  {
    image: tailwindcssIcon,
    title: "Tailwind CSS",
  },
];

const TechStack = () => {
  return (
    <Container pt={50} mb={50} size="xl">
      <Title className={classes.title} order={2} c="white" mb={40}>
        SKILLS AND TECHNOLOGIES
      </Title>

      <Grid>
        {data.map((row) => (
          <Grid.Col span={{ base: 6, md: 3 }} my={10}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={row.image}
                w={60}
                h={60}
                height={60}
                bg="white"
                p={4}
                radius={10}
              />
              <Text c="white" size="xl" ml={10} fw={800}>
                {row.title}
              </Text>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default TechStack;
