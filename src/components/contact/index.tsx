import {
  Title,
  Text,
  Container,
  ActionIcon,
  Group,
  Button,
} from "@mantine/core";
import {
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFile,
} from "@tabler/icons-react";
const Contact = () => {
  return (
    <Container
      size="xl"
      className="flex flex-col justify-center items-center py-[40px]"
    >
      <Title c="white" fz={40}>
        Contact
      </Title>
      <Text c="white" fz={18} mt={20}>
        Interested in working together? Let have a conversation
      </Text>

      <Text c="white" className="flex" fz={18} mt={10}>
        <IconMapPin className="mr-[5x]" /> Guinobatan, Albay, Philippines, 4503
      </Text>

      <Group gap="md" mt={40}>
        <Button
          size="lg"
          leftSection={<IconMail />}
          component="a"
          href="mailto:fdexisne1692@gmail.com"
        >
          Get in Touch
        </Button>
        <Button
          size="lg"
          leftSection={<IconFile />}
          component="a"
          target="_blank"
          href="https://docs.google.com/document/d/1NLTebmWyfuQv1xuxDiCZSkXT99sqvPTaHor-RWFqvtE/edit?usp=sharing"
        >
          View Resume
        </Button>
      </Group>

      <div className="mt-[40px]">
        <ActionIcon
          variant="transparent"
          c="white"
          size={48}
          component="a"
          target="_blank"
          href="https://github.com/frankdexisne"
        >
          <IconBrandGithub size={48} />
        </ActionIcon>
        <ActionIcon
          variant="transparent"
          c="white"
          size={48}
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/frankly-dexisne-227256148/"
        >
          <IconBrandLinkedin size={48} />
        </ActionIcon>
      </div>
    </Container>
  );
};

export default Contact;
