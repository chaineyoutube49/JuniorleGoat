
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Star, ExternalLink, ArrowRight, Maximize2 } from 'lucide-react';
import { AGENCY_DATA } from './constants';

interface ServiceModalProps {
  service: any;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/95 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-secondary rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/10 brutal-border"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-secondary z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-600 text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <service.icon size={24} />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-12">
            {/* Description & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-black mb-4 text-red-600 uppercase tracking-[0.3em]">{AGENCY_DATA.services_section.modal.concept}</h3>
                <p className="text-slate-300 leading-relaxed font-mono">
                  {service.description} Nous ne faisons pas que du travail, nous créons des chefs-d'œuvre qui dominent votre marché.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-black mb-4 text-red-600 uppercase tracking-[0.3em]">{AGENCY_DATA.services_section.modal.arsenal}</h3>
                <ul className="space-y-4">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                      <ArrowRight size={14} className="text-red-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Portfolio / Creations */}
            <div>
              <h3 className="text-xs font-black mb-6 text-red-600 uppercase tracking-[0.3em] flex items-center gap-2">
                {AGENCY_DATA.services_section.modal.portfolio} <ExternalLink size={16} />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {service.portfolio.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-zoom-in"
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                      <p className="text-white text-xs font-black uppercase tracking-widest">{item.title}</p>
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-xs font-black mb-6 text-red-600 uppercase tracking-[0.3em] flex items-center gap-2">
                {AGENCY_DATA.services_section.modal.testimonials} <Star size={16} className="fill-red-600 text-red-600" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.testimonials.map((testimonial: any, idx: number) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-red-600 text-red-600" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-6 font-mono text-sm leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <h4 className="font-black text-white text-xs uppercase tracking-widest">{testimonial.name}</h4>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
              {AGENCY_DATA.services_section.modal.footer_text}
            </p>
            <motion.a
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${AGENCY_DATA.phone}?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-red-600 text-white rounded-xl font-black flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:bg-red-500 transition-all uppercase text-xs tracking-widest brutal-border"
            >
              {AGENCY_DATA.services_section.modal.cta} <MessageCircle size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* 🎬 LIGHTBOX (GRANDE VUE) */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white z-[80] transition-colors"
              >
                <X size={32} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.url}
                    className="w-full h-full object-contain bg-black"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain bg-black"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{selectedMedia.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
