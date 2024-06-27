import logo from './assets/zenharuki-logo.png';
import sparkle from './assets/sparkle-logo.svg';
import perfios from './assets/perfios-logo.jpeg';
import rtsn from './assets/rtsn-logo.jpeg';
import ril from './assets/ril-logo.jpeg';
import mf from './assets/mf-logo.jpeg'
import { useState } from 'react';

export default function App() {
  const [currentYear, setCurrentYear] = useState(null);

  const years = [2024, 2023, 2022, 2021];
  const experiences = {
    2024: [
      {
        title: 'Member Technical Team',
        company: 'Perfios',
        duration: '1 yr',
        location: 'Bengaluru',
        employmentType: 'Full-time',
        logo: perfios
      },
    ],
    2023: [
      {
        title: 'Project Intern',
        company: 'Perfios',
        duration: '6 mos',
        location: 'Bengaluru',
        employmentType: 'Internship',
        logo: perfios
      },
    ],
    2022: [
      {
        title: 'Full Stack Developer',
        company: 'Time Space Ventures',
        duration: '4 mos',
        location: 'Remote',
        employmentType: 'Internship',
        logo: rtsn
      },
      {
        title: 'Full Stack Developer',
        company: 'Moneyfactory.ai',
        duration: '3 mos',
        location: 'Bengaluru',
        employmentType: 'Internship',
        logo: mf
      },
    ],
    2021: [
      {
        title: 'Summer Intern',
        company: 'Reliance Industries Limited',
        duration: '1 mo',
        location: 'Jamnagar',
        employmentType: 'Internship',
        logo: ril
      },
    ],
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
              <div className="grid grid-cols-1 md:grid-cols-16">
                <div className="md:col-span-10 lg:col-span-9 mb-14">
                  <div className="rich-text-hero">
                    <p className="text-2xl md:text-2xl leading-relaxed tracking-widest">
                      Pranay Kumar Andra is an incoming graduate student in the MSCS program at the University of Colorado, Boulder, possesses extensive industry experience and a deep passion for pioneering software solutions. For collaboration,&nbsp;
                      <a
                        className="text-blue-500 hover:text-blue-700"
                        href="mailto:pka.pranayandra02@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        get in touch
                      </a>
                      .
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
                <p className="text-xl md:text-xl leading-relaxed">
                  Throughout the years, I have been honored to work with small and large companies. Here are a few featured engagements.
                </p>
              </div>
            </div>
            <hr />
            <div className="experience-timeline relative flex flex-col items-center mt-8">
              {years.map((year) => (
                <div key={year} className="timeline-branch relative mb-8">
                    <button
                      className={`text-lg font-medium py-2 px-4 rounded-full ${
                        currentYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                      onClick={() => handleYearClick(year)}
                    >
                      {year}
                    </button>
                  {currentYear === year && (
                    <div className="timeline-content ml-12 mt-4 md:ml-0 md:mr-8">
                      {experiences[year].map((job, index) => (
                        <div key={`${year}-${index}`} className="mb-6">
                          <div className="flex items-start">
                          <img src={job.logo} alt="Company Logo" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                              <h3 className="text-lg md:text-xl font-bold mb-1">{job.title}</h3>
                              <p className="text-sm text-gray-600">{job.company}</p>
                              <p className="text-sm">{job.employmentType}</p>
                              <p className="text-sm">{job.duration}</p>
                              <p className="text-sm">{job.location}</p>
                            </div>
                          </div>
                        </div>
                      ))}
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
                    <p className="text-2xl md:text-2xl leading-relaxed">
                      Driven by a passion for shaping ideas, visual elements, and motion into compelling works, with a strong affinity for minimalism, modern architecture, and abstract art.
                    </p>
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
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="footer" className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 p-4 sm:p-20">
            <div className="text-center sm:text-left mt-auto">
              <p className="text-sm">Copyright © {new Date().getFullYear()}</p>
              <p className="text-sm">ZENHARUKI</p>
            </div>
            <div className="flex justify-center sm:justify-end space-x-8 mt-auto">
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://www.instagram.com/zenharuki/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://www.linkedin.com/in/pranay23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://github.com/Pranay0302" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
