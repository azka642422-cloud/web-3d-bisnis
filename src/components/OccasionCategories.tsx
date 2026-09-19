import { Heart, GraduationCap, Cake, Sparkles, Users, Smile, Gift } from 'lucide-react';
import { occasions } from '../data/occasions';

interface OccasionCategoriesProps {
  onSelectOccasion: (occasionName: string) => void;
}

export function OccasionCategories({ onSelectOccasion }: OccasionCategoriesProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return Heart;
      case 'GraduationCap':
        return GraduationCap;
      case 'Cake':
        return Cake;
      case 'Sparkles':
        return Sparkles;
      case 'Users':
        return Users;
      case 'Smile':
        return Smile;
      default:
        return Gift;
    }
  };

  return (
    <section className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            BERBAGAI MOMEN SPESIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Bisa Dibuat Untuk Berbagai Momen
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Setiap momen berharga layak dirayakan dengan cara yang unik dan mendalam.
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occ) => {
            const IconEl = getIconComponent(occ.icon);
            return (
              <div
                key={occ.id}
                onClick={() => onSelectOccasion(occ.name)}
                className="group bg-[#111726]/80 hover:bg-[#161f36] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                    <IconEl className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Playfair_Display',serif]">
                    {occ.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {occ.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>Pilih Momen Ini &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
