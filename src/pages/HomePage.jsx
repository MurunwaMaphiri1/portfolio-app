import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

export default function HomePage() {
    const [asciiart, setAsciiArt] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAsciiArt = async() => {
            try {
                setIsLoading(true);
                const res = await fetch(`/images/avatar/ascii-art(1).txt`)

                if (!res.ok) {
                    throw new Error(`Failed to fetch ASCII art: ${res.status}`);
                }

                const text = await res.text();
                setAsciiArt(text);

            } catch(err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        fetchAsciiArt();
    }, []);

      // Safely sanitize the HTML content
    const sanitizedAsciiArt = asciiart ? DOMPurify.sanitize(asciiart) : '';

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <div className="container">
                <p className="text">
                    {`>_ murunwamap.gh ~ main`}
                </p>
                <p className="secondary-text">
                    {`→ $gh aboutme`}
                </p>
                <div className="colored-ascii-art">
                    <div dangerouslySetInnerHTML={{ __html: sanitizedAsciiArt }} />
                </div>
                <h1 className="name">
                    Murunwa Maphiri
                </h1>
                <p className="job-title">
                    Fullstack Developer
                </p>
                <div className="summary">
                    <p className="summary-text">
                    I'm the type of person who loves building cool things with code—whether it’s a clean React UI or a solid backend with .NET. I’m constantly learning, experimenting and trying to make each project better than the last. Think of it like my own little tech journey—kind of like a training arc, minus the dramatic music (most of the time). If you're into creating, breaking and fixing stuff in the world of tech, you're in the right place.
                    </p>
                    <div className="links-container">
                        <a href="https://github.com/MurunwaMaphiri1">
                            <img src="./images/github-1.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/murunwa-maphiri-307b83283/">
                            <img src="./images/linkedin-logo.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="mailto:murunwamaphiri99@gmail.com">
                            <img src="./images/communication.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="./CV/Murunwa Maphiri Fullstack Developer CV.pdf"
                           download
                        >
                            <img src="./images/cv.png"
                            width={30} height={30}
                            />
                        </a>
                    </div>
                </div>
                <p className="secondary-text">
                    {`→ $gh tools`}
                </p>
                <div className="summary">
                    <p>{`Languages`}</p>
                        <div className="links-container">
                            <img src="./images/tools/c-sharp.png"
                            width={30} height={30}
                            />
                            <img src="./images/tools/js.png"
                            width={30} height={30}
                            />
                            <img src="./images/tools/java.png"
                            width={30} height={30}
                            />
                            <img src="./images/tools/html-5.png"
                            width={30} height={30}
                            />
                            <img src="./images/tools/css-3.png"
                            width={30} height={30}
                            />
                        </div>
                        <p>{`Frameworks and Libraries`}</p>
                            <div className="links-container">
                                <img src="./images/tools/ReactJs.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/node.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-express-js-40.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-.net-framework-512.png"
                                width={30} height={30}
                                />
                            </div>
                        <p>{`Databases`}</p>
                        <div className="links-container">
                            <img src="./images/tools/postgresql.png"
                            width={30} height={30}
                            />
                            <img src="./images/tools/icons8-mongo-db-48.png"
                            width={30} height={30}
                            />
                        </div>
                        <p>{`Tools and Platforms`}</p>
                        <div className="links-container">
                            <img src="./images/tools/git.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/npm.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-postman-inc-24.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/azure.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-vs-code-48.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-rider-jetbrains-40.png"
                                width={30} height={30}
                                />
                                <img src="./images/tools/icons8-intellij-idea-512.png"
                                width={30} height={30}
                                />
                        </div>
                </div>
                <p className="secondary-text">
                    {`→ $gh repo list`}
                </p>
                <div className="summary">
                    <div className="text">
                        <p>
                            {`MagicBox Theatres  `}
                            <a href="https://github.com/MurunwaMaphiri1/movie-reservation-system">
                            <img src="./images/github-1.png"
                            width={30} height={30}
                            />
                            </a>
                        </p>
                        <div className="status-container">
                            <div className="in-progress-dot"></div>
                                <div className="text">
                                        <p>
                                            Making improvements
                                        </p>
                                </div>
                        </div>
                        <p>
                        The Movie Reservation System is a .NET Core Web API that allows users to browse movies, select showtimes and book reservations securely. The API is designed with JWT authentication, Entity Framework Core and PostgreSQL for data storage.
                        </p>
                        <div className="tech-stack">
                            <p>
                               C# 
                            </p>
                            <p>
                                PostgreSQL
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                JWT
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="summary">
                    <div className="text">
                        <p>
                            {`Appointment Scheduler  `}
                            <a href="https://github.com/MurunwaMaphiri1/Appointment-scheduler">
                            <img src="./images/github-1.png"
                            width={30} height={30}
                            />
                            </a>
                        </p>
                        <div className="status-container">
                            <div className="project-completed-dot"></div>
                                <div className="text">
                                        <p>
                                            Complete
                                        </p>
                                </div>
                        </div>
                        <p>
                        A .NET Core Web API for creating appointment bookings and email notifications. The API uses JWT authentication and PostgreSQL for data storage. Includes frontend.
                        </p>
                        <div className="tech-stack">
                            <p>
                               C# 
                            </p>
                            <p>
                                PostgreSQL
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                JWT
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="summary">
                    <div className="text">
                        <p>
                            {`E-commerce application  `}
                            <a href="https://github.com/MurunwaMaphiri1/e-commerce-api-and-app">
                            <img src="./images/github-1.png"
                            width={30} height={30}
                            />
                            </a>
                        </p>
                        <div className="status-container">
                            <div className="project-completed-dot"></div>
                                <div className="text">
                                        <p>
                                            Complete
                                        </p>
                                </div>
                        </div>
                        <p>
                        This project is an API for an e-commerce platform that allows users to sign up, log in, add products to a shopping cart, remove products, view and search for products, and checkout with a payment gateway. The backend includes JWT authentication for secure user interaction and integrates with Stripe for handling payments.
                        </p>
                        <div className="tech-stack">
                            <p>
                               JavaScript 
                            </p>
                            <p>
                                MongoDB
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                JWT
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="summary">
                    <div className="text">
                        <p>
                            {`Anime watchlist application  `}
                            <a href="https://github.com/MurunwaMaphiri1/Anime-watchlist-app">
                            <img src="./images/github-1.png"
                            width={30} height={30}
                            />
                            </a>
                        </p>
                        <div className="status-container">
                            <div className="project-completed-dot"></div>
                                <div className="text">
                                        <p>
                                            Complete
                                        </p>
                                </div>
                        </div>
                        <p>
                        Integrated the Jikan API to display seasonal, upcoming and top anime.
                        </p>
                        <div className="tech-stack">
                            <p>
                               JavaScript 
                            </p>
                            <p>
                                ReactJS
                            </p>
                        </div>
                    </div>
                    <div className='live-demo'>
                        <a href="https://yumeanime.vercel.app/" style={{ textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}>
                            Live Demo
                        </a>
                    </div>

                </div>
                <div className='footer-container'>
                    <footer>
                            <p>
                                Made with ❤️ by Murunwa Maphiri
                            </p>
                    </footer>
                </div>
            </div>
        </>
    )
}