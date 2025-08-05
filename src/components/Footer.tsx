'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="footer-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Traceremove AI Research Lab</h3>
          <p className="footer-text">
            Advancing AI through ethics, interpretability, and human-centered design.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/research" className="footer-link">Research</Link></li>
            <li><Link href="/projects" className="footer-link">Projects</Link></li>
            <li><Link href="/tools" className="footer-link">Tools</Link></li>
            <li><Link href="/about" className="footer-link">About</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-links">
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
            <li><a href="https://linkedin.com/in/arturziganshin" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
            <li><a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="footer-link">Google Scholar</a></li>
            <li><a href="https://orcid.org" target="_blank" rel="noopener noreferrer" className="footer-link">ORCID</a></li>
            <li><a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="footer-link">ResearchGate</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© {currentYear} Traceremove AI Research Lab. All rights reserved.</p>
        <div className="footer-legal">
          <Link href="/legal/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
          <Link href="/legal/ethics-statement" className="footer-legal-link">Ethics Statement</Link>
        </div>
      </div>
    </motion.footer>
  );
}
