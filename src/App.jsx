import { useState, useEffect } from 'react';
import perfios from './assets/perfios-logo.jpeg';
import rtsn from './assets/rtsn-logo.jpeg';
import ril from './assets/ril-logo.jpeg';
import mf from './assets/mf-logo.jpeg';
import tme from './assets/transparent_me.svg';
import ccar from './assets/ccar-logo.jpeg';
import timealign from './assets/ta-logo.jpeg';
import cub from './assets/cub-logo.jpeg';
import ThemeToggleButton from './components/ThemeToggleButton';
import PropTypes from 'prop-types';

export default function App() {
  const [showModalSm, setShowModalSm] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(null);

  const years = [2025, 2024, 2023, 2022, 2021];
  const experiences = {
    2025: [
      {
        title: 'Graduate Research Assistant',
        company: 'University of Colorado Boulder',
        duration: 'Present',
        location: 'Boulder, Colorado, United States',
        employmentType: 'Part-time',
        logo: cub,
      },
      {
        title: 'Software Engineer Intern',
        company: 'TimeAlign',
        duration: 'Present',
        location: 'Remote',
        employmentType: 'Internship',
        logo: timealign,
      },
      {
        title: 'Software Engineer',
        company: 'Colorado Center for Astrodynamics Research',
        duration: 'Present',
        location: 'Boulder, Colorado, United States',
        employmentType: 'Part-time',
        logo: ccar,
      },
    ],
    2024: [
      {
        title: 'Member Technical Team',
        company: 'Perfios',
        duration: '1 yr',
        location: 'Bengaluru, India',
        employmentType: 'Full-time',
        logo: perfios,
      },
    ],
    2023: [
      {
        title: 'Project Intern',
        company: 'Perfios',
        duration: '6 mos',
        location: 'Bengaluru, India',
        employmentType: 'Internship',
        logo: perfios,
      },
    ],
    2022: [
      {
        title: 'Software Engineer Intern',
        company: 'Time Space Ventures',
        duration: '4 mos',
        location: 'Remote',
        employmentType: 'Internship',
        logo: rtsn,
      },
      {
        title: 'Software Engineer Intern',
        company: 'Moneyfactory.ai',
        duration: '3 mos',
        location: 'Bengaluru, India',
        employmentType: 'Internship',
        logo: mf,
      },
    ],
    2021: [
      {
        title: 'Summer Intern',
        company: 'Reliance Industries Limited',
        duration: '1 mo',
        location: 'Jamnagar, India',
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

  const handleModalSmClick = () => {
    setShowModalSm(true);
  };

  const handleModalSmClose = () => {
    setShowModalSm(false);
  };

  const Modal = ({ year }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={handleModalSmClose}
      ></div>
      <div
        className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-8 z-50 max-w-md mx-auto flex flex-col items-center justify-center border-2 border-black dark:border-gray-600 shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Experience in {year}</h2>
        {experiences[year].map((job, index) => (
          <div key={`${year}-${index}`} className="mb-8 w-full">
            <div className="flex items-center mb-2">
              <img src={job.logo} alt="Company Logo" className="w-12 h-12 rounded-full mr-4 flex-shrink-0" />
              <span className="text-lg md:text-xl font-bold">{job.title}</span>
            </div>
            <div className="ml-16">
              <p className="text-sm text-gray-300 dark:text-gray-300 font-semibold mb-0.5">{job.company}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-0.5">{job.employmentType}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-0.5">{job.duration}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-0.5">{job.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  Modal.propTypes = {
    year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
  };

  const ModalSm = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={handleModalSmClose}
      ></div>
      <div
        className="bg-white dark:bg-dark dark:text-white rounded-lg z-50 max-w-sm mx-auto flex flex-col items-center justify-center border-2 border-black dark:border-gray-600 shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <img src={tme} alt="tme Logo" className="max-w-full h-auto max-h-full mb-4" />
      </div>
    </div>
  );
  
  return (
    <div>
      {showModalSm && <ModalSm />}
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
                  </div>
                  <div className="text-left mt-4">
                    <span className="text-xs text-gray-700 dark:text-gray-300">&quot;Pranay&quot; is pronounced as &quot;pruh-nay&quot; (/prəˈneɪ/).</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="my-8 mx-auto max-w-4xl flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-xs uppercase font-medium mb-4 text-center">Experience Timeline</h2>
              <p className="text-xl md:text-xl leading-relaxed mb-6">
                Throughout the years, I have been honored to work with small and large organizations. Here are a few featured engagements.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 w-full">
                {years.map((year) => (
                  <button
                    key={year}
                    className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium shadow-sm transition-colors duration-200 border border-gray-300 dark:border-gray-600 focus:outline-none text-base sm:text-lg ${selectedYear === year ? 'ring-2 ring-orange-400' : ''}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
              {/* Modal for selected year */}
              {selectedYear && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-0">
                  <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={() => setSelectedYear(null)}
                  ></div>
                  <div
                    className="bg-white dark:bg-gray-800 dark:text-white rounded-lg p-4 sm:p-8 z-50 w-full max-w-xs sm:max-w-md mx-auto flex flex-col items-center justify-center border-2 border-black dark:border-gray-600 shadow-lg relative"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold focus:outline-none"
                      onClick={() => setSelectedYear(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Experience in {selectedYear}</h2>
                    <div className="space-y-6 w-full flex flex-col items-center">
                      {experiences[selectedYear].map((job, index) => (
                        <div key={`${selectedYear}-${index}`} className="flex flex-col items-center text-center w-full">
                          <img src={job.logo} alt="Company Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mx-auto mb-2 border border-gray-200 dark:border-gray-700" />
                          <div>
                            <div className="text-base sm:text-lg font-bold">{job.title}</div>
                            <div className="text-xs sm:text-sm text-gray-300 dark:text-gray-300 font-semibold">{job.company}</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">{job.employmentType}</div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">{job.location}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <section className="my-8">
            <div className="grid-container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-10">
                <div className="md:col-span-9 lg:col-span-9">
                  <div className="rich-text-hero max-w-3xl mx-auto">
                    <p className="text-xl md:text-xl leading-relaxed mb-6">
                      I have developed a strong foundation in software engineering, with hands-on experience across the full software development lifecycle from designing and building scalable systems to deploying and maintaining robust, high-performance applications.
                    </p>
                    <p className="text-xl md:text-xl leading-relaxed mb-6">
                      My background spans both research and industry, where I have contributed to impactful projects in collaborative, fast-paced environments. I thrive at the intersection of leveraging proven industry practices and innovating new solutions, and I am always eager to connect and collaborate on ambitious projects that make a real-world impact.
                    </p>
                    <p className="text-xl md:text-xl leading-relaxed">
                      Access my resume{' '}
                      <a
                        className="text-[#9C9B9B] hover:text-neutral-500 transition-colors duration-300 relative group"
                        href="https://drive.google.com/file/d/1IILVoppSp3L0DXPmm6dxC5mrTctml0Jw/view"
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
                  

          <section id="footer" className="w-full p-4 relative">
            <div className="flex w-full justify-between items-center">
              <div className="text-left mt-auto">
                <p className="text-sm">{currentTime.toLocaleTimeString()}</p>
                <p className="text-sm">{cursorPosition.x} (X) , {cursorPosition.y} (Y)</p>
                <p className="text-sm tracking-wide">ZENHARUKI</p>
              </div>
              <div className="flex space-x-8 ml-auto">
                <div className="opacity-100 hover:opacity-50 transition-opacity">
                  <a href="https://www.linkedin.com/in/pranay23/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="opacity-100 hover:opacity-50 transition-opacity">
                  <a href="https://github.com/Pranay0302" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
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
