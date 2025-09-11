
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --background-main: #F3F4F6;
          --card-background: #FFFFFF;
          --text-primary: #111827;
          --text-secondary: #4B5563;
          --text-muted: #6B7280;
          --primary-color: #2563EB;
          --dark-card-background: #374151;
          --dark-text-primary: #F9FAFB;
          --dark-text-secondary: #D1D5DB;
          --border-color: #E5E7EB;
        }

        body {
          font-family: var(--font-sans);
          background-color: var(--background-main);
          color: var(--text-primary);
        }
      `}</style>
      <div>{children}</div>
    </>
  );
}
