import logo from './assets/zenharuki-logo.png';
import sparkle from './assets/sparkle-logo.svg';
import { useState } from 'react';

export default function App() {
  const [currentYear, setCurrentYear] = useState(null);

  const years = [2024, 2023, 2022];
  const experiences = {
    2024: {
      title: 'Job Title 1',
      description: 'Description of job 1',
    },
    2023: {
      title: 'Job Title 2',
      description: 'Description of job 2',
    },
    2022: {
      title: 'Job Title 3',
      description: 'Description of job 3',
    },
  };

  const handleYearClick = (year) => {
    setCurrentYear(currentYear === year ? null : year);
  };

  return (
    <div>
      <a href="/" className="absolute top-0 left-0 right-0 mx-auto mt-4 w-56 h-auto pt-8">
        <img src={logo} alt="Logo" className="w-full h-auto" />
      </a>
      <div className="relative">
        <div className="absolute right-4 top-1 transform -translate-y-1/2 w-8 h-auto">
          <img src={sparkle} alt="Sparkle Logo" className="w-8 h-auto mb-4" />
        </div>
        <div className="absolute right-4 bottom-1 transform -translate-y-1/2 w-8 h-auto">
          <img src={sparkle} alt="Sparkle Logo" className="w-8 h-auto mt-4" />
        </div>

        <main className="max-w-4xl mx-auto p-4 font-primaryRegular space-y-8 mt-16">
          <section className="pt-11 md:pt-8">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="md:col-span-10 lg:col-span-9 mb-14">
                  <div className="rich-text-hero">
                    <p className="text-3xl md:text-3xl leading-relaxed">
                      I am a web developer passionate about creating interactive and user-friendly applications. If you&apos;d like to discuss something together,{' '}
                      <a 
                        className="text-blue-500 hover:text-blue-700" 
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
                <h2 className="text-xs uppercase font-medium mb-4">Experience Timeline</h2>
              </div>
            </div>
            <hr />
            <div className="experience-timeline relative flex flex-col items-center mt-8">
              {years.map((year, index) => (
                <div key={year} className="timeline-branch relative flex items-center mb-8">
                  <div className="flex-shrink-0">
                    <button
                      className={`text-lg font-medium py-2 px-4 rounded-full transform -translate-x-1/2 transition-colors duration-300 ${
                        currentYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      onClick={() => handleYearClick(year)}
                    >
                      {year}
                    </button>
                  </div>
                  {currentYear === year && (
                    <div className={`timeline-content ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                      <h3 className="text-2xl font-bold mb-2">{experiences[year].title}</h3>
                      <p className="text-lg">{experiences[year].description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <section className="my-8">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="md:col-span-9 lg:col-span-9 mb-8">
                  <div className="rich-text-hero">
                    <p className="text-3xl md:text-3xl leading-relaxed">Here is some more information about my background, interests, and skills.</p>
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
                    <p className="text-3xl md:text-3xl leading-relaxed">
                      Feel free to reach out and connect with me on social media or via email.{' '}
                      <a 
                        className="text-blue-500 hover:text-blue-700" 
                        href="mailto:pka.pranayandra02@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        let’s chat
                      </a>{' '}
                      or find me on{' '}
                      <a 
                        className="text-blue-500 hover:text-blue-700" 
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
          <section id="footer" className="grid grid-cols-4 sm:grid-cols-12 gap-20 p-20">
        <div className="hidden sm:block col-span-3 mt-auto">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>ZENHARUKI</p>
        </div>
        <div className="col-span-2 sm:col-span-3 sm:mt-auto">
          <div className="opacity-100 hover:opacity-50 transition-opacity">
            <a href="https://www.instagram.com/zenharuki/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="opacity-100 hover:opacity-50 transition-opacity">
            <a href="https://www.linkedin.com/in/pranay23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="sm:hidden mt-auto col-span-2">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>ZENHARUKI</p>
        </div>
      </section>
        </main>
      </div>
    </div>
  );
}
