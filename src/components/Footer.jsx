import Link from 'next/link'
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      <Link href={"/about"}>About</Link>
    </footer>
  )
}

export default Footer