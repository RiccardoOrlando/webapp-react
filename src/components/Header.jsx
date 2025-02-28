import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";





export default function Header() {
    return (
      <header className="bg-white p-4 shadow-lg sticky top-0">
        <Container className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Navbar />
        </Container>
      </header>
    );
  }