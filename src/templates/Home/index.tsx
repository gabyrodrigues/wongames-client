import Menu from "@components/Menu";
import { Container } from "@components/Container";
import Footer from "@components/Footer";
import Heading from "@components/Heading";

export default function Home() {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading
          lineLeft
          lineColor="secondary"
          color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading
          lineLeft
          lineColor="secondary"
          color="black">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading
          lineLeft
          lineColor="secondary"
          color="black">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading
          lineLeft
          lineColor="secondary"
          color="black">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
