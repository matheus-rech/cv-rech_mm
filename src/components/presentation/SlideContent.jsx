import React from 'react';
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Linkedin, Brain, GitMerge, LineChart, FileText, Calendar, Award, BookOpen, Users, HeartHandshake, Mic, PenTool, BotMessageSquare, Star, BookMarked, MessageSquare, Briefcase, ExternalLink, Globe, Flag, Building, GraduationCap, CheckCircle, FileCheck, CircleDollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute'
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'relative'
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute'
  })
};

const SectionTitle = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-center mb-12" style={{ color: 'var(--text-primary)' }}>
      {children}
    </h1>
  );
};

const getIconComponent = (iconName) => {
  const iconMap = {
    Phone, Mail, MapPin, Linkedin, Brain, GitMerge, LineChart, FileText,
    Calendar, Award, BookOpen, Users, HeartHandshake, Mic, PenTool, 
    BotMessageSquare, Star, BookMarked, MessageSquare, Briefcase, 
    ExternalLink, Globe, Flag, Building, GraduationCap, CheckCircle, 
    FileCheck, CircleDollarSign
  };
  return iconMap[iconName] || FileText;
};

export default function SlideContent({ slide, direction }) {
  const renderSlideContent = () => {
    switch (slide.slide_number) {
      case 1: {
        const { content } = slide;
        return (
          <div className="h-full p-12 flex flex-col justify-center">
            <div className="flex items-center gap-8 mb-10">
              <img
                src={content.profile_image}
                alt={content.main_title}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0" />
              <div>
                <h1 className="text-5xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                  {content.main_title}
                </h1>
                <p className="text-3xl font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {content.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4 text-base" style={{ color: 'var(--text-secondary)' }}>
                  {content.contact_info.map((item, index) => {
                    const IconComponent = getIconComponent(item.icon);
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <IconComponent size={18} />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Languages</h3>
                <div className="space-y-4">
                  {content.languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <div>
                        <p className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{lang.name}</p>
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{lang.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Professional ID</h3>
                <div className="space-y-4">
                  {content.professional_ids.map((id, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex-shrink-0 rounded-full ${id.color === 'green' ? 'bg-green-100' : 'bg-gray-100'} flex items-center justify-center`}>
                        <span className={`font-bold ${id.color === 'green' ? 'text-green-700' : 'text-gray-700'} text-xs`}>{id.badge}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>{id.name}</p>
                        <p className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>{id.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 2: {
        const { content } = slide;
        return (
          <div className="p-16">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index} className={`p-6 rounded-lg ${section.style === 'light' ? "border border-gray-200" : ""}`} 
                     style={section.style === 'light' 
                       ? { backgroundColor: '#F9FAFB', border: '1px solid var(--border-color)' }
                       : { backgroundColor: 'var(--dark-card-background)', color: 'var(--dark-text-primary)' }
                     }>
                  <h3 className={`font-bold text-lg mb-2 ${section.style === 'light' ? 'text-gray-900' : ''}`}>{section.title}</h3>
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.degree && (
                        <>
                          <p className={`text-xl font-semibold ${section.style === 'light' ? 'text-gray-900' : ''}`}>{item.degree}</p>
                          <p className={`text-sm mt-1 ${section.style === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                            {item.institution} • <span className="font-bold">{item.years}</span>
                          </p>
                        </>
                      )}
                      {item.position && (
                        <>
                          <p className="text-xl font-semibold">{item.position}</p>
                          <div className={`text-xs mt-2 space-y-1 ${section.style === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {item.details.map((detail, detailIndex) => (
                              <p key={detailIndex}><span className="font-bold">{detail.label}:</span> {detail.value}</p>
                            ))}
                            <p className="font-semibold pt-1">{item.period}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 3: {
        const { content } = slide;
        return (
          <div className="p-16">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--dark-card-background)', color: 'var(--dark-text-primary)' }}>
              <h3 className="font-bold text-xl text-center mb-2">Research Focus & Achievements</h3>
              <p className="text-center text-sm mb-6" style={{ color: 'var(--dark-text-secondary)' }}>
                {content.subtitle}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                {content.achievements.map((achievement, index) => {
                  const IconComponent = getIconComponent(achievement.icon);
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="p-3 border-2 border-gray-500 rounded-full mb-2">
                        <IconComponent size={24} />
                      </div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-400">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }

      case 4: {
        const { content } = slide;
        return (
          <div className="p-12">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.experiences.map((item, index) => (
                  <div key={index} className="p-5 rounded-lg flex flex-col" style={{ backgroundColor: '#F9FAFB', border: '1px solid var(--border-color)' }}>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg flex items-center gap-2">
                        <Users size={16} /> {item.title} ({item.year})
                      </h3>
                      {item.hours && (
                        <p className="text-sm font-medium mt-1" style={{ color: 'var(--primary-color)' }}>
                          {item.hours} contact hours
                        </p>
                      )}
                      <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                        Supervisor: {item.supervisor}
                      </p>
                      <p className="text-sm mt-3 leading-snug">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 space-y-2">
                      <p className="text-xs text-gray-500 font-semibold mb-2">Selection via competitive exam:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className={item.status === 'Funded' ? 'border-green-300 text-green-700' : 'border-blue-300 text-blue-700'}>
                          {item.status === 'Funded' ? <CircleDollarSign className="w-3 h-3 mr-1.5"/> : <HeartHandshake className="w-3 h-3 mr-1.5"/> }
                          {item.status}
                        </Badge>
                        <Badge variant="outline" className={item.examType === 'Theoretical & Hands-on' ? 'border-purple-300 text-purple-700' : 'border-amber-300 text-amber-700'}>
                          {item.examType === 'Theoretical & Hands-on' ? <CheckCircle className="w-3 h-3 mr-1.5"/> : <FileCheck className="w-3 h-3 mr-1.5"/> }
                          {item.examType}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case 5: {
        const { content } = slide;
        return (
          <div className="p-12">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300"></div>
              <div className="space-y-6">
                {content.timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-[18px] top-1 w-6 h-6 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center">
                      <Calendar size={12} className="text-gray-500" />
                    </div>
                    <div className={`p-6 rounded-lg ${item.style === 'dark' ? '' : 'bg-slate-100'}`} 
                         style={item.style === 'dark' 
                           ? { backgroundColor: 'var(--dark-card-background)', color: 'var(--dark-text-primary)' }
                           : { backgroundColor: '#F9FAFB', border: '1px solid var(--border-color)' }
                         }>
                      <p className={`absolute -left-16 top-0.5 font-bold text-xl ${item.style === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className={`font-semibold mt-1 ${item.style === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.institution}
                      </p>
                      <p className={`text-sm mt-2 ${item.style === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case 6: {
        const { content } = slide;
        const scopeColors = {
          blue: 'text-blue-300',
          green: 'text-green-300', 
          yellow: 'text-yellow-300',
          purple: 'text-purple-300'
        };
        
        return (
          <div className="p-8">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--dark-card-background)', color: 'var(--dark-text-primary)' }}>
                <h3 className="font-bold text-xl mb-6 text-center">Leadership & Professional Activities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.leadership_roles.map((role, index) => {
                    const IconComponent = getIconComponent(role.scope === 'GLOBAL' ? 'Globe' : role.scope === 'NATIONAL' ? 'Flag' : role.scope === 'REGIONAL' ? 'Building' : 'GraduationCap');
                    return (
                      <div key={index} className="p-4 bg-gray-600 rounded-md">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent size={16} className={scopeColors[role.color]} />
                          <span className={`text-xs font-semibold ${scopeColors[role.color]}`}>{role.scope}</span>
                        </div>
                        <p className="font-bold text-sm">{role.title}</p>
                        <p className="text-xs" style={{ color: 'var(--dark-text-secondary)' }}>
                          {role.organization}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {content.additional_activities.slice(0, 2).map((activity, index) => {
                    const IconComponent = getIconComponent(activity.icon);
                    return (
                      <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 flex items-start gap-4">
                        <IconComponent size={18} className="text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-sm text-gray-900 mb-1">{activity.title}</h4>
                          <p className="text-xs text-gray-600">{activity.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  {content.additional_activities.slice(2).map((activity, index) => {
                    const IconComponent = getIconComponent(activity.icon);
                    return (
                      <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 flex items-start gap-4">
                        <IconComponent size={18} className="text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-sm text-gray-900 mb-1">{activity.title}</h4>
                          <p className="text-xs text-gray-600">{activity.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 7: {
        const { content } = slide;
        return (
          <div className="my-1 p-16 mx-auto px-12 py-16">
            <SectionTitle>{slide.title}</SectionTitle>
            <div className="max-w-4xl mx-auto space-y-4">
              {content.awards.map((item, index) => (
                <div key={index} className={`flex items-center p-4 rounded-lg shadow-sm text-white ${item.color === 'gray' ? 'bg-[#374151]' : 'bg-[#4B5563]'}`}>
                  <div className="mr-4 p-2 bg-black bg-opacity-20 rounded-full">
                    {item.type === "first" ? <Award size={24} /> : <Star size={24} />}
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm opacity-80">{item.organization}</p>
                    <p className="text-sm opacity-80">{item.location}</p>
                  </div>
                  <div className="ml-4 px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-bold">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 8: {
        const { content } = slide;
        const getCategoryColor = (category) => {
          const colors = {
            "Machine Learning": "bg-blue-100 text-blue-700",
            "Neurosurgery": "bg-green-100 text-green-700",
            "Medical Education": "bg-purple-100 text-purple-700",
            "Innovation": "bg-orange-100 text-orange-700"
          };
          return colors[category] || "bg-gray-100 text-gray-700";
        };

        const ArticleItem = ({ item }) => (
          <div className="p-5 bg-white rounded-lg shadow-sm space-y-3" style={{ borderTop: '2px solid #f3f4f6' }}>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0">
                <ExternalLink size={14} className="text-gray-600"/>
              </div>
              <h4 className="font-bold text-gray-800 text-sm leading-tight flex-grow">{item.title}</h4>
            </div>
            <div className="pl-10">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm font-medium">{item.journal}</p>
                <span className="text-xs font-semibold text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{item.year}</span>
              </div>
              <p className="text-gray-500 text-xs mt-2 leading-snug">{item.authors}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {item.categories.map((category, index) => (
                  <span key={index} className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(category)}`}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

        const midIndex = Math.ceil(content.articles.length / 2);
        const leftColumnArticles = content.articles.slice(0, midIndex);
        const rightColumnArticles = content.articles.slice(midIndex);

        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-12" style={{color: '#444444'}}>{slide.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {leftColumnArticles.map((item, index) => <ArticleItem key={index} item={item} />)}
              </div>
              <div className="space-y-6">
                {rightColumnArticles.map((item, index) => <ArticleItem key={index} item={item} />)}
              </div>
            </div>
          </div>
        );
      }

      case 9: {
        const { content } = slide;
        const getCategoryColor = (category) => {
          const colors = {
            "Machine Learning": "bg-blue-100 text-blue-700",
            "Neurosurgery": "bg-green-100 text-green-700",
            "Medical Education": "bg-purple-100 text-purple-700",
            "Innovation": "bg-orange-100 text-orange-700"
          };
          return colors[category] || "bg-gray-100 text-gray-700";
        };

        const PresentationItem = ({ item }) => (
          <div className="p-5 bg-white rounded-lg shadow-sm space-y-3" style={{ borderTop: '2px solid #f3f4f6' }}>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full flex-shrink-0">
                {item.type === 'oral' ? <Mic size={16} className="text-gray-600" /> : <BookMarked size={16} className="text-gray-600" />}
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="font-bold text-gray-800 text-sm leading-tight mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.organization} • {item.location}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.categories.map((category, index) => (
                    <span key={index} className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(category)}`}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{item.year}</span>
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{item.type_display}</span>
              </div>
            </div>
          </div>
        );

        const midIndex = Math.ceil(content.presentations.length / 2);
        const leftColumn = content.presentations.slice(0, midIndex);
        const rightColumn = content.presentations.slice(midIndex);

        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#444444' }}>
              {slide.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {leftColumn.map((item, index) => <PresentationItem key={index} item={item} />)}
              </div>
              <div className="space-y-6">
                {rightColumn.map((item, index) => <PresentationItem key={index} item={item} />)}
              </div>
            </div>
          </div>
        );
      }

      default:
        return <div>Slide not found</div>;
    }
  };

  return (
    <motion.div
      key={slide.slide_number}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }}
      className="w-full h-full bg-white">
      {renderSlideContent()}
    </motion.div>
  );
}