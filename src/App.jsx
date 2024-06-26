export default function App() {
    return (
      <main className="max-w-4xl mx-auto p-4 font-primaryRegular bg-beige space-y-8">
        <section className="pt-11 md:pt-8">
          <div className="grid-container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-10">
              <div className="md:col-span-10 lg:col-span-9 mb-14">
                <div className="rich-text-hero">
                  <p className="text-4xl md:text-4xl leading-relaxed">
                    I am a web developer passionate about creating interactive and user-friendly applications. If you&apos;d like to discuss something together,{' '}
                    <a 
                      className="text-blue-500 underline hover:text-blue-700" 
                      href="mailto:pka.pranayandra02@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      get in touch
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <div className="grid-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 pt-3 pb-3">
            <div className="col-span-12">
              <h2 className="text-xs uppercase font-medium mb-4">Select Projects</h2>
            </div>
          </div>
          <hr />
          <a className="block project-list__item relative" href="/projects/project1">
            <div className="grid grid-cols-1 md:grid-cols-12 pt-2 pb-2">
              <div className="md:col-span-3">
                <h3 className="text-sm md:text-base inline-block">Project 1</h3>
              </div>
              <div className="md:col-span-9 hidden md:block">
                <p className="text-sm md:text-base inline-block">Description of project 1</p>
              </div>
            </div>
          </a>
          <hr />
          <a className="block project-list__item relative" href="/projects/project2">
            <div className="grid grid-cols-1 md:grid-cols-12 pt-2 pb-2">
              <div className="md:col-span-3">
                <h3 className="text-sm md:text-base inline-block">Project 2</h3>
              </div>
              <div className="md:col-span-9 hidden md:block">
                <p className="text-sm md:text-base inline-block">Description of project 2</p>
              </div>
            </div>
          </a>
          <hr />
          <a className="block project-list__item relative" href="/projects/project3">
            <div className="grid grid-cols-1 md:grid-cols-12 pt-2 pb-2">
              <div className="md:col-span-3">
                <h3 className="text-sm md:text-base inline-block">Project 3</h3>
              </div>
              <div className="md:col-span-9 hidden md:block">
                <p className="text-sm md:text-base inline-block">Description of project 3</p>
              </div>
            </div>
          </a>
          <hr />
        </div>
  
        <section className="my-8">
          <div className="grid-container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-10">
              <div className="md:col-span-9 lg:col-span-9 mb-8">
                <div className="rich-text-hero">
                  <p className="text-4xl md:text-4xl leading-relaxed">Here is some more information about my background, interests, and skills.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="mb-8">
          <div className="grid-container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-10">
              <div className="md:col-span-9 lg:col-span-9 mb-8">
                <div className="rich-text-hero">
                  <p className="text-4xl md:text-4xl leading-relaxed">
                    Feel free to reach out and connect with me on social media or via email.{' '}
                    <a 
                      className="text-blue-500 underline hover:text-blue-700" 
                      href="mailto:pka.pranayandra02@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      let’s chat
                    </a>{' '}
                    or find me on{' '}
                    <a 
                      className="text-blue-500 underline hover:text-blue-700" 
                      href="https://www.instagram.com/zenharuki/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
