import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumio" },
    { name: "description", content: "Create your path to your dream job!" },
  ];
}

export default function Home() {
   const {auth} = usePuterStore();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      if(!auth.isAuthenticated){
        navigate('auth?next=/');
      }
    }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    {/* Start of NavBar */}
    <Navbar />
    {/* End of NavBar */}

    {/* Middle Section */}
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
      {/* Resumes Mapping */}
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
      </div>
      )}
      {/* End of Resumes Mapping */}
    </section>
    {/* End of Middle Section */}
  </main>
}
