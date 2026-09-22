import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [view, setView] = useState<'signin' | 'signup'>('signin');
  const [showSigninPassword, setShowSigninPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  return (
    <div className="auth-viewport">
      <div className="auth-container" data-view={view}>
        
        {/* FORMS LAYER (Underneath) */}
        <div className="forms-wrapper">
          
          {/* SIGN IN FORM (Always positioned in the Left Half) */}
          <div className="form-panel form-signin">
            <h2 className="title">Sign in as Admin</h2>

            <form className="actual-form" onSubmit={(e) => e.preventDefault()}>
              <div className="field relative">
                <label>Admin Email</label>
                <div className="input-wrapper">
                  <input type="text" placeholder="Enter Your Email" required />
                  <span className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                </div>
              </div>
              <div className="field relative">
                <label>Password</label>
                <div className="input-wrapper">
                  <input 
                    type={showSigninPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="input-icon" 
                    onClick={() => setShowSigninPassword(!showSigninPassword)}
                  >
                    {showSigninPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="meta-row" style={{ gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked /> Keep me signed in
                </label>
                <button type="button" className="link-btn" onClick={() => setView('signup')} style={{ color: '#64748b', fontWeight: 600 }}>
                  Don't have an account? <span className="golden-underline" style={{ color: '#0f172a', fontWeight: 700, marginLeft: '0.25rem' }}>Register now</span>
                </button>
              </div>
              <button type="submit" className="submit-action">Sign in as Admin</button>
            </form>

            <div className="bottom-links">
              <p className="bottom-cta">
                <Link to="/auth" className="link-btn golden-underline">Back to Student / Alumni Login</Link>
              </p>
            </div>
          </div>

          {/* CREATE ACCOUNT FORM (Always positioned in the Right Half) */}
          <div className="form-panel form-signup">
            <h2 className="title">Create Admin Account</h2>

            <form className="actual-form" onSubmit={(e) => e.preventDefault()}>
              <div className="field relative">
                <label>Admin Email</label>
                <div className="input-wrapper">
                  <input type="email" placeholder="Enter Your Email" required />
                  <span className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                </div>
              </div>
              <div className="field relative">
                <label>Password</label>
                <div className="input-wrapper">
                  <input 
                    type={showSignupPassword ? "text" : "password"} 
                    placeholder="Min. 8 chars" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="input-icon" 
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-action mt-4">Register Admin</button>
            </form>

            <p className="bottom-cta">
              Already have an admin account? <button type="button" className="link-btn golden-underline" onClick={() => setView('signin')}>Sign in</button>
            </p>
          </div>

        </div>

        {/* SLIDING EMERALD OVERLAY (Moves on top without clipping text) */}
        <div className="sliding-overlay">
          <div className="overlay-track">
            
            {/* Visible when in Sign Up Mode (Left Side) */}
            <div className="overlay-panel overlay-signup-text">
              <span className="brand-tag">SAARTHI ADMIN</span>
              <h3 className="hero-title">Start Your <em>Journey.</em></h3>
              <p className="hero-desc">Register as an administrator to manage the institutional network, users, and data.</p>
            </div>

            {/* Visible when in Sign In Mode (Right Side) */}
            <div className="overlay-panel overlay-signin-text">
              <span className="brand-tag">SAARTHI ADMIN</span>
              <h3 className="hero-title">Welcome back, <em>Admin.</em></h3>
              <p className="hero-desc">Access your dashboard to oversee the institutional network and verify new accounts.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLoginPage;
