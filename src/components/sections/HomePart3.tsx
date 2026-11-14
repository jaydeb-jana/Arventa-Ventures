import { CheckCircle2, Star, Layers, Cpu } from "lucide-react";
import { Section, SectionHeader } from "@/src/components/ui/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/Card";

export function WhyChooseUs() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="Why Choose Arventa Ventures?"
        subtitle="We aren't just another vendor. We are your dedicated growth partners."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "No Vanilla Strategies",
            desc: "Cookie-cutter doesn't cut it. Every campaign is custom-built for your specific market and audience.",
          },
          {
            title: "Data-Obsessed",
            desc: "Every decision we make is backed by rigorous data analysis, not gut feelings.",
          },
          {
            title: "Transparent Reporting",
            desc: "You'll always know exactly where your budget is going and what ROI it's generating.",
          },
          {
            title: "Senior Talent Only",
            desc: "Your account won't be handed off to a junior intern. You get expert strategists.",
          },
          {
            title: "Agile & Adaptive",
            desc: "The digital world moves fast. We pivot quickly to capitalize on new trends and algorithms.",
          },
          {
            title: "Focus on Revenue",
            desc: "Traffic is great, but revenue is better. We optimize for bottom-line growth.",
          },
        ].map((item, i) => (
          <Card key={i} className="bg-card border-border">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section className="bg-slate-950 border-y border-border">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Don't just take our word for it."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Rahul Verma",
            role: "Owner, The Daily Brew",
            text: "Arventa Ventures ki team ne humara online presence puri tarah se badal diya. Local SEO se ab har roz naye customers aa rahe hain, sach me kamaal ka result mila!",
          },
          {
            name: "Vikram Desai",
            role: "Founder, TechSphere India",
            text: "Their B2B LinkedIn strategy generated more qualified pipeline in one quarter than we had in the entire previous year. Exceptional service and ROI.",
          },
          {
            name: "Priya Sharma",
            role: "CMO, Trendify",
            text: "Unki Facebook ads strategy ne humara ROAS 1.5x se 4x kar diya. They truly know how to create ads that actually convert. Highly recommended!",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="p-8 bg-card border border-border rounded-2xl relative"
          >
            <div className="flex text-orange-500 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-slate-300 mb-6 italic">"{t.text}"</p>
            <div>
              <p className="text-white font-bold">{t.name}</p>
              <p className="text-slate-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudyOne() {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-500/10 rounded-[2rem] transform -rotate-2"></div>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Case Study 1"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/cs1/800/600"; }}
            className="relative rounded-2xl border border-border object-cover"
          />
        </div>
        <div>
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">
            Case Study: eCommerce
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Scaling an Apparel Brand to $1M/mo
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Through a combination of highly-targeted Meta ads, conversion rate
            optimization on their Shopify store, and an automated email
            retention flow, we helped Nova Fashion scale their revenue by 300%
            in 6 months.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">300%</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Revenue Growth
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">4.5x</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Ad ROAS
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CaseStudyTwo() {
  return (
    <Section className="bg-card border-y border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">
            Case Study: Local Business
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dominating Local Search for a Clinic
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            By overhauling their Google Business Profile, building hyper-local
            landing pages, and running targeted search ads, we completely filled
            the schedule for Elite Dental Care within 45 days.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">#1</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                Search Rank
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">+150</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">
                New Patients/Mo
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] transform rotate-2"></div>
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Case Study 2"
            referrerPolicy="no-referrer"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://picsum.photos/seed/cs2/800/600"; }}
            className="relative rounded-2xl border border-border object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export function IndustriesGrid() {
  return (
    <Section className="bg-background">
      <SectionHeader
        title="We Speak Your Industry's Language"
        subtitle="Specialized marketing strategies tailored to the unique dynamics of your sector."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "Local Retail",
          "B2B Tech",
          "Healthcare",
          "eCommerce",
          "Real Estate",
          "Restaurants",
          "Education",
          "Beauty & Spa",
        ].map((ind, i) => (
          <div
            key={i}
            className="p-6 bg-card border border-border rounded-xl text-center hover:border-orange-500 transition-colors"
          >
            <p className="text-white font-medium">{ind}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CreativeShowcase() {
  return (
    <Section className="bg-slate-950 border-y border-border">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Layers className="w-12 h-12 text-orange-500 mx-auto mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          World-Class Creative Design
        </h2>
        <p className="text-lg text-slate-400">
          Your ads won't perform if they don't capture attention. Our in-house
          creative team designs thumb-stopping visuals and copy that demand
          engagement.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=400",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=400",
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=400",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=400"
        ].map((imgUrl, i) => (
          <div
            key={i}
            className="aspect-square bg-slate-900 rounded-3xl border border-border overflow-hidden group"
          >
            <img
              src={imgUrl}
              alt="Creative Design"
              referrerPolicy="no-referrer"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/creative-${i}/400/400`; }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function TechStack() {
  return (
    <Section className="bg-background">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/3">
          <Cpu className="w-12 h-12 text-orange-500 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Modern Tech & Engineering Stack
          </h2>
          <p className="text-slate-400">
            We engineer high-performance software with battle-tested frameworks, cloud infrastructure, and enterprise analytics to fuel your exponential growth.
          </p>
        </div>
        <div className="md:w-2/3 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React & Next.js",
            "TypeScript",
            "Node.js",
            "Python",
            "Flutter & Mobile",
            "Tailwind CSS",
            "PostgreSQL",
            "AWS & Cloud",
            "Shopify & E-Com",
            "Meta Business",
            "Google Analytics 4",
            "Docker & CI/CD",
          ].map((tech, i) => (
            <div
              key={i}
              className="h-20 p-4 bg-card border border-border rounded-xl text-center flex items-center justify-center transition-colors hover:border-orange-500/50 hover:bg-orange-500/5"
            >
              <span className="text-slate-300 font-medium text-sm md:text-base leading-tight">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
