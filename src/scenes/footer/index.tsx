import BuildconLogo from "@/assets/logoBuildcon.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="w-5/6 gap-16 mx-auto justify-content md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={BuildconLogo} />
          <p className="my-5">
            This web appplication is made by Djordje Momirov
          </p>
          <p>© Djordje's portfolio</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://github.com/djmomirov" target="_blank">
              GitHub
            </a>
          </p>
          <p className="my-5">
            <a href="https://www.linkedin.com/in/dj-momirov/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <p className="my-5">By phone:</p>
          <p>+381 62 680 377</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
