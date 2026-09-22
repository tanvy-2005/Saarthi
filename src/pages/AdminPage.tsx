import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  Calendar, 
  FileText, 
  ArrowLeft,
  Shield,
  Activity
} from 'lucide-react';
import { adminStore } from '@/lib/adminStore';
import { AdminDashboardView } from '@/components/admin/AdminDashboardView';
import { AdminUsersView } from '@/components/admin/AdminUsersView';
import { AdminVerificationView } from '@/components/admin/AdminVerificationView';
import { AdminEventsView } from '@/components/admin/AdminEventsView';
import { AdminReportsView } from '@/components/admin/AdminReportsView';

export type AdminTab = 'dashboard' | 'users' | 'verification' | 'events' | 'reports';

export default function AdminPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const tabParam = searchParams.get('tab') as AdminTab;
  const activeTab: AdminTab = ['dashboard', 'users', 'verification', 'events', 'reports'].includes(tabParam)
    ? tabParam
    : 'dashboard';

  const [pendingCount, setPendingCount] = useState(adminStore.getPendingVerificationsCount());

  useEffect(() => {
    return adminStore.subscribe(() => {
      setPendingCount(adminStore.getPendingVerificationsCount());
    });
  }, []);

  const handleTabChange = (tab: AdminTab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-6">
        
        {/* Admin Navigation & Tab Bar */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-deep text-brand-glow flex items-center justify-center font-bold shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold font-serif text-slate-900">
                  Institutional Admin Console
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Registry Active
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Governance Portal • Saarthi University Network
              </p>
            </div>
          </div>

          {/* Primary Navigation Pills */}
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {/* Dashboard */}
            <button
              onClick={() => handleTabChange('dashboard')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                activeTab === 'dashboard'
                  ? 'bg-brand-deep text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            {/* Users */}
            <button
              onClick={() => handleTabChange('users')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                activeTab === 'users'
                  ? 'bg-brand-deep text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Users</span>
            </button>

            {/* Verification */}
            <button
              onClick={() => handleTabChange('verification')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 relative ${
                activeTab === 'verification'
                  ? 'bg-brand-deep text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verification</span>
              {pendingCount > 0 && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  activeTab === 'verification' 
                    ? 'bg-brand-glow text-brand-deep' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {pendingCount}
                </span>
              )}
            </button>

            {/* Events */}
            <button
              onClick={() => handleTabChange('events')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                activeTab === 'events'
                  ? 'bg-brand-deep text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>

            {/* Reports */}
            <button
              onClick={() => handleTabChange('reports')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 ${
                activeTab === 'reports'
                  ? 'bg-brand-deep text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Reports</span>
            </button>
          </nav>

        </div>

        {/* Tab Content Display */}
        <div>
          {activeTab === 'dashboard' && <AdminDashboardView onNavigateTab={handleTabChange} />}
          {activeTab === 'users' && <AdminUsersView />}
          {activeTab === 'verification' && <AdminVerificationView />}
          {activeTab === 'events' && <AdminEventsView />}
          {activeTab === 'reports' && <AdminReportsView />}
        </div>

      </div>
    </div>
  );
}
