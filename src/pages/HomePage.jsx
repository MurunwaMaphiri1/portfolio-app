

export default function HomePage() {

    return (
        <>
            <div className="container">
                <p className="text">
                    {`>_ murunwamap.gh ~ main`}
                </p>
                <p className="secondary-text">
                    {`→ $gh aboutme`}
                </p>
                <h1 className="name">
                    Murunwa Maphiri
                </h1>
                <p className="job-title">
                    Aspiring Fullstack Developer
                </p>
                <div className="summary">
                    <p className="summary-text">
                        Hi, I'm a passionate and motivated individual with a strong interest in technology and software development. I enjoy learning new skills, solving problems and working on projects that challenge me to grow. I'm always eager to explore new tools and technologies to improve my knowledge and contribute to meaningful work. In my free time, I like working on personal projects, learning from online resources and staying updated with the latest tech trends.
                    </p>
                    <div className="links-container">
                        <a href="https://github.com/MurunwaMaphiri1">
                            <img src="./public/images/github.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/murunwa-maphiri-307b83283/">
                            <img src="./public/images/linkedin.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="mailto:murunwamaphiri99@gmail.com">
                            <img src="./public/images/email.png"
                            width={30} height={30}
                            />
                        </a>
                        <a href="./public/CV/Murunwa_Maphiri_CV.pdf"
                           download
                        >
                            <img src="./public/images/cv.png"
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
                            <img src="./public/images/tools/c-sharp.png"
                            width={30} height={30}
                            />
                            <img src="./public/images/tools/js.png"
                            width={30} height={30}
                            />
                            <img src="./public/images/tools/java.png"
                            width={30} height={30}
                            />
                            <img src="./public/images/tools/html-5.png"
                            width={30} height={30}
                            />
                            <img src="./public/images/tools/css-3.png"
                            width={30} height={30}
                            />
                            {/* <img src="./public/images/tools/sql.png"
                            width={30} height={30}
                            /> */}
                        </div>
                        <p>{`Frameworks and Libraries`}</p>
                            <div className="links-container">
                                <img src="./public/images/tools/ReactJs.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/node.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-express-js-512.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-.net-framework-512.png"
                                width={30} height={30}
                                />
                            </div>
                        <p>{`Databases`}</p>
                        <div className="links-container">
                            <img src="./public/images/tools/postgresql.png"
                            width={30} height={30}
                            />
                            <img src="./public/images/tools/icons8-mongo-db-48.png"
                            width={30} height={30}
                            />
                        </div>
                        <p>{`Tools and Platforms`}</p>
                        <div className="links-container">
                            <img src="./public/images/tools/git.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/npm.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-postman-inc-24.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/azure.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-vs-code-48.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-rider-jetbrains-40.png"
                                width={30} height={30}
                                />
                                <img src="./public/images/tools/icons8-intellij-idea-512.png"
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
                            <img src="./public/images/github.png"
                            width={30} height={30}
                            />
                            </a>
                        </p>
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
            </div>
        </>
    )
}