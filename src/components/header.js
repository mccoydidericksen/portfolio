import Nav from "./navigation";

function Header() {
  return (
    <>
    <Nav />
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl text-white mb-1 md:mb-3 font-bold">
        McCoy Didericksen
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        As an experienced software developer/engineer, I have a passion for
        creating innovative and efficient solutions to complex problems. My
        experience includes working with both front-end and back-end
        technologies, including HTML, CSS, JavaScript, React.js, Node.js,
        Express.js, MongoDB, and MySQL. Additionally, I possess excellent
        communication and collaboration skills, which enable me to work
        effectively with cross-functional teams and deliver high-quality
        products on time. With a dedication to staying up-to-date with the
        latest technologies and industry trends, I am committed to continuous
        learning and growth in my career. If you are seeking a software
        developer/engineer who is driven, detail-oriented, and passionate about
        delivering exceptional results, let's connect!
      </p>
    </div>
    </>
  );
}

export default Header;
