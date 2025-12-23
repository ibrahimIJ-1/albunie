"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  department: z.string(),
  message: z.string().min(10),
});

export default function Contact() {
  const t = useTranslations("Contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully! (Demo Mode)");
    reset();
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-40">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-3 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-8">
              Connect With Us
            </span>
            <h2 className="text-5xl md:text-8xl font-black font-display text-slate-900 mb-8 tracking-tighter leading-none">
              {t("title")}
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-3">
                  <FiMapPin className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-3 text-2xl uppercase tracking-wider">
                    Our HQ
                  </h4>
                  <p className="text-xl text-slate-500 font-light">
                    Al-Mansour District
                    <br />
                    Baghdad, Iraq
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-secondary/5 flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-500 -rotate-3">
                  <FiPhone className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-3 text-2xl uppercase tracking-wider">
                    Direct Line
                  </h4>
                  <p className="text-xl text-slate-500 font-light">
                    +964 770 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 rotate-6">
                  <FiMail className="text-3xl" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-3 text-2xl uppercase tracking-wider">
                    Email Inquiries
                  </h4>
                  <p className="text-xl text-slate-500 font-light">
                    info@albunie.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106634.61460341775!2d44.361486!3d33.312805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          {/* Form Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Terminal Header Decor */}
            <div className="absolute -top-10 left-12 right-12 h-10 bg-slate-900 rounded-t-[2rem] flex items-center px-8 gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              <div className="ml-auto text-[8px] font-mono text-slate-500 tracking-widest">
                SECURE_CHANNEL_ENCRYPTED
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-10 bg-white/40 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-white shadow-[0_50px_100px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Internal Terminal Grid Decor */}
              <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.3em] pl-2 leading-none">
                    {t("name")}
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/60 border-2 border-transparent focus:border-primary focus:outline-none transition-all text-slate-900 shadow-sm font-display font-bold"
                    placeholder="ID_ENTER_NAME"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.3em] pl-2 leading-none">
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/60 border-2 border-transparent focus:border-primary focus:outline-none transition-all text-slate-900 shadow-sm font-display font-bold"
                    placeholder="CRYPTO_MAIL_SIG"
                  />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.3em] pl-2 leading-none">
                    {t("subject")}
                  </label>
                  <input
                    {...register("subject")}
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/60 border-2 border-transparent focus:border-primary focus:outline-none transition-all text-slate-900 shadow-sm font-display font-bold"
                    placeholder="TASK_PRIORITY_LOW"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.3em] pl-2 leading-none">
                    {t("department")}
                  </label>
                  <select
                    {...register("department")}
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/60 border-2 border-transparent focus:border-primary focus:outline-none transition-all text-slate-900 shadow-sm appearance-none cursor-pointer font-display font-bold"
                  >
                    <option value="sales">{t("departments.sales")}</option>
                    <option value="support">{t("departments.support")}</option>
                    <option value="general">{t("departments.general")}</option>
                  </select>
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.3em] pl-2 leading-none">
                  {t("message")}
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  className="w-full px-8 py-6 rounded-[2rem] bg-white/60 border-2 border-transparent focus:border-primary focus:outline-none transition-all resize-none text-slate-900 shadow-sm font-display font-bold"
                  placeholder="SYS_LOG_CONTENT"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative py-8 bg-slate-900 hover:bg-primary text-white font-black rounded-[2.5rem] transition-all flex items-center justify-center gap-4 text-xl tracking-[0.2em] uppercase shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-primary/40 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">{t("submit")}</span>
                <FiSend className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />

                {/* Data stream line decor */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-white z-20"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
