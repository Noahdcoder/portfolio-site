import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl">Heyyy! 👋🏾</h2>
      <h1 className="text-6xl font-bold">
        I am <span className="text-blue">Noah</span>
      </h1>
      <p>
        I am a <span className="text-blue">Web developer</span> eager to keep
        learning and developing. I want to make a huge impact in the world of
        tech. I also look forward to contributing to open-source projects.
        Thanks for taking time to come check my page. Feel free to hit me up for
        collaboration if need be.
      </p>
      <div className="text-center">
        <a
          href="/Noah_Aghedo_Resume.pdf"
          download
          className="block w-full text-2xl p-4 bg-blue animate-bounce cursor-pointer hover:animate-shine"
        >
          Download Resume <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
      <div className="flex space-x-4 text-xl">
        <a href="https://github.com/Noahdcoder" target="_blank">
          <div className="flex flex-col">
            <FontAwesomeIcon icon={faGithub} className="hover:text-github" />
            Github
          </div>
        </a>
        <a href="https://www.linkedin.com/in/noah-aghedo/" target="_blank">
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-linkedin"
            />
            Linkedin
          </div>
        </a>
        <a href="https://twitter.com/noah_aghedo" target="_blank">
          <div className="flex flex-col">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-twitter" />
            Twitter
          </div>
        </a>
        <a href="https://www.instagram.com/noah_aghedo/" target="_blank">
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-instagram"
            />
            Instagram
          </div>
        </a>
      </div>
    </div>
  );
}
