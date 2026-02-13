"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
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

  const [state, handleFormspreeSubmit] = useFormspree("mwvnlryo");

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await handleFormspreeSubmit(data);
    if (state.succeeded) {
      reset();
    }
  };

  if (state.succeeded) {
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

            {/* Right Form - Success Message */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative p-8 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-white/60 max-w-md">
                    Thank you for reaching out. We have received your message
                    and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-8 text-[#00D1FF] hover:text-[#51A2FF] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                    disabled={state.submitting}
                    className={`w-full bg-white/[0.04] border ${errors.fullNameTitle ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("entityName", { required: true })}
                    type="text"
                    placeholder={content.inputs.entityName}
                    disabled={state.submitting}
                    className={`w-full bg-white/[0.04] border ${errors.entityName ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("role", { required: true })}
                    type="text"
                    placeholder={content.inputs.role}
                    disabled={state.submitting}
                    className={`w-full bg-white/[0.04] border ${errors.role ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                </div>

                <div className="relative">
                  <input
                    {...register("region", { required: true })}
                    type="text"
                    placeholder={content.inputs.region}
                    disabled={state.submitting}
                    className={`w-full bg-white/[0.04] border ${errors.region ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                </div>

                <div className="relative">
                  <textarea
                    {...register("message", { required: true })}
                    placeholder={content.inputs.message}
                    rows={4}
                    disabled={state.submitting}
                    className={`w-full bg-white/[0.04] border ${errors.message ? "border-red-500" : "border-white/10"} rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00D1FF]/50 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#00D1FF] to-[#51A2FF] text-white px-8 py-4 rounded-full font-semibold overflow-hidden hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(0,209,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span>
                      {state.submitting
                        ? "Submitting..."
                        : common.buttons.submitRequest}
                    </span>
                    {!state.submitting && (
                      <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
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
