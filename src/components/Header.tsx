import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4 text-lg">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link href="/blogs" legacyBehavior>
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
