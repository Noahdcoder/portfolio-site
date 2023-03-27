import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div id="projects" className="space-y-4">
      <h3 className="text-gray text-2xl font-bold">Projects</h3>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-4 bg-veryTransparentGray p-8 rounded-xl hover:scale-105 transition duration-300">
          <h4 className="text-xl">Simple Shopping Cart</h4>
          <div className="flex text-blue space-x-8">
            <p className="bg-transparentGray p-2 rounded-lg">
              TypeScript + React + Next.js + Tailwind
            </p>
          </div>
          <p>
            Simple Shopping Cart is an online cart that lets users add, reduce
            or remove from their cart. I used it to practice my Typescript
            skills.
          </p>
          <div className="flex space-x-4">
            <p>
              <a
                href="https://shopping-cart-five-psi.vercel.app/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGlobe} /> Site
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Noahdcoder/Shopping-Cart"
                target="_blank"
              >
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-4 bg-veryTransparentGray p-8 rounded-xl hover:scale-105 transition duration-300">
          <h4 className="text-xl">Manage Landing Page</h4>
          <div className="flex text-blue space-x-8">
            <p className="bg-transparentGray p-2 rounded-lg">Tailwind</p>
          </div>
          <p>
            Manage is a responsive modern landing page which pays a lot of
            attention to aesthetics.
          </p>
          <div className="flex space-x-4">
            <p>
              <a href="https://noahdcoder.github.io/manage/">
                <FontAwesomeIcon icon={faGlobe} /> Site
              </a>
            </p>
            <p>
              <a href="https://github.com/Noahdcoder/manage">
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
