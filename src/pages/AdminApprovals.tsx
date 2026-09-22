import { Check, X, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pendingUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Alumni', status: 'PENDING_VERIFICATION', date: '2026-09-20' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Student', status: 'PENDING_VERIFICATION', date: '2026-09-21' },
];

export default function AdminApprovalsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Admin Approvals</h1>
        <p className="text-slate-500">Review and verify new registrations before granting platform access.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role Request</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendingUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">{user.name}</td>
                  <td className="px-6 py-4 text-slate-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-md text-xs font-medium w-fit">
                      <ShieldAlert className="w-3 h-3" /> {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200">
                        <X className="w-4 h-4 mr-1" /> Reject
                      </Button>
                      <Button size="sm" className="bg-brand-deep hover:bg-brand-btn text-white">
                        <Check className="w-4 h-4 mr-1" /> Approve
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pendingUsers.length === 0 && (
            <div className="p-8 text-center text-slate-500">No pending approvals.</div>
          )}
        </div>
      </div>
    </div>
  );
}
