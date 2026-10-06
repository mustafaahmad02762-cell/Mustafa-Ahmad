import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  id?: string;
  initialService?: string;
  compactHeader?: boolean;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceRequired: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact-section',
  initialService = 'Website Design & Development',
  compactHeader = false,
}) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceRequired: initialService,
    message: '',
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
  }, [initialService]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[0-9+\-() ]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Please enter your business name.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief overview of your project (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData);
    }, 300);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessName: '',
      serviceRequired: initialService,
      message: '',
    });
    setErrors({});
  };

  return (
    <section id={id} className="py-20 lg:py-28 bg-white text-[#0A1128] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Agency Context & Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-[#0284C7] mb-3">
                <span>Start Your Project</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>Turn Your Vision Into Digital Growth</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1128] tracking-tight">
                {compactHeader
                  ? 'Start Your Growth Conversation With Digital Vibes.'
                  : 'Let’s Architect Your Next Digital Breakthrough.'}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Tell us about your vision, business goals, and the service you need. Our senior strategists will review your current digital footprint and respond within one business day with a custom growth plan.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#0A1128]">
                  01. Tailored Strategy & Architecture Review
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Every project inquiry receives a personalized diagnostic of your website UX, search visibility, and growth opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#0A1128]">
                  02. Transparent Scope & Milestones
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Clear timelines, deliverables, and measurable KPIs designed around your business stage.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050A18] text-white border border-slate-800 space-y-3">
              <div className="text-xs text-[#38BDF8]">
                <span>Direct Strategy Desk</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>24/7 Digital Presence</span>
              </div>
              <div className="text-sm font-semibold text-white">
                hello@digitalvibes.agency
              </div>
              <div className="text-sm font-mono-tabular text-slate-300">
                +1 (800) 555-0194
              </div>
              <div className="text-xs text-slate-400 pt-1">
                Digital Vibes — Turn Your Vision Into Digital Growth.
              </div>
            </div>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-10">
              {submittedData ? (
                <div className="py-8 space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#0284C7]">
                      <span>Inquiry Confirmed</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>Priority Strategist Review</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                      Thank you, {submittedData.name}. Your brief for {submittedData.businessName} is in our hands.
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Our senior team is reviewing your request for{' '}
                      <span className="font-semibold text-[#0A1128]">{submittedData.serviceRequired}</span>.
                      We will reach out to <span className="font-semibold text-[#0A1128]">{submittedData.email}</span> or{' '}
                      <span className="font-mono-tabular font-semibold text-[#0A1128]">{submittedData.phone}</span> within one business day.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5">
                    <div className="font-semibold text-[#0A1128]">Project Brief Summary:</div>
                    <div>Business Name: {submittedData.businessName}</div>
                    <div>Service Required: {submittedData.serviceRequired}</div>
                    <div className="text-slate-500 italic">“{submittedData.message}”</div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0A1128] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-2">
                    <h3 className="font-display text-xl font-bold text-[#0A1128]">
                      Start Your Project With Digital Vibes
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete the form below and our team will prepare a custom growth roadmap for your business.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border ${
                          errors.name
                            ? 'border-red-500 focus:outline-red-500'
                            : 'border-slate-300 focus:outline-[#0284C7]'
                        } text-[#0A1128] placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@yourbusiness.com"
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border ${
                          errors.email
                            ? 'border-red-500 focus:outline-red-500'
                            : 'border-slate-300 focus:outline-[#0284C7]'
                        } text-[#0A1128] placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                      >
                        Phone *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+1 (555) 234-5678"
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border font-mono-tabular ${
                          errors.phone
                            ? 'border-red-500 focus:outline-red-500'
                            : 'border-slate-300 focus:outline-[#0284C7]'
                        } text-[#0A1128] placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label
                        htmlFor="contact-business"
                        className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                      >
                        Business Name *
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: undefined });
                        }}
                        placeholder="Nova Brands Inc."
                        className={`w-full px-4 py-2.5 text-sm bg-white rounded-lg border ${
                          errors.businessName
                            ? 'border-red-500 focus:outline-red-500'
                            : 'border-slate-300 focus:outline-[#0284C7]'
                        } text-[#0A1128] placeholder:text-slate-400 transition-colors`}
                      />
                      {errors.businessName && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceRequired}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceRequired: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-lg border border-slate-300 text-[#0A1128] focus:outline-[#0284C7] transition-colors"
                    >
                      <option value="Website Design & Development">
                        Website Design & Development
                      </option>
                      <option value="SEO & Search Growth">
                        SEO & Search Growth
                      </option>
                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>
                      <option value="Email Marketing">
                        Email Marketing
                      </option>
                      <option value="Link Building">
                        Link Building
                      </option>
                      <option value="Digital Marketing Strategy">
                        Digital Marketing Strategy
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#0A1128] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share your vision, timeline, and what you want to achieve online..."
                      className={`w-full px-4 py-3 text-sm bg-white rounded-lg border ${
                        errors.message
                          ? 'border-red-500 focus:outline-red-500'
                          : 'border-slate-300 focus:outline-[#0284C7]'
                      } text-[#0A1128] placeholder:text-slate-400 transition-colors`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60"
                    >
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-slate-500">
                      100% Confidential · Direct Senior Strategist Response
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
