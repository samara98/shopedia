import { Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLink } from '@fortawesome/free-solid-svg-icons';

import { Container } from '~/components/Chakra/Container';
import { Hero } from '~/components/Chakra/Hero';
import { Main } from '~/components/Chakra/Main';
import { DarkModeSwitch } from '~/components/Chakra/DarkModeSwitch';
import { Footer } from '~/components/Chakra/Footer';
import { CTA } from '~/components/Chakra/CTA';

const Chakra = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={FontAwesomeIcon} color="green.500" icon={faCheckCircle} />
          <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
            Chakra UI <FontAwesomeIcon icon={faLink} />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={FontAwesomeIcon} color="green.500" icon={faCheckCircle} />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <FontAwesomeIcon icon={faLink} />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Chakra;
