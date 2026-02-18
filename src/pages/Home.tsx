import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, BookOpen, Users, FileText, ChevronDown } from "lucide-react";

/**
 * Modern Academic Minimalism Design
 * - Deep Navy (#1a365d) with Teal (#0d9488) accents
 * - Georgia serif headings, Inter sans-serif body
 * - Asymmetric layout with generous whitespace
 * - Left sidebar navigation, content-focused design
 */

function PublicationItem({ title, authors, journal, abstract }: {
  title: string;
  authors: string;
  journal: string;
  abstract: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="text-foreground">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-left inline"
      >
        <span className="font-medium text-primary hover:text-accent transition-colors underline decoration-primary/30 hover:decoration-accent cursor-pointer">
          {title}
        </span>
        <ChevronDown className={`inline-block w-4 h-4 ml-1 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <span className="text-muted-foreground"> — {authors}. </span>
      <span className="text-accent font-medium italic">{journal.split(",")[0]}</span>
      <span className="text-muted-foreground">, {journal.split(",").slice(1).join(",").trim()}.</span>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed pl-0 pr-4 pb-2 border-l-2 border-accent/30 ml-0 pl-3">
          {abstract}
        </p>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-lg font-serif font-bold text-foreground">Joseph Mai</h1>
            <p className="text-xs text-muted-foreground">Associate Professor (Tenured)</p>
            <p className="text-xs text-muted-foreground">Shanghai University of Finance and Economics</p>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
            <a href="#teaching" className="text-sm font-medium hover:text-accent transition-colors">Teaching</a>
            <a href="#research" className="text-sm font-medium hover:text-accent transition-colors">Research</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="relative container py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="mb-4">
                <img
                  src="/JosephMaiPortrait.jpg"
                  alt="Joseph Mai"
                  className="w-40 h-40 rounded-full object-cover border-4 border-accent/20 shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-accent uppercase tracking-wider">Welcome to my website</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl space-y-4">
                <span className="block">I am an Associate Professor of Economics specializing in international trade, intellectual property rights, and institutional development. My research examines how trade policy, legal enforcement, and industrial upgrading shape firm behavior, innovation, and global supply chain dynamics, with a particular focus on emerging economies.</span>
                <span className="block">This website provides information about my research projects, publications, teaching, and ongoing academic work. I welcome scholarly collaboration and discussion.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 lg:py-32">
        <div className="container">
          <div className="space-y-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  <h2 className="text-4xl font-serif font-bold text-foreground">Teaching</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am committed to fostering intellectual curiosity and critical thinking in my students through engaging lectures, interactive discussions, and practical applications of economic theory.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">Teaching Courses</h3>
                <div className="space-y-3">
                  {[
                    { name: "International Economics I", level: "Undergraduate" },
                    { name: "Intermediate Macroeconomics", level: "Undergraduate" },
                    { name: "Policies in International Economics", level: "Graduate" },
                    { name: "Empirical Trade", level: "Graduate" }
                  ].map((course, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border">
                      <BookOpen className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-foreground block">{course.name}</span>
                        <span className="text-xs text-muted-foreground">{course.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container">
          <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-accent" />
                  <h2 className="text-4xl font-serif font-bold text-foreground">Research</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My research focuses on international economics, political economy of trade policy, and intellectual property rights protection and innovation. I examine how trade policies, legal institutions, and intellectual property enforcement shape economic outcomes, particularly in emerging markets like China.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">Research Interests</h3>
                <ul className="list-disc list-outside pl-6 space-y-2 text-foreground">
                  <li>International Trade &amp; Trade Policy</li>
                  <li>Intellectual Property Rights &amp; Innovation</li>
                  <li>Institutions, Law, and Economic Development</li>
                  <li>Global Value Chains &amp; Supply Chain Resilience</li>
                  <li>Industrial Policy &amp; Structural Transformation</li>
                  <li>Firm Behavior, Productivity, and Technology Adoption</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-foreground">Publications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Peer-reviewed journal articles and research publications
              </p>
            </div>

            <ol className="list-decimal list-outside pl-6 space-y-4">
              <PublicationItem
                title={`"Trade Circumvention in Free Trade Areas"`}
                authors="With Deng Jianpeng, Jialin Li, Yanmin Shi, and Linke Zhu"
                journal="Journal of International Money and Finance, 2025"
                abstract="Do Regional Trade Agreements (RTAs) incentivize non-member countries to engage in trade circumvention through member countries, and how much does this behavior contribute to increased trade among RTA members? This paper provides empirical evidence on the prevalence of illicit transshipment through RTAs and quantifies its contribution to trade growth in a case study of NAFTA. Using global trade data and guided by a discrete choice model of shipment methods, we estimate the causal impact of tariff differentials created by RTAs on illicit transshipment, inferred from trade discrepancies. Our results show that circumvention increases more for products with larger preferential margins after the establishment of an RTA, with re-exports serving as a key channel. We also find substantial heterogeneity in these effects. In the case of NAFTA, we find that trade circumvention contributed to 16.4% of the increase in U.S. imports from Mexico in 2018, when the U.S. returned to protectionist policies."
              />
              <PublicationItem
                title={`"A Proposed Tax Reform for China: Enhancing Consumption and Pension Sustainability"`}
                authors="With David Leung and Zhaoyong Chen"
                journal="China Economic Review, 2025"
                abstract="China faces dual challenges of an aging population and low household consumption. This study proposes shifting the tax burden from income to consumption to stimulate domestic demand and support pension sustainability. Using a heterogeneous-agent overlapping generations (OLG) model calibrated to Chinese data with earnings and health risks, we quantify the effects on output, labor supply, capital accumulation, consumption, and pension expenditures. Our analysis confirms that consumption taxes distort savings less than income taxes. Transitioning to consumption taxation raises disposable income, more than offsetting the associated costs, and increases consumption among all working-age cohorts. Welfare improves for both new generations and the broader population, affirming the reform's efficacy in an aging economy."
              />
              <PublicationItem
                title={`"Anti-foreign Bias in the Court: Welfare Explanation and Evidence from Canadian Intellectual Property Litigation"`}
                authors="With Andrey Stoyanov"
                journal="Journal of International Economics, 2019"
                abstract="Are judges concerned, in the same way as policy makers, with the effects of their decisions on national welfare? In this paper, we analyze this question by examining the outcomes of intellectual property rights (IPR) litigations between domestic and foreign firms. We use a simple model of oligopoly, in which IPR takes the form of a more efficient production technology, to illustrate how antiforeign bias varies across cases when judges have welfare concerns. The predictions of the model are tested using data on all Canadian IPR cases over a four-year period. We find that foreign firms have about 25 percentage points lower probability of protecting their IPR in Canadian courts relative to domestic firms. We also find that courts' decisions are aligned with national welfare maximization principles so that foreign firms are less likely to win in those cases when the implied welfare gains from not protecting foreign IPR are greater. These findings are robust to controlling for endogenous selection of firms into litigation."
              />
              <PublicationItem
                title={`"The Effect of the Canada-US Free Trade Agreement on Canadian Multilateral Trade Liberalization"`}
                authors="With Andrey Stoyanov"
                journal="Canadian Journal of Economics, 2015"
                abstract="In this paper we show that the Canada-US Free Trade Agreement (CUSFTA) tariff preferences have triggered a decline in Canadian external tariffs, explaining a two percentage point reduction in the average tariff between 1989 and 1998. We find that industries generating minimal export income to US firms experienced larger tariff reductions in Canada, suggesting bilateral trade policy cooperation. However, we find no connection between preferential trade liberalization and the intensity of industrial lobbying activities in Canada regarding trade policy matters."
              />
            </ol>
          </div>
        </div>
      </section>

      {/* Working Papers */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-foreground">Working Papers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Research in progress and papers under review
              </p>
            </div>

            <ol className="list-decimal list-outside pl-6 space-y-3">
              <li className="text-foreground">
                <span className="font-medium">"A Quiet Revolution: International Trade and Women Empowerment"</span>
                <span className="text-muted-foreground"> — With Xiaoming Cai and Yun Dai.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"WTO Entry and the Effect of the TRIPS: Evidence from China Intellectual Property Litigations"</span>
                <span className="text-muted-foreground"> — With Yanmin Shi.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Digital Transformation and Global Supply Chain Resilience: Evidence from China"</span>
                <span className="text-muted-foreground"> — With Haoyuan Ding, Wenjuan Dong, and Junjie Tang.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Intellectual Property Enforcement and Economic Geography: Evidence from Firm Location Decisions in China"</span>
                <span className="text-muted-foreground"> — With Yanmin Shi.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Gains from Intellectual Property Protection: Innovation, Market Power, Competition in China"</span>
                <span className="text-muted-foreground"> — With Haoyuan Ding, Lihao Wang and Yanmin Shi.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Linguistic Bridges: The Impact of New Official Languages on International Trade"</span>
                <span className="text-muted-foreground"> — With Xiaohua Bao and Xin Zhao.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Global Integration and Domestic Institutions: WTO Accession and IPR Enforcement in China"</span>
                <span className="text-muted-foreground"> — With Haoyuan Ding, Shu Lin, and Yanmin Shi.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"IP Litigation Spillovers"</span>
                <span className="text-muted-foreground"> — With Richard Kneller and Min Zhu.</span>
              </li>
              <li className="text-foreground">
                <span className="font-medium">"Why FTAs Diverge: Political Affinity and External Trade Protection"</span>
                <span className="text-muted-foreground"> — With Xiaohua Bao and Xiaozhou Wang.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-foreground">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                I welcome inquiries about research collaborations, speaking engagements, and academic discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Mail className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-serif font-bold text-foreground">Email</h3>
                <a href="mailto:josephm@mail.shufe.edu.cn" className="text-muted-foreground hover:text-accent transition-colors">
                  josephm@mail.shufe.edu.cn
                </a>
              </div>

              <div className="space-y-3">
                <MapPin className="w-8 h-8 text-accent mx-auto" />
                <h3 className="font-serif font-bold text-foreground">Office</h3>
                <p className="text-muted-foreground">
                  #428 College of Business<br />
                  Shanghai University of Finance and Economics<br />
                  Shanghai, China
                </p>
              </div>
            </div>

            <a href="mailto:josephm@mail.shufe.edu.cn">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
                Send Message
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
