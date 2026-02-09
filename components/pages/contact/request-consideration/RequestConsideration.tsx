"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

type FormInput = {
  fullNameTitle: string;
  entityName: string;
  role: string;
  region: string;
  message: string;
};

interface RequestConsiderationProps {
  content: {
    title: string;
    subtitle: string;
    initiate: string;
    inputs: {
      fullName: string;
      entityName: string;
      role: string;
      region: string;
      message: string;
    };
  };
  common: {
    buttons: {
      submitRequest: string;
    };
  };
}

const RequestConsideration = ({
  content,
  common,
}: RequestConsiderationProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully! Check console for data.");
    reset();
  };

  return (
    <section className="py-20 bg-[#070707] text-white overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <h2
              className="text-5xl lg:text-6xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs">
              {content.subtitle}
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden group"
            >
              {/* Subtle Gradient Glow effect */}
              <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>

              <div className="flex items-center gap-3 mb-10">
                <div className="w-[3px] h-6 bg-[#00D1FF]"></div>
                <p className="text-xl font-medium tracking-tight">
                  {content.initiate}
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <div className="relative">
                  <input
                    {...register("fullNameTitle", { required: true })}
                    type="text"
                    placeholder={content.inputs.fullName}
                    className={`w-full bg-white/[0.04] border ${errors.fullNameTitle ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("entityName", { required: true })}
                    type="text"
                    placeholder={content.inputs.entityName}
                    className={`w-full bg-white/[0.04] border ${errors.entityName ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("role", { required: true })}
                    type="text"
                    placeholder={content.inputs.role}
                    className={`w-full bg-white/[0.04] border ${errors.role ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("region", { required: true })}
                    type="text"
                    placeholder={content.inputs.region}
                    className={`w-full bg-white/[0.04] border ${errors.region ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors`}
                  />
                </div>

                <div className="relative">
                  <textarea
                    {...register("message", { required: true })}
                    placeholder={content.inputs.message}
                    rows={4}
                    className={`w-full bg-white/[0.04] border ${errors.message ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors resize-none`}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#00D1FF] to-[#51A2FF] text-white px-8 py-4 rounded-full font-semibold overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,209,255,0.3)]"
                  >
                    <span>{common.buttons.submitRequest}</span>
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestConsideration;
