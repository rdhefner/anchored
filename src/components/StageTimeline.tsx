"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StageTimeline() {
  const stages = [
    {
      name: "Launch",
      ages: "12-14",
      color: "bg-navy-900",
      description: "Foundation building and early teen conversations"
    },
    {
      name: "Navigate",
      ages: "14-16",
      color: "bg-navy-800",
      description: "Deeper exploration and growing maturity"
    },
    {
      name: "Anchor",
      ages: "16-18+",
      color: "bg-gold",
      description: "Preparing for independence with lasting faith"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.name}>
            <div className="flex-1 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`${stage.color} text-white rounded-lg p-6 shadow-lg`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-heading font-bold mb-1">
                      {stage.name}
                    </h3>
                    <p className={`text-sm font-semibold mb-3 ${stage.color === 'bg-gold' ? 'text-navy-900' : 'text-gold'}`}>
                      Ages {stage.ages}
                    </p>
                    <p className={`text-sm leading-relaxed ${stage.color === 'bg-gold' ? 'text-navy-900' : 'text-white/90'}`}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {index < stages.length - 1 && (
              <div className="hidden md:flex items-center justify-center px-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5L15 12L9 19" stroke="#c26d2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
