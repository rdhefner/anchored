"use client";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

export default function TopicPreview() {
  const emotionsExample = [
    {
      stage: "Launch (12-14)",
      scripture: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. —Romans 15:13",
      theme: "Understanding your basic emotions helps you respond wisely to life's situations and grow in godly character.",
      sections: [
        {
          type: "explore",
          heading: "🔍 EXPLORE: What are emotions anyway?",
          content: `Emotions are like alerts from your brain and body. They're the basic feelings that pop up to tell you something important is happening around you or inside you. Think of them as signals your heart and mind send to get your attention about different situations. Emotions are part of being human, and they're actually pretty amazing when you understand how they work.

Your emotions influence how you behave, how you treat others, and how you make decisions. They're your body's natural way of responding to whatever life throws at you. But here's the thing: emotions give you information, not instructions. Just because you feel something doesn't mean you have to act on it.

Key truths:
• Emotions are designed to give you information about life
• They influence your behavior and relationships
• Understanding them helps you make better choices
• Everyone experiences the same basic emotions
• Feelings are real, but they're not always facts

💡 Think of it this way: Emotions are like the dashboard lights in a car—they give you important information about what's happening inside so you can respond appropriately.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• When you're feeling a strong emotion, where do you notice it in your body first?
• Can you think of a time when an emotion helped you respond well to a situation?
• Why do you think God gave us emotions instead of making us like robots?`
        },
        {
          type: "explore",
          heading: "🔍 EXPLORE: The six basic emotions",
          content: `Have you ever wondered why you can feel happy and nervous at the same time, or why some days you feel everything all at once? Just like primary colors mix to create all other colors, these six basic emotions combine to create the full spectrum of what you feel:

Core emotions:
• Happiness - Joy, contentment, satisfaction when things go well
• Sadness - Sorrow, disappointment when you lose something important
• Anger - Frustration, irritation when you feel threatened or treated unfairly
• Fear - Anxiety, nervousness when you sense danger or uncertainty
• Surprise - Shock, amazement when something unexpected happens
• Disgust - Strong dislike when something seems wrong or offensive

Each emotion serves a purpose and gives you information about your situation. Happiness celebrates good things, sadness helps you process loss, anger motivates you to stand up for what's right, fear keeps you safe, surprise alerts you to changes, and disgust helps you avoid harmful things.

💡 Think of it this way: Your emotions are like different tools in a toolbox—each one is designed for specific situations and helps you handle life effectively.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• Which of these emotions do you experience most often? Why do you think that is?
• Can you think of a time when each emotion actually helped you in some way?
• Which emotion do you find hardest to handle well?`
        },
        {
          type: "realtalk",
          heading: "💬 REAL TALK: When emotions get intense",
          content: `Sometimes emotions hit you like a wave and you feel completely overwhelmed. Maybe you're so angry you feel like your chest might explode, or so sad you can't stop crying, or so anxious your heart won't stop racing. If you've been there, you're totally normal. Your teenage brain is still figuring itself out, and intense emotions are part of that process. Here's what's really happening:`,
          table: {
            headers: ["What you might feel", "What's actually happening", "How to respond"],
            rows: [
              ["\"This anger is too strong\"", "Your fight-or-flight response is activated", "Take deep breaths, step away if needed"],
              ["\"I can't stop feeling sad\"", "You're processing something important", "Let yourself feel it, but don't stay stuck"],
              ["\"This fear is paralyzing me\"", "Your brain is trying to protect you", "Ask: \"Is this real danger or just worry?\""],
              ["\"I feel nothing at all\"", "You might be overwhelmed or tired", "Give yourself time and space to reset"]
            ]
          },
          afterTable: `Remember: Having strong emotions doesn't make you weak or broken—it makes you human. The goal isn't to eliminate emotions but to understand them and respond in ways that honor God and help you grow.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• When have you felt like an emotion was "too much" to handle? What helped?
• How do you think Jesus handled strong emotions during His time on earth?
• What's the difference between feeling an emotion and being controlled by it?`
        },
        {
          type: "apply",
          heading: "📌 APPLY: Live it out",
          content: `Choose one (or more!):
✅ Emotion tracker: For one week, notice and name one emotion you feel each day—just awareness, no judgment
✅ Body check: When you feel a strong emotion, pause and notice where you feel it physically (tight chest, clenched jaw, etc.)
✅ Wise response: Next time you feel angry or frustrated, take three deep breaths before responding
✅ Gratitude practice: Each day, identify one thing that brought you genuine happiness or joy`
        },
        {
          type: "reflect",
          heading: "✨ REFLECT: Bring it to God",
          content: `God, thank You for creating me with emotions that help me navigate life. Help me understand what I'm feeling and respond in ways that honor You. When my emotions feel overwhelming, remind me that You're with me and that I can trust You with every part of my heart. Give me wisdom to use my emotions as tools for good and help me grow in emotional maturity. Amen.`
        }
      ]
    },
    {
      stage: "Navigate (14-16)",
      scripture: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. —Romans 15:13",
      theme: "Understanding your emotional triggers and learning healthy ways to express feelings helps you navigate life with greater stability.",
      sections: [
        {
          type: "explore",
          heading: "🔍 EXPLORE: What triggers your emotional responses?",
          content: `Your emotions don't just happen randomly. They're triggered by specific things around you and inside you. Think of emotional triggers like buttons that get pushed, causing you to feel happy, angry, sad, excited, or frustrated. Understanding what pushes your buttons helps you respond better instead of just reacting.

Key triggers:
• Environmental factors - What you see, hear, and experience around you (like getting praised or criticized)
• Biological factors - How your brain and body were made, including hormones and genetics
• Social influences - How other people treat you and interact with you
• Past experiences - Memories and history that shape how you see current situations
• Beliefs and values - What you think is important and how you interpret events
• Physical sensations - Being hungry, tired, or in pain versus feeling healthy and energetic

💡 Think of it this way: Your emotions are like waves in the ocean. Some are small and easy to ride out, others can knock you off balance if you're not prepared. Understanding your triggers is like learning how to spot the waves early so you can surf them instead of being pulled under.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• What situations or people tend to trigger strong emotions in you—both positive and negative?
• How do you think your past experiences might be influencing how you react to things now?
• When you're physically tired or hungry, how does that change your emotional responses?`
        },
        {
          type: "explore",
          heading: "🔍 EXPLORE: Healthy ways to express emotions",
          content: `Once you understand your triggers, the next step is learning healthy ways to express what you're feeling. Bottling up emotions isn't healthy, but neither is exploding or hurting others. You were designed to feel deeply, and there are healthy ways to work through what you're experiencing.

Healthy expression methods:
• Talk it out - Share with trusted friends, family, or mentors who care about you
• Write it down - Journal your thoughts and feelings to process them privately
• Get creative - Use art, music, writing, or other creative outlets to channel emotions
• Move your body - Exercise releases tension and boosts mood through natural endorphins
• Pray about it - Bring your feelings to God, who understands and cares about everything you're going through
• Show yourself grace - Don't be so hard on yourself. Treat yourself with the same kindness God shows you
• Know when to get help - If your emotions feel too big to handle alone, talk to a parent, counselor, pastor, or other trusted adult for support

💡 Think of it this way: Healthy emotional expression is like having good plumbing in your house. You need ways for things to flow out properly, or everything backs up and gets messy.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• Which of these healthy expression methods feels most natural to you? Which feels most challenging?
• What's one thing you've noticed about how prayer helps you process feelings differently than just talking to friends?
• What happens when you try to stuff down or ignore your emotions instead of expressing them?`
        },
        {
          type: "realtalk",
          heading: "💬 REAL TALK: Building your emotional toolkit",
          content: `Everyone needs a personal toolkit of strategies that work for them. What helps your friend might not help you, and that's okay. The key is developing multiple options so you're not stuck when emotions hit hard.`,
          table: {
            headers: ["When you feel...", "Try this..."],
            rows: [
              ["Overwhelmed", "Take deep breaths, write down what's bothering you, or talk to someone you trust"],
              ["Angry", "Go for a walk, do pushups, or pray for perspective before responding"],
              ["Sad", "Listen to music, journal, or spend time with people who care about you"],
              ["Anxious", "Focus on what you can control, pray about your worries, or do something physical, like exercise"],
              ["Excited", "Share it with others, thank God for good things, or channel it into something productive"]
            ]
          }
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• What emotions do you find hardest to handle in healthy ways?
• How might understanding your triggers help you prepare better responses?
• What's one situation where you wish you had handled your emotions differently, and which tool from this list might have helped?`
        },
        {
          type: "apply",
          heading: "📌 APPLY: Live it out",
          content: `Choose one (or more!):
✅ Track your triggers: For one week, write down situations that cause strong emotions and what you felt
✅ Try a new outlet: Pick one healthy expression method you haven't used much and practice it this week
✅ Start an emotion prayer: Each day, spend 5 minutes telling God about what you're feeling and why
✅ Build your toolkit: Create a personal list of 3-4 strategies that work best for you when emotions get intense`
        },
        {
          type: "reflect",
          heading: "✨ REFLECT: Bring it to God",
          content: `God, thank you for giving me emotions and for caring about how I feel. Help me understand what triggers my emotions and give me wisdom to express them in healthy ways. When I'm overwhelmed, remind me that you're my source of hope, joy, and peace. Teach me to bring my feelings to you first, and help me treat myself with the same grace you show me. Amen.`
        }
      ]
    },
    {
      stage: "Anchor (16-18+)",
      scripture: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope. —Romans 15:13",
      theme: "Learning to recognize, understand, and manage your emotions in healthy ways that strengthen relationships.",
      sections: [
        {
          type: "explore",
          heading: "🔍 EXPLORE: How to manage your emotions",
          content: `The emotional stakes feel higher now than they ever have—friendship drama hits harder, academic pressure intensifies, and future decisions carry more weight. Learning to manage your emotions well becomes essential—not just for your mental health, but for your ability to make wise choices and maintain healthy connections with others. Managing emotions isn't about suppressing what you feel; it's about recognizing, understanding, and responding to your emotions in ways that promote your well-being and strengthen your relationships.

Key skills for managing emotions:
• Recognizing what you're feeling - Pay attention to physical sensations, thoughts, and behaviors that come with different emotions so you can identify what's happening inside you
• Developing emotional awareness - Identify your triggers and notice patterns in how certain situations, people, or stressors affect you emotionally
• Practicing emotional regulation - Learn techniques like prayer, deep breathing, or temporarily stepping away when emotions become overwhelming
• Expressing emotions in healthy ways - Find constructive outlets through trusted relationships, journaling, or creative activities rather than bottling up or exploding
• Building problem solving skills - Address the underlying causes of difficult emotions by developing actionable steps and seeking support from family, trusted friends, or counselors when needed
• Prioritizing self-care - Maintain your physical, emotional, and mental well-being through adequate sleep, exercise, and activities that restore you

💡 Think of it this way: Managing emotions is like being the captain of a ship in changing weather. You can't control the storms, but you can learn to read the conditions, adjust your sails, and navigate safely to your destination.`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• What situations or relationships tend to trigger the strongest emotional reactions for you?
• How do you currently handle overwhelming emotions, and what strategies have been most effective?
• When you're facing a difficult decision, how do your emotions help or hinder your ability to think clearly?`
        },
        {
          type: "realtalk",
          heading: "💬 REAL TALK: How emotions affect your decisions",
          content: `Your emotions are like invisible advisors whispering in your ear every time you make a decision. They're not necessarily giving you bad advice, but they definitely have opinions! Understanding this connection helps you make choices that align with your values and long-term goals, not just your current feelings.`,
          table: {
            headers: ["Emotion", "How it affects decisions", "Example"],
            rows: [
              ["Fear", "Makes risks seem bigger, pushes toward safety", "Avoiding trying out for a team because you might not make it"],
              ["Excitement", "Encourages quick action, may overlook details", "Buying something expensive on impulse"],
              ["Anger", "Focuses on immediate response, may ignore consequences", "Sending a harsh text you later regret"],
              ["Anxiety/Overwhelm", "Makes you avoid decisions or procrastinate", "Not applying for opportunities because \"what's the point?\""]
            ]
          },
          afterTable: `Important reminders:
• Emotions provide valuable information but shouldn't be your only decision-making tool
• Your "gut feeling" combines emotion with subconscious processing—it's worth considering but not blindly following
• Group emotions can be contagious—make sure your decisions reflect your values, not just the mood of the crowd
• Taking time to calm intense emotions usually leads to better choices`
        },
        {
          type: "discuss",
          heading: "📣 DISCUSS: Let's talk about it",
          content: `• Can you think of a time when strong emotions led you to make a decision you later regretted? What would you do differently?
• How do you tell the difference between a helpful "gut feeling" and just being emotional?
• When have you seen group emotions influence decision-making (in friend groups, teams, or even online)?`
        },
        {
          type: "apply",
          heading: "📌 APPLY: Live it out",
          content: `Choose one (or more!):
✅ Emotion tracking: For one week, notice and write down one strong emotion you feel each day, what triggered it, and how you responded
✅ The pause practice: When you feel intense emotions this week, try taking three deep breaths and asking "What is this emotion telling me?" before responding
✅ Decision check: Before making any significant decision this week, ask yourself "How are my current emotions influencing this choice?"
✅ Support system: Identify one trusted person you can talk to when you're struggling with difficult emotions, and reach out to them this week`
        },
        {
          type: "reflect",
          heading: "✨ REFLECT: Bring it to God",
          content: `God, thank You for creating me with emotions that help me understand myself and connect with others. Help me to recognize what I'm feeling without being controlled by it. When my emotions feel overwhelming, remind me that You are my source of hope, joy, and peace. Give me wisdom to express my feelings in healthy ways and to make decisions that honor You. Help me to be patient with myself as I learn to manage my emotions better, and to seek support when I need it. Amen.`
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-gold">
        <div className="bg-navy-900 text-white px-6 py-4">
          <h3 className="text-xl font-heading font-bold">Sample Topic: Emotions</h3>
          <p className="text-sm text-gray-300 mt-1">See how content grows with your teen</p>
        </div>

        <div className="p-6 space-y-4">
          {emotionsExample.map((stage) => (
            <Disclosure key={stage.stage}>
              {({ open }) => (
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                  <Disclosure.Button className="flex justify-between items-center w-full px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="text-left">
                      <div className="font-bold text-navy-900 text-base">{stage.stage}</div>
                    </div>
                    <FiChevronDown className={`${open ? "transform rotate-180" : ""} transition-transform text-gold flex-shrink-0 ml-3 text-xl`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-white">
                    <div className="px-5 py-4 space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-navy-900">Theme:</div>
                        <div className="text-sm text-gray-700">{stage.theme}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-navy-900">Scripture anchor:</div>
                        <div className="text-sm text-gray-700 italic">&ldquo;{stage.scripture.split('—')[0].trim()}&rdquo;</div>
                        <div className="text-sm text-gray-700 text-right">—{stage.scripture.split('—')[1]}</div>
                      </div>
                      <div className="border-t border-gray-300 my-4"></div>
                    </div>
                    <div className="px-5 pb-5 space-y-6">
                      {stage.sections.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="font-bold text-navy-900 text-sm">{section.heading}</h4>
                          <div className={`text-gray-700 text-sm leading-relaxed ${section.type === 'reflect' ? 'italic' : ''}`}>
                            {section.content.split('\n').map((line, lineIdx) => {
                              if (line.trim().startsWith('•')) {
                                const bulletText = line.trim().substring(1).trim();
                                const dashIndex = bulletText.indexOf(' - ');
                                if (dashIndex > -1) {
                                  const title = bulletText.substring(0, dashIndex);
                                  const description = bulletText.substring(dashIndex + 3);
                                  return (
                                    <div key={lineIdx} className="flex gap-2 mb-1">
                                      <span className="flex-shrink-0">•</span>
                                      <span>
                                        <span className="font-semibold">{title}</span> - {description}
                                      </span>
                                    </div>
                                  );
                                }
                                return (
                                  <div key={lineIdx} className="flex gap-2 mb-1">
                                    <span className="flex-shrink-0">•</span>
                                    <span>{bulletText}</span>
                                  </div>
                                );
                              } else if (line.trim().startsWith('💡 Think of it this way:')) {
                                return (
                                  <div key={lineIdx} className="mt-3 mb-1">
                                    <span className="font-semibold">💡 Think of it this way:</span>
                                    <span> {line.trim().replace('💡 Think of it this way:', '').trim()}</span>
                                  </div>
                                );
                              } else if (line.trim().endsWith(':')) {
                                return (
                                  <div key={lineIdx} className="font-semibold mt-3 mb-1">
                                    {line}
                                  </div>
                                );
                              }
                              return <div key={lineIdx}>{line}</div>;
                            })}
                          </div>
                          {section.table && (
                            <div className="overflow-x-auto my-4">
                              <table className="w-full border-collapse border border-gray-300 text-sm">
                                <thead>
                                  <tr className="bg-gray-100">
                                    {section.table.headers.map((header, hIdx) => (
                                      <th key={hIdx} className="border border-gray-300 px-3 py-2 text-left font-semibold text-navy-900">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.table.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="hover:bg-gray-50">
                                      {row.map((cell, cIdx) => (
                                        <td key={cIdx} className="border border-gray-300 px-3 py-2 text-gray-700">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                          {section.afterTable && (
                            <div className="text-gray-700 text-sm leading-relaxed mt-4">
                              {section.afterTable.split('\n').map((line, lineIdx) => {
                                if (line.trim().startsWith('•')) {
                                  const bulletText = line.trim().substring(1).trim();
                                  const dashIndex = bulletText.indexOf(' - ');
                                  if (dashIndex > -1) {
                                    const title = bulletText.substring(0, dashIndex);
                                    const description = bulletText.substring(dashIndex + 3);
                                    return (
                                      <div key={lineIdx} className="flex gap-2 mb-1">
                                        <span className="flex-shrink-0">•</span>
                                        <span>
                                          <span className="font-semibold">{title}</span> - {description}
                                        </span>
                                      </div>
                                    );
                                  }
                                  return (
                                    <div key={lineIdx} className="flex gap-2 mb-1">
                                      <span className="flex-shrink-0">•</span>
                                      <span>{bulletText}</span>
                                    </div>
                                  );
                                } else if (line.trim().startsWith('💡 Think of it this way:')) {
                                  return (
                                    <div key={lineIdx} className="mt-3 mb-1">
                                      <span className="font-semibold">💡 Think of it this way:</span>
                                      <span> {line.trim().replace('💡 Think of it this way:', '').trim()}</span>
                                    </div>
                                  );
                                } else if (line.trim().endsWith(':')) {
                                  return (
                                    <div key={lineIdx} className="font-semibold mt-3 mb-1">
                                      {line}
                                    </div>
                                  );
                                }
                                return <div key={lineIdx}>{line}</div>;
                              })}
                            </div>
                          )}
                          {idx < stage.sections.length - 1 && (
                            <div className="border-t border-gray-300 my-4"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
