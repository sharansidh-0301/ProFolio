import "./Tech.css";
function ProjectCard({ title, description, Codelink, Sitelink }) {
  return (
    <div className="pro-box bg-gray-100 p-6 rounded-lg shadow-md flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <a
          href={Codelink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Source Code
        </a>
        <a
          href={Sitelink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Site
        </a>
      </div>
    </div>
  );
}

export const ReactSection = () => {
  return (
    <div id="project" className="react-section py-8 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mt-8 mb-8 sm:mt-12 sm:mb-12">
          React Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProjectCard
            title="QR-Code Generator"
            description="A QR code generator built with React and QR Code API."
            Codelink="https://github.com/sharansidh-0301/QR-Code-Generator"
            Sitelink="https://qr-codess-generator.netlify.app"
          />
          <ProjectCard
            title="BMI Calculator"
            description="A simple BMI calculator built with React."
            Codelink="https://github.com/sharansidh-0301/BMI-Calculator"
            Sitelink="https://bmi-calciii.netlify.app/"
          />
          <ProjectCard
            title="Strong Password Generator"
            description="A password generator that creates strong passwords."
            Codelink="https://github.com/sharansidh-0301/Password-Generator"
            Sitelink="https://passwords-generator-v1.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};
