import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const createdYear:number = 2025
  return (
    <footer className="bg-background text-text py-6 my-6 font-thin">
      <hr className="mb-9 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
      <div className="container  mx-auto flex flex-row items-center justify-center px-4">
        <p className="text-sm text-center">
          &copy; {createdYear}{createdYear < new Date().getFullYear() ? -new Date().getFullYear() : ""} Tyler Imagbudu's Stage Portfolio. Alle rechten voorbehouden 
        </p>
        <Link className="ml-1.5" to="https://github.com/tyler-ty/portfolio_trans-IT_stage"><FaGithub/></Link>
        </div>
    </footer>
  );
}
