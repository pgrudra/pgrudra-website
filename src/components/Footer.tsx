"use client";
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/pgrudra" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/prajwal-rudrakshi-69b2b324b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHCVnw9P5TfSi6reW%2F1EDwQ%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                LinkedIn
              </a>
              <a href="https://x.com/pgrudr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                X
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }