import { useState, useEffect } from 'react';
import perfios from './assets/perfios-logo.jpeg';
import rtsn from './assets/rtsn-logo.jpeg';
import ril from './assets/ril-logo.jpeg';
import mf from './assets/mf-logo.jpeg';
import tme from './assets/transparent_me.svg';
import ThemeToggleButton from './components/ThemeToggleButton';
import { FaArrowUp } from 'react-icons/fa';

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentYear, setCurrentYear] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalSm, setShowModalSm] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBackToTop, setShowBackToTop] = useState(false);


  const years = [2024, 2023, 2022, 2021];
  const experiences = {
    2024: [
      {
        title: 'Member Technical Team',
        company: 'Perfios',
        duration: '1 yr',
        location: 'Bengaluru',
        employmentType: 'Full-time',
        logo: perfios,
      },
    ],
    2023: [
      {
        title: 'Project Intern',
        company: 'Perfios',
        duration: '6 mos',
        location: 'Bengaluru',
        employmentType: 'Internship',
        logo: perfios,
      },
    ],
    2022: [
      {
        title: 'Full Stack Developer',
        company: 'Time Space Ventures',
        duration: '4 mos',
        location: 'Remote',
        employmentType: 'Internship',
        logo: rtsn,
      },
      {
        title: 'Full Stack Developer',
        company: 'Moneyfactory.ai',
        duration: '3 mos',
        location: 'Bengaluru',
        employmentType: 'Internship',
        logo: mf,
      },
    ],
    2021: [
      {
        title: 'Summer Intern',
        company: 'Reliance Industries Limited',
        duration: '1 mo',
        location: 'Jamnagar',
        employmentType: 'Internship',
        logo: ril,
      },
    ],
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleYearClick = (year) => {
    setCurrentYear(year);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentYear(null);
  };

  const handleModalSmClick = () => {
    setShowModalSm(true);
  };

  const handleModalSmClose = () => {
    setShowModalSm(false);
  };

  // eslint-disable-next-line react/prop-types
  const Modal = ({ year }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleModalClose}></div>
      <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-8 z-10 max-w-md mx-auto flex flex-col items-center justify-center border-2 border-black dark:border-gray-600 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Experience in {year}</h2>
        {experiences[year].map((job, index) => (
          <div key={`${year}-${index}`} className="mb-6">
            <div className="flex items-start">
              <img src={job.logo} alt="Company Logo" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{job.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
                <p className="text-sm">{job.employmentType}</p>
                <p className="text-sm">{job.duration}</p>
                <p className="text-sm">{job.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ModalSm = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleModalSmClose}></div>
      <div className="bg-white dark:bg-dark dark:text-white rounded-lg z-10 max-w-sm mx-auto flex flex-col items-center justify-center border-2 border-black dark:border-gray-600 shadow-lg">
        <img src={tme} alt="tme Logo" className="max-w-full h-auto max-h-full mb-4" />
      </div>
    </div>
  );
  
  return (
    <div>
      {showModal && currentYear && <Modal year={currentYear} />}
      <div className="relative text-left">
        <main className="max-w-4xl mx-auto p-4 font-primaryRegular space-y-8 mt-6">
          <section className="pt-11 md:pt-6">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-16">
                <div className="md:col-span-10 lg:col-span-9 mb-4">
                  <div className="rich-text-hero">
                    <p className="text-xl md:text-xl leading-relaxed tracking-wider">
                      I&apos;m{' '}
                      <span
                        className="relative inline-block text-[#9C9B9B] group cursor-pointer"
                        onClick={handleModalSmClick}
                      >
                        Pranay Kumar Andra
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800 bg-squiggle bg-bottom-100 bg-auto transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                      </span>
                      , a current graduate student in the MSCS program at the University of Colorado, Boulder, with practical industry experience and a passion for pioneering software solutions. If you&apos;d like to contact me,&nbsp;
                      <a
                        className="text-[#9C9B9B] hover:text-neutral-500 transition-colors duration-300 relative group"
                        href="mailto:pka.pranayandra02@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        message me here
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800 bg-squiggle bg-bottom-100 bg-auto transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 mt-1"></span>
                      </a>
                      .
                    </p>
                    {showModalSm && <ModalSm />}
                  </div>
                  <div className="text-left mt-4">
                    <span className="text-xs text-gray-700 dark:text-gray-300">&quot;Pranay&quot; is pronounced as &quot;pruh-nay&quot; (/prəˈneɪ/).</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-8 mx-auto max-w-4xl">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 pt-3 pb-3">
                <div className="col-span-12">
                  <h2 className="text-xs uppercase font-medium mb-4">Experience Timeline</h2>
                  <p className="text-xl md:text-xl leading-relaxed">
                    Throughout the years, I have been honored to work with small and large companies. Here are a few featured engagements.
                  </p>
                </div>
              </div>
              <hr className="border-gray-400 dark:border-gray-600" />
              <div className="experience-timeline relative flex items-center justify-center mt-8">
                <div className="flex flex-col">
                  <button
                    className="text-lg font-medium py-2 px-4 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 mb-4"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Collapse Years' : 'Expand Years'}
                  </button>
                  {isExpanded && (
                    <div className="flex">
                      {years.map((year) => (
                        <button
                          key={year}
                          className={`text-lg font-medium py-2 px-4 rounded-full ${
                            currentYear === year ? 'bg-[#9C9B9B] text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                          } mr-4 mb-4`}
                          onClick={() => handleYearClick(year)}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="my-8">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="md:col-span-9 lg:col-span-9">
                  <div className="rich-text-hero">
                    <p className="text-xl md:text-xl leading-relaxed">
                      Driven by a passion for shaping ideas, visual elements, and motion into compelling works, with a strong affinity for minimalism, modern architecture, and abstract art.
                    </p>
                    <p className="text-xl md:text-xl leading-relaxed mt-4">
                    Access my resume{' '}
                    <a
                        className="text-[#9C9B9B] hover:text-neutral-500 transition-colors duration-300 relative group"
                        href="https://drive.google.com/file/d/1h0Xx1psmMHxPgz-acNyfc9mql6s4d4Em/view"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800 bg-squiggle bg-bottom-100 bg-auto transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 mt-1"></span>
                      </a>{' '}
                    to gain insights into my professional experience and qualifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-4">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="md:col-span-9 lg:col-span-9 mb-4">
                  <div className="rich-text-hero">
                    <p className="text-xl md:text-xl leading-relaxed">
                      Feel free to reach out and connect with me on social media or via email.{' '}
                      <a
                        className="text-[#9C9B9B] hover:text-neutral-500 transition-colors duration-300 relative group"
                        href="mailto:pka.pranayandra02@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        let&apos;s chat
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800 bg-squiggle bg-bottom-100 bg-auto transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 mt-1"></span>
                      </a>{' '}
                      or find me on{' '}
                      <a
                        className="text-[#9C9B9B] hover:text-neutral-500 transition-colors duration-300 relative group"
                        href="https://www.instagram.com/zenharuki/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800 bg-squiggle bg-bottom-100 bg-auto transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 mt-1"></span>
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="footer" className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 p-4 relative">
            <div className="text-left mt-auto">
              <p className="text-sm">{currentTime.toLocaleTimeString()}</p>
              <p className="text-sm">{cursorPosition.x} (X) , {cursorPosition.y} (Y)</p>
              <p className="text-sm tracking-wide">ZENHARUKI</p>
            </div>
            <div className="flex justify-start space-x-8 mt-auto">
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://www.instagram.com/zenharuki/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://www.linkedin.com/in/pranay23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div className="opacity-100 hover:opacity-50 transition-opacity">
                <a href="https://github.com/Pranay0302" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              <div>
                {showBackToTop && (
                    <button onClick={handleBackToTopClick} className="fixed bottom-4 right-4 bg-orange-200 text-black p-3 rounded-full md:hidden dark:bg-zinc-600 dark:text-white">
                    <FaArrowUp />
                    </button>
                )}
              </div>
            </div>
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggleButton />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
