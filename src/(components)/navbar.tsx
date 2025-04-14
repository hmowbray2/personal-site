import Link from "next/link";

export default function NavBar() {
  return (
    <div className="pt-2 pb-6">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}
