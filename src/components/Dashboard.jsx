import React, { useState } from 'react';

export default function Dashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, templates, applies, analytics, settings
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [showAppModal, setShowAppModal] = useState(false);
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  // Dynamic state for mock data
  const [applications, setApplications] = useState([
    { id: 1, title: 'Senior Frontend Engineer', company: 'Google', time: '2 hours ago', status: 'Sent', logoLetter: 'G', logoBg: 'bg-red-100 text-red-600' },
    { id: 2, title: 'Product Designer', company: 'Meta', time: '5 hours ago', status: 'Draft', logoLetter: 'M', logoBg: 'bg-blue-100 text-blue-600' },
    { id: 3, title: 'Backend Developer', company: 'Netflix', time: 'Yesterday', status: 'Accepted', logoLetter: 'N', logoBg: 'bg-red-100 text-red-700' },
    { id: 4, title: 'Software Engineer II', company: 'Stripe', time: '2 days ago', status: 'Sent', logoLetter: 'S', logoBg: 'bg-indigo-100 text-indigo-600' },
    { id: 5, title: 'Mobile Developer', company: 'Apple', time: '3 days ago', status: 'Rejected', logoLetter: 'A', logoBg: 'bg-gray-100 text-gray-800' }
  ]);

  const [templates, setTemplates] = useState([
    { id: 1, title: 'Cold Outreach - Dev', version: 'v2.1', desc: 'Standard outreach for software engineering roles in fintech...' },
    { id: 2, title: 'Designer Intro', version: 'v1.0', desc: 'Creative portfolio-focused template for design agencies...' },
    { id: 3, title: 'Product Management standard', version: 'v1.2', desc: 'Outreach template tailored to product manager job duties...' }
  ]);

  // Form states
  const [newAppName, setNewAppName] = useState('');
  const [newAppCompany, setNewAppCompany] = useState('');
  const [newAppStatus, setNewAppStatus] = useState('Sent');

  const [newTemplateTitle, setNewTemplateTitle] = useState('');
  const [newTemplateDesc, setNewTemplateDesc] = useState('');

  // Handlers
  const handleAddApp = (e) => {
    e.preventDefault();
    if (!newAppName || !newAppCompany) return;

    const newApp = {
      id: applications.length + 1,
      title: newAppName,
      company: newAppCompany,
      time: 'Just now',
      status: newAppStatus,
      logoLetter: newAppCompany.charAt(0).toUpperCase(),
      logoBg: 'bg-primary-fixed text-primary'
    };

    setApplications([newApp, ...applications]);
    setNewAppName('');
    setNewAppCompany('');
    setNewAppStatus('Sent');
    setShowAppModal(false);
  };

  const handleAddTemplate = (e) => {
    e.preventDefault();
    if (!newTemplateTitle || !newTemplateDesc) return;

    const newTemp = {
      id: templates.length + 1,
      title: newTemplateTitle,
      version: 'v1.0',
      desc: newTemplateDesc
    };

    setTemplates([newTemp, ...templates]);
    setNewTemplateTitle('');
    setNewTemplateDesc('');
    setShowTemplateModal(false);
  };

  const deleteApp = (id) => {
    setApplications(applications.filter(app => app.id !== id));
  };

  const changeStatus = (id, nextStatus) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: nextStatus } : app));
  };

  // Filters
  const filteredApps = applications.filter(app => 
    app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = templates.filter(temp => 
    temp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    temp.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic statistics
  const totalApplies = applications.length * 100 + 284;
  const totalSent = applications.filter(a => a.status === 'Sent').length + 8420;

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-surface">
      {/* SideNavBar (Authority Source Mapping) */}
      <aside className="hidden lg:flex flex-col h-full py-8 px-4 space-y-2 bg-background border-r border-border w-64 shrink-0">
        <div className="flex items-center gap-3 px-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-black text-xl">
            M
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-on-background">MailApply</h1>
            <p className="font-body text-xs text-text-muted">Automated Hiring</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <button 
            onClick={() => setActiveTab('overview')} 
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all text-left ${activeTab === 'overview' ? 'bg-primary-container text-white font-semibold' : 'text-text-muted hover:bg-surface-container-low'}`}
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="font-label-md text-sm">Dashboard</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('templates')} 
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all text-left ${activeTab === 'templates' ? 'bg-primary-container text-white font-semibold' : 'text-text-muted hover:bg-surface-container-low'}`}
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span className="font-label-md text-sm">Templates</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('applies')} 
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all text-left ${activeTab === 'applies' ? 'bg-primary-container text-white font-semibold' : 'text-text-muted hover:bg-surface-container-low'}`}
          >
            <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
            <span className="font-label-md text-sm">Applications</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('analytics')} 
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all text-left ${activeTab === 'analytics' ? 'bg-primary-container text-white font-semibold' : 'text-text-muted hover:bg-surface-container-low'}`}
          >
            <span className="material-symbols-outlined text-[20px]">bar_chart</span>
            <span className="font-label-md text-sm">Analytics</span>
          </button>

          <button 
            onClick={() => setActiveTab('settings')} 
            className={`w-full flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all text-left ${activeTab === 'settings' ? 'bg-primary-container text-white font-semibold' : 'text-text-muted hover:bg-surface-container-low'}`}
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-label-md text-sm">Settings</span>
          </button>
        </nav>

        <button 
          onClick={() => setShowAppModal(true)} 
          className="mb-8 w-full py-3 bg-primary text-white rounded-xl font-label-md text-sm font-semibold shadow-sm hover:bg-primary-container transition-colors active:scale-95"
        >
          New Application
        </button>

        <div className="pt-8 border-t border-border space-y-1">
          <a className="flex items-center gap-3 text-text-muted px-4 py-2 hover:bg-surface-container-low rounded-lg transition-all" href="#help">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="font-label-md text-sm">Help Center</span>
          </a>
          <button 
            onClick={() => onNavigate('landing')} 
            className="w-full flex items-center gap-3 text-text-muted px-4 py-2 hover:bg-surface-container-low rounded-lg transition-all text-left"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="font-label-md text-sm">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* TopNavBar */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-12 w-full h-16 bg-white/80 backdrop-blur-md border-b border-border shrink-0">
          <div className="flex items-center gap-6">
            <button className="lg:hidden material-symbols-outlined text-text-muted p-2" onClick={() => onNavigate('landing')}>
              arrow_back
            </button>
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg border border-border">
              <span className="material-symbols-outlined text-text-muted text-[18px]">search</span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-44 md:w-64" 
                placeholder={activeTab === 'templates' ? 'Search templates...' : 'Search applications...'} 
                type="text"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="material-symbols-outlined text-slate-400 text-xs hover:text-slate-600">close</button>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-text-muted hover:text-primary transition-colors text-[24px]">notifications</button>
            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-border flex items-center justify-center font-bold text-slate-600 text-sm">
              S
            </div>
          </div>
        </header>

        {/* Dashboard Content tabs */}
        {activeTab === 'overview' && (
          <section className="p-6 md:p-12 space-y-8 animate-fade-in">
            {/* Page Header & Quick Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">Dashboard Overview</h2>
                <p className="font-body text-sm text-text-muted">Welcome back! Here's what's happening with your hiring pipeline.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setShowTemplateModal(true)} 
                  className="flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-xl font-label-md text-sm font-semibold text-on-surface hover:bg-surface-container-low transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  Create Template
                </button>
                <button 
                  onClick={() => setShowAppModal(true)} 
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-label-md text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  New Apply
                </button>
              </div>
            </div>

            {/* Stats Overview Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs font-semibold text-text-muted uppercase tracking-wider">Total Applies</span>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-display text-3xl font-extrabold">{totalApplies}</span>
                  <span className="font-label-sm text-xs text-success flex items-center gap-0.5 mb-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                    12%
                  </span>
                </div>
              </div>
              {/* Stat Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs font-semibold text-text-muted uppercase tracking-wider">Total Templates</span>
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                    <span className="material-symbols-outlined text-[20px]">file_copy</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-display text-3xl font-extrabold">{templates.length}</span>
                  <span className="font-label-sm text-xs text-text-muted mb-1">Stable</span>
                </div>
              </div>
              {/* Stat Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs font-semibold text-text-muted uppercase tracking-wider">Emails Sent</span>
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-display text-3xl font-extrabold">{totalSent}</span>
                  <span className="font-label-sm text-xs text-success flex items-center gap-0.5 mb-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                    5.4%
                  </span>
                </div>
              </div>
              {/* Stat Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col gap-2 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-xs font-semibold text-text-muted uppercase tracking-wider">Response Rate</span>
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                    <span className="material-symbols-outlined text-[20px]">analytics</span>
                  </div>
                </div>
                <div className="flex items-end gap-2 mt-2">
                  <span className="font-display text-3xl font-extrabold">18.2%</span>
                  <span className="font-label-sm text-xs text-error flex items-center gap-0.5 mb-1 font-semibold">
                    <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
                    0.8%
                  </span>
                </div>
              </div>
            </div>

            {/* Main Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart Section */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-border shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-lg font-bold text-on-surface">Application Trends</h3>
                  <select className="bg-surface-container-low border border-border rounded-lg text-xs font-semibold px-3 py-1.5 focus:outline-none">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                <div className="relative h-60 w-full flex items-end justify-between gap-2 px-2 mt-4">
                  {/* Simulated Dynamic Bar Chart */}
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '65%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '45%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '80%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '95%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '60%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '70%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '55%' }}></div>
                  <div className="flex-1 bg-primary/20 rounded-t-lg transition-all hover:bg-primary" style={{ height: '85%' }}></div>
                  <div className="flex-1 bg-primary rounded-t-lg" style={{ height: '100%' }}></div>
                </div>
                <div className="flex justify-between mt-4 px-2 text-text-muted font-label-sm text-xs font-semibold">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span className="text-primary font-bold">Today</span>
                </div>
              </div>
              
              {/* Campaign Card */}
              <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-end p-6 border border-border bg-slate-900 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.3)_0%,_transparent_60%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10"></div>
                <div className="relative z-20 text-white space-y-3">
                  <span className="bg-primary px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Pro Tip</span>
                  <h4 className="font-display text-lg font-bold">Optimize your outreach</h4>
                  <p className="font-body text-xs text-slate-300 leading-relaxed">Personalized subject lines increase email response rates by 32% on average.</p>
                  <button className="mt-4 w-full py-2.5 bg-white text-slate-900 rounded-xl font-label-md text-xs font-bold hover:bg-slate-100 transition-colors active:scale-95">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Applications Table-like Card */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-on-surface">Recent Applications</h3>
                  <button onClick={() => setActiveTab('applies')} className="text-primary font-label-md text-sm font-semibold hover:underline">View All</button>
                </div>
                <div className="divide-y divide-border flex-1">
                  {filteredApps.slice(0, 3).map((app) => (
                    <div key={app.id} className="px-6 py-4 flex items-center gap-4 hover:bg-surface-container-low transition-all group">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${app.logoBg}`}>
                        {app.logoLetter}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-sm font-semibold text-on-surface truncate">{app.title}</h4>
                        <p className="font-body text-xs text-slate-400 truncate">{app.company} • {app.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          app.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                          app.status === 'Sent' ? 'bg-blue-100 text-blue-700' :
                          app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  {filteredApps.length === 0 && (
                    <div className="p-8 text-center text-text-muted text-sm">No applications found.</div>
                  )}
                </div>
              </div>

              {/* Templates Section */}
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-on-surface">Outreach Templates</h3>
                  <button onClick={() => setActiveTab('templates')} className="text-primary font-label-md text-sm font-semibold hover:underline">Manage</button>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  {filteredTemplates.slice(0, 2).map((temp) => (
                    <div key={temp.id} className="group p-4 border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all cursor-pointer relative" onClick={() => setActiveTab('templates')}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                        <span className="font-label-sm text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-semibold text-text-muted">{temp.version}</span>
                      </div>
                      <h4 className="font-label-md text-sm font-semibold mb-1 text-on-surface truncate">{temp.title}</h4>
                      <p className="font-body text-xs text-text-muted line-clamp-2">{temp.desc}</p>
                    </div>
                  ))}
                  <div 
                    onClick={() => setShowTemplateModal(true)}
                    className="group p-4 border-2 border-dashed border-border rounded-2xl hover:bg-surface-container-low hover:border-primary transition-all flex flex-col items-center justify-center text-center cursor-pointer min-h-[120px]"
                  >
                    <span className="material-symbols-outlined text-text-muted group-hover:text-primary mb-2 text-[24px]">add_circle</span>
                    <span className="font-label-md text-xs font-semibold text-text-muted group-hover:text-primary">New Template</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <section className="p-6 md:p-12 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-on-surface">Manage Templates</h2>
                <p className="font-body text-sm text-text-muted">Create and manage your high-converting outreach email templates.</p>
              </div>
              <button 
                onClick={() => setShowTemplateModal(true)} 
                className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-label-md text-sm font-semibold shadow-sm hover:bg-primary-container transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                Create Template
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((temp) => (
                <div key={temp.id} className="bg-white p-6 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="material-symbols-outlined text-primary text-[24px]">description</span>
                      <span className="text-xs bg-slate-100 px-2 py-0.5 rounded font-semibold text-slate-500">{temp.version}</span>
                    </div>
                    <h4 className="font-display text-base font-bold mb-2 text-on-surface">{temp.title}</h4>
                    <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-3">{temp.desc}</p>
                  </div>
                  <div className="flex gap-2 justify-end pt-6 mt-4 border-t border-slate-100">
                    <button className="text-xs font-bold text-primary hover:underline px-2 py-1">Edit</button>
                    <button className="text-xs font-bold text-red-500 hover:underline px-2 py-1">Delete</button>
                  </div>
                </div>
              ))}
              {filteredTemplates.length === 0 && (
                <div className="col-span-full py-16 text-center text-text-muted bg-white rounded-2xl border border-border">
                  No templates match your search query.
                </div>
              )}
            </div>
          </section>
        )}

        {/* Applications Tab */}
        {activeTab === 'applies' && (
          <section className="p-6 md:p-12 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-on-surface">Job Applications</h2>
                <p className="font-body text-sm text-text-muted">Track application progress, dates, and communications in one place.</p>
              </div>
              <button 
                onClick={() => setShowAppModal(true)} 
                className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-label-md text-sm font-semibold shadow-sm hover:bg-primary-container transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                New Application
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-border text-slate-500 font-label-sm text-xs font-bold uppercase tracking-wider">
                      <th className="py-4 px-6">Role &amp; Company</th>
                      <th className="py-4 px-6">Date Added</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${app.logoBg}`}>
                              {app.logoLetter}
                            </div>
                            <div>
                              <h4 className="font-label-md text-sm font-semibold text-on-surface">{app.title}</h4>
                              <p className="font-body text-xs text-text-muted">{app.company}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-body text-sm text-slate-500">{app.time}</td>
                        <td className="py-4 px-6">
                          <select 
                            value={app.status} 
                            onChange={(e) => changeStatus(app.id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border-none cursor-pointer focus:ring-1 focus:ring-primary ${
                              app.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                              app.status === 'Sent' ? 'bg-blue-100 text-blue-700' :
                              app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            <option value="Draft">Draft</option>
                            <option value="Sent">Sent</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <button className="text-sm font-bold text-primary hover:underline" onClick={() => alert(`Review application details for ${app.title} @ ${app.company}`)}>Details</button>
                            <button className="text-sm font-bold text-red-500 hover:underline" onClick={() => deleteApp(app.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredApps.length === 0 && (
                      <tr>
                        <td colSpan="4" className="py-16 text-center text-text-muted text-sm bg-white">
                          No job applications found matching your query.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <section className="p-6 md:p-12 space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-on-surface">Analytics Panel</h2>
              <p className="font-body text-sm text-text-muted">In-depth tracking, open rates, and response metrics for outreach campaigns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-border rounded-2xl shadow-sm text-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Email Open Rate</span>
                <div className="text-4xl font-extrabold text-primary mt-2">64.5%</div>
                <div className="text-xs text-success font-semibold mt-2 flex items-center justify-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">arrow_upward</span> +3.2% vs last month
                </div>
              </div>
              <div className="bg-white p-6 border border-border rounded-2xl shadow-sm text-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Avg. Response Time</span>
                <div className="text-4xl font-extrabold text-secondary mt-2">1.8 Days</div>
                <div className="text-xs text-success font-semibold mt-2 flex items-center justify-center gap-0.5">
                  <span className="material-symbols-outlined text-xs">arrow_downward</span> -0.4 Days improved
                </div>
              </div>
              <div className="bg-white p-6 border border-border rounded-2xl shadow-sm text-center">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Offer Success Rate</span>
                <div className="text-4xl font-extrabold text-green-600 mt-2">4.8%</div>
                <div className="text-xs text-text-muted font-semibold mt-2">Top 5% of candidates</div>
              </div>
            </div>

            <div className="bg-white p-6 border border-border rounded-2xl shadow-sm">
              <h3 className="font-display text-base font-bold text-on-surface mb-6">Interactive Performance Matrix</h3>
              <div className="aspect-video max-h-[300px] w-full bg-slate-50 border border-border rounded-xl flex items-center justify-center text-text-muted text-sm font-semibold flex-col gap-2">
                <span className="material-symbols-outlined text-primary text-[32px]">query_stats</span>
                Dynamic interactive charts and graphics (Loaded)
              </div>
            </div>
          </section>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <section className="p-6 md:p-12 space-y-8 animate-fade-in">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-on-surface">Account Settings</h2>
              <p className="font-body text-sm text-text-muted">Manage profile details, email synchronization, and appearance theme preferences.</p>
            </div>

            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 max-w-2xl space-y-6">
              <h3 className="font-display text-lg font-bold text-on-surface border-b border-slate-100 pb-3">Sync Email Provider</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-border">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[32px] text-red-500">mail</span>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">Google Gmail integration</h4>
                    <p className="text-xs text-text-muted">Send applications from your primary Gmail address securely.</p>
                  </div>
                </div>
                <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-container transition-colors shadow">
                  Connect Account
                </button>
              </div>

              <h3 className="font-display text-lg font-bold text-on-surface border-b border-slate-100 pb-3 pt-4">Profile Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary" type="text" defaultValue="Shivam Kumar" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input className="w-full border border-border rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary" type="email" defaultValue="shivam@example.com" />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button className="border border-border text-on-surface text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">Cancel</button>
                <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary-container transition-colors shadow" onClick={() => alert('Settings successfully updated!')}>Save Settings</button>
              </div>
            </div>
          </section>
        )}

        {/* Footer (Authority Source Mapping) */}
        <footer className="w-full py-12 px-6 md:px-12 mt-auto flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-t border-border shrink-0 text-slate-400">
          <div className="flex flex-col items-center md:items-start gap-1">
            <h5 className="font-display text-base font-bold text-primary">MailApply</h5>
            <p className="font-body text-xs text-text-muted">© 2026 MailApply Inc. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-xs font-semibold text-text-muted">
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
            <a className="hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors" href="#">Contact</a>
          </div>
        </footer>
      </main>

      {/* Modal: New Application */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-border shadow-2xl p-6 md:p-8 max-w-md w-full relative">
            <button className="absolute top-4 right-4 material-symbols-outlined text-text-muted hover:text-slate-900" onClick={() => setShowAppModal(false)}>
              close
            </button>
            <h3 className="font-display text-xl font-bold mb-2">New Job Application</h3>
            <p className="text-xs text-text-muted mb-6">Record a job application details to track in your career CRM.</p>
            
            <form onSubmit={handleAddApp} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Role Title</label>
                <input 
                  value={newAppName}
                  onChange={(e) => setNewAppName(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
                  placeholder="e.g. Frontend Engineer" 
                  type="text" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                <input 
                  value={newAppCompany}
                  onChange={(e) => setNewAppCompany(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
                  placeholder="e.g. OpenAI" 
                  type="text" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                <select 
                  value={newAppStatus}
                  onChange={(e) => setNewAppStatus(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                >
                  <option value="Draft">Draft</option>
                  <option value="Sent">Sent</option>
                  <option value="Accepted">Accepted</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 mt-4 bg-primary text-white rounded-xl font-label-md text-sm font-semibold hover:bg-primary-container transition-colors shadow active:scale-95"
              >
                Track Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Create Template */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl border border-border shadow-2xl p-6 md:p-8 max-w-md w-full relative">
            <button className="absolute top-4 right-4 material-symbols-outlined text-text-muted hover:text-slate-900" onClick={() => setShowTemplateModal(false)}>
              close
            </button>
            <h3 className="font-display text-xl font-bold mb-2">Create Email Template</h3>
            <p className="text-xs text-text-muted mb-6">Write a cold outreach or cover letter template. You can use this for quick copy-pasting.</p>
            
            <form onSubmit={handleAddTemplate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Template Title</label>
                <input 
                  value={newTemplateTitle}
                  onChange={(e) => setNewTemplateTitle(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
                  placeholder="e.g. Cold Email - Recruiter" 
                  type="text" 
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Template Content</label>
                <textarea 
                  value={newTemplateDesc}
                  onChange={(e) => setNewTemplateDesc(e.target.value)}
                  className="w-full border border-border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary h-32" 
                  placeholder="Dear [Name], I noticed you are hiring..." 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 mt-4 bg-primary text-white rounded-xl font-label-md text-sm font-semibold hover:bg-primary-container transition-colors shadow active:scale-95"
              >
                Save Template
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
