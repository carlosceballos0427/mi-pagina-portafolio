import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Mail, User, MessageSquare } from 'lucide-react';

const ModalContent = ({ isOpen, onClose, status, setStatus, handleSubmit }: {
    isOpen: boolean;
    onClose: () => void;
    status: 'idle' | 'sending' | 'success';
    setStatus: (s: 'idle' | 'sending' | 'success') => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Scrollable container */}
                    <div className="absolute inset-0 overflow-y-auto">
                        <div className="min-h-full flex items-center justify-center p-4 py-12">
                            {/* Modal box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-lg bg-slate-900 p-8 rounded-3xl shadow-2xl border border-cyan-400/20"
                            >
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>

                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-2 text-white">Hablemos</h2>
                                    <p className="text-zinc-400">¿Tienes un proyecto en mente o solo quieres saludar?</p>
                                </div>

                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="py-12 text-center space-y-4"
                                    >
                                        <div className="w-16 h-16 bg-cyan-400/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                                            <Send size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
                                        <p className="text-zinc-400">Te responderé lo antes posible.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <User size={16} /> Nombre
                                            </label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="Tu nombre"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400/50 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <Mail size={16} /> Correo electrónico
                                            </label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="tu@email.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400/50 focus:outline-none transition-colors text-white placeholder:text-zinc-500"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                                                <MessageSquare size={16} /> Mensaje
                                            </label>
                                            <textarea
                                                required
                                                name="message"
                                                rows={4}
                                                placeholder="Cuéntame más sobre tu propuesta..."
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none text-white placeholder:text-zinc-500"
                                            />
                                        </div>

                                        <button
                                            disabled={status === 'sending'}
                                            type="submit"
                                            className="w-full bg-cyan-400 hover:bg-cyan-300 py-4 rounded-xl font-bold text-slate-900 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                                        >
                                            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                                            <Send size={18} />
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export const ContactModal = ({ triggerStyle = 'button' }: { triggerStyle?: 'button' | 'link' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mlgdkdqy', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setIsOpen(false);
                    setStatus('idle');
                }, 3000);
            } else {
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                setStatus('idle');
            }
        } catch (error) {
            alert('Hubo un error de conexión. Por favor, revisa tu internet.');
            setStatus('idle');
        }
    };

    return (
        <>
            {/* Trigger Button */}
            {triggerStyle === 'button' ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-cyan-400 hover:bg-cyan-300 px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-semibold cursor-pointer text-slate-900"
                >
                    <Mail size={20} />
                    Contáctame
                </button>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-cyan-400 font-semibold hover:scale-105 transition-transform cursor-pointer"
                >
                    Contacto
                </button>
            )}

            {/* Modal rendered via portal */}
            {mounted && (
                <ModalContent
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    status={status}
                    setStatus={setStatus}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    );
};
