
export const Skills = () => {
  return (
    <>
        <section id="skills" className="py-200 flex-row items-center ">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">JavaScript</h3>
                <p>Proficient in modern JavaScript, including ES6+ features.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">React</h3>
                <p>Experienced in building dynamic user interfaces with React.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Node.js</h3>
                <p>Skilled in server-side development using Node.js and Express.</p>
                </div>
                {/* Add more skills as needed */}
            </div>
            </div>
        </section>
    </>
  )
}
