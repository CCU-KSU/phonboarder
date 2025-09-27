import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("English");
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // home, lessons

  const lessons = [
    { 
      id: 1, 
      title: "📞 Making Calls", 
      desc: "Learn how to make and receive calls confidently",
      difficulty: "Beginner",
      duration: "5 min"
    },
    { 
      id: 2, 
      title: "💬 Text Messaging", 
      desc: "Master sending and receiving SMS messages",
      difficulty: "Beginner", 
      duration: "7 min"
    },
    { 
      id: 3, 
      title: "👥 Managing Contacts", 
      desc: "Save, organize and manage your contacts",
      difficulty: "Beginner",
      duration: "6 min"
    },
    { 
      id: 4, 
      title: "📸 Camera & Photos", 
      desc: "Take stunning photos and manage your gallery",
      difficulty: "Intermediate",
      duration: "10 min"
    },
    { 
      id: 5, 
      title: "⚙️ Phone Settings", 
      desc: "Customize your phone settings with ease",
      difficulty: "Intermediate",
      duration: "8 min"
    },
    { 
      id: 6, 
      title: "🌐 Internet Browsing", 
      desc: "Navigate the web safely and efficiently",
      difficulty: "Intermediate",
      duration: "12 min"
    }
  ];

  const languages = [
    { code: "English", flag: "🇺🇸", name: "English" },
    { code: "Español", flag: "🇪🇸", name: "Español" },
    { code: "Français", flag: "🇫🇷", name: "Français" },
    { code: "Deutsch", flag: "🇩🇪", name: "Deutsch" },
    { code: "中文", flag: "🇨🇳", name: "中文" },
    { code: "हिंदी", flag: "🇮🇳", name: "हिंदी" }
  ];

  // Calculate progress based on completed lessons
  useEffect(() => {
    const progressPercent = Math.round((completedLessons.size / lessons.length) * 100);
    setProgress(progressPercent);
  }, [completedLessons, lessons.length]);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleLessonStart = (lessonId) => {
    // Simulate lesson completion for demo
    setCompletedLessons(prev => new Set([...prev, lessonId]));
  };

  const resetProgress = () => {
    setCompletedLessons(new Set());
    setProgress(0);
  };

  const scrollToLessons = () => {
    document.getElementById('lessons-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h2>Loading PhoneBoarder...</h2>
        <p>Preparing your learning journey</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-icon">📱</div>
          <h1 className="hero-title">
            Welcome to <span className="brand">PhoneBoarder</span>
          </h1>
          <p className="hero-subtitle">
            Master your smartphone with confidence through interactive, step-by-step lessons designed for everyone.
          </p>
          <div className="hero-actions">
            <button className="cta-button primary" onClick={scrollToLessons}>
              <span>🚀</span> Start Your Journey
            </button>
            <button className="cta-button secondary" onClick={scrollToLessons}>
              <span>📖</span> View All Lessons
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-phone">📱</div>
          <div className="floating-stars">✨</div>
        </div>
      </header>

      {/* Progress Section */}
      <section className="progress-section" id="progress">
        <div className="container">
          <div className="progress-header">
            <h2>Your Learning Progress</h2>
            <div className="progress-actions">
              <span className="progress-text">
                {completedLessons.size} of {lessons.length} lessons completed
              </span>
              <button className="reset-button" onClick={resetProgress}>
                🔄 Reset
              </button>
            </div>
          </div>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
              <div className="progress-percentage">{progress}%</div>
            </div>
          </div>

          <div className="progress-stats">
            <div className="stat">
              <span className="stat-number">{completedLessons.size}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">{lessons.length - completedLessons.size}</span>
              <span className="stat-label">Remaining</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {lessons.reduce((acc, lesson) => acc + parseInt(lesson.duration), 0)} min
              </span>
              <span className="stat-label">Total Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="lessons-section" id="lessons-section">
        <div className="container">
          <div className="section-header">
            <h2>Interactive Lessons</h2>
            <p>Learn at your own pace with hands-on tutorials</p>
          </div>
          
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className={`lesson-card ${completedLessons.has(lesson.id) ? 'completed' : ''}`}
              >
                <div className="lesson-header">
                  <h3 className="lesson-title">{lesson.title}</h3>
                  {completedLessons.has(lesson.id) && (
                    <div className="completion-badge">✅</div>
                  )}
                </div>
                
                <p className="lesson-description">{lesson.desc}</p>
                
                <div className="lesson-meta">
                  <span className={`difficulty ${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                  <span className="duration">⏱️ {lesson.duration}</span>
                </div>
                
                <button 
                  className={`lesson-button ${completedLessons.has(lesson.id) ? 'completed' : ''}`}
                  onClick={() => handleLessonStart(lesson.id)}
                >
                  {completedLessons.has(lesson.id) ? '✅ Completed' : '▶️ Start Lesson'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Selector */}
      <section className="language-section" id="language">
        <div className="container">
          <div className="language-header">
            <h2>🌍 Choose Your Language</h2>
            <p>Learn in your preferred language for better understanding</p>
          </div>
          
          <div className="language-selector">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
              >
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
              </button>
            ))}
          </div>
          
          <div className="current-language">
            <span>Currently learning in: <strong>{language}</strong></span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <h2>Why Choose PhoneBoarder?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Personalized Learning</h3>
              <p>Tailored lessons that adapt to your learning pace and style</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👥</div>
              <h3>Beginner Friendly</h3>
              <p>No prior experience needed - we start from the very basics</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Track Progress</h3>
              <p>Monitor your achievements and celebrate your milestones</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌐</div>
              <h3>Multiple Languages</h3>
              <p>Learn in your native language for better comprehension</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>📱 PhoneBoarder</h3>
              <p>Empowering everyone to master smartphones with confidence</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Learning</h4>
                <a href="#lessons-section">All Lessons</a>
                <a href="#progress">My Progress</a>
                <a href="#help">Help Center</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#contact">Contact Us</a>
                <a href="#faq">FAQ</a>
                <a href="#feedback">Feedback</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PhoneBoarder. Making smartphone learning accessible for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;