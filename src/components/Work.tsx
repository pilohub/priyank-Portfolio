import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`, // Use actual scroll width
          scrub: true,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });
    });

    // Clean up
    return () => {
      ctx.revert();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>AI Health Chatbot</h4>
                  <p>Web Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, Gemini Api, HTML/CSS, TypeScript</p>
              <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.4' }}>
                Integrated Google Gemini API to process natural language health queries with strict system prompts for medical disclaimers. Programmed safety guardrails to detect high-risk symptoms and redirect users to emergency medical services.
              </p>
            </div>
            <WorkImage image="/images/AI Health.png" alt="AI Health Chatbot" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Attendance & Review System</h4>
                  <p>Web Application</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>PHP, MySQL, HTML/CSS, JavaScript</p>
              <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.4' }}>
                Implemented a basic attendance module and review/feedback system. Created secure user authentication for Admin and User roles using PHP sessions.
              </p>
            </div>
            <WorkImage image="/images/attendance.png" alt="Attendance & Review System" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Mobile Shop Website</h4>
                  <p>E-Commerce Web Application</p>
                </div>
              </div>

              <h4>Tools and Features</h4>
              <p>React JS, HTML, CSS, JavaScript</p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Developed a modern Mobile Shop Website with responsive UI design,
                product categories, trending mobile section, cart functionality,
                order management, and interactive navigation. Designed clean product
                cards with pricing, ratings, and mobile brand filtering for better
                user experience.
              </p>
            </div>

            <WorkImage
              image="/images/mobile.png"
              alt="Mobile Shop Website"
            />
          </div>


          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>

                <div>
                  <h4>Luxestay Hotel Dashboard</h4>
                  <p>Admin Dashboard Web Application</p>
                </div>
              </div>

              <h4>Tools and Features</h4>
              <p>HTML, CSS, JavaScript</p>

              <p
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Designed and developed a modern hotel management dashboard UI with
                glassmorphism effects, responsive sidebar navigation, booking
                management system, room activity tracking, analytics section, and
                revenue overview. Implemented interactive components including
                search functionality, dynamic tables, dashboard cards, and clean
                admin panel design for enhanced user experience.
              </p>
            </div>

            <WorkImage
              image="/images/Hotel.png"
              alt="Luxestay Hotel Dashboard"
            />
          </div>

          


        </div>
      </div>
    </div>
  );
};

export default Work;
