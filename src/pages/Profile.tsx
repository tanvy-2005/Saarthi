import { useState } from 'react';
import { User, Upload, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <div className="flex flex-col gap-2 text-center items-center">
        <h1 className="text-3xl font-bold text-slate-900">Profile Center</h1>
        <p className="text-slate-500">Manage your avatar, bio, and academic credentials.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-8 mt-4">
        {/* Avatar Upload */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-24 rounded-full bg-slate-100 border-2 border-brand-surface flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <User className="w-10 h-10 text-slate-400" />
            )}
            <label className="absolute bottom-0 w-full h-1/3 bg-black/50 hover:bg-black/70 flex items-center justify-center cursor-pointer transition-colors">
              <Upload className="w-4 h-4 text-white" />
              <input 
                type="file" 
                className="hidden" 
                accept=".jpg,.png,.webp" 
                onChange={handleFileUpload}
              />
            </label>
          </div>
          <p className="text-xs text-slate-500">JPG, PNG, WEBP (Max 2MB)</p>
        </div>

        {/* Form Fields */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-slate-700">Bio</label>
            <textarea 
              className="w-full mt-1 min-h-[100px] p-3 rounded-lg border border-border bg-slate-50 focus:outline-none focus:border-brand-btn transition-colors resize-none text-sm"
              defaultValue="I am a software engineer..."
            />
          </div>
          
          <div>
            <label className="text-sm font-medium text-slate-700">Course</label>
            <Input defaultValue="B.Tech" className="mt-1" disabled />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Department</label>
            <Input defaultValue="CSE" className="mt-1" disabled />
          </div>

          <div className="col-span-1 md:col-span-2 flex items-center gap-2 p-4 bg-brand-surface/50 rounded-xl border border-brand-glow/20">
            <CheckCircle className="w-5 h-5 text-brand-glow" />
            <span className="text-sm text-brand-deep font-medium">Your academic credentials are verified by the institution.</span>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
            <Button className="w-full bg-brand-deep hover:bg-brand-btn text-white rounded-full">
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
