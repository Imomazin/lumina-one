import { useState } from 'react'
import { CityStoryModal, CityStory } from './CityStoryModal'

interface CitySkyline {
  name: string
  imageUrl: string
  alt: string
  story: CityStory
}

const citySkylines: CitySkyline[] = [
  {
    name: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=400&fit=crop&q=80',
    alt: 'New York City skyline at dusk',
    story: {
      city: 'New York',
      country: 'United States',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=400&fit=crop&q=80',
      company: 'GlobalBank Financial',
      industry: 'Financial Services',
      year: '2024',
      overview: 'GlobalBank embarked on a transformative digital banking initiative to capture the millennial market in North America, integrating comprehensive strategy, risk management, and financial forecasting into a unified Lumina ONE platform.',
      strategy: {
        objective: 'Launch digital-first banking platform targeting 2M new customers within 18 months',
        approach: 'Phased rollout across 12 major metropolitan areas with AI-powered personalization and mobile-first experience',
        metrics: [
          { label: 'Target Markets', value: '12 cities' },
          { label: 'Customer Goal', value: '2M users' },
          { label: 'Timeline', value: '18 months' }
        ]
      },
      risk: {
        challenge: 'Regulatory compliance across multiple states, cybersecurity threats, and competitive pressure from fintech startups',
        mitigation: 'Automated compliance monitoring, multi-layer security architecture, and continuous competitive analysis through Lumina R',
        metrics: [
          { label: 'Risk Factors Tracked', value: '47' },
          { label: 'Compliance Issues Prevented', value: '12' },
          { label: 'Security Incidents', value: '0' }
        ]
      },
      finance: {
        investment: '$45M initial investment with $12M contingency reserve',
        roi: '287% ROI achieved in 24 months, exceeding projections by 87%',
        metrics: [
          { label: 'NPV', value: '$142M' },
          { label: 'IRR', value: '34%' },
          { label: 'Payback Period', value: '14 months' }
        ]
      },
      outcomes: [
        'Acquired 2.4M customers, exceeding target by 20%',
        'Reduced customer acquisition cost by 42%',
        'Achieved 4.8/5 customer satisfaction rating',
        'Zero major security breaches or compliance violations',
        'Platform scaled to 15 cities ahead of schedule',
        'Revenue growth of 156% year-over-year'
      ],
      quote: {
        text: 'Lumina ONE gave us the confidence to move fast while staying compliant. The integrated risk and finance views meant we could make strategic decisions in hours, not weeks.',
        author: 'Jennifer Park',
        role: 'Chief Strategy Officer, GlobalBank Financial'
      }
    }
  },
  {
    name: 'Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop&q=80',
    alt: 'Tokyo skyline with Mount Fuji',
    story: {
      city: 'Tokyo',
      country: 'Japan',
      imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop&q=80',
      company: 'TechNova Electronics',
      industry: 'Consumer Electronics',
      year: '2023',
      overview: 'TechNova executed a bold expansion into smart home IoT devices, leveraging Lumina ONE to balance ambitious growth targets with supply chain risks and capital allocation across three product lines.',
      strategy: {
        objective: 'Launch 3 new smart home product categories capturing 15% market share in Asia-Pacific',
        approach: 'Simultaneous multi-market entry with localized features, strategic retail partnerships, and aggressive pricing',
        metrics: [
          { label: 'Product Lines', value: '3' },
          { label: 'Markets', value: '8 countries' },
          { label: 'Target Share', value: '15%' }
        ]
      },
      risk: {
        challenge: 'Component shortages, currency fluctuations, and fierce competition from established players',
        mitigation: 'Diversified supplier network, currency hedging strategy, and differentiated AI features tracked in real-time',
        metrics: [
          { label: 'Supplier Risks', value: '23' },
          { label: 'Mitigation Actions', value: '31' },
          { label: 'Supply Continuity', value: '99.2%' }
        ]
      },
      finance: {
        investment: '$78M across R&D, manufacturing, and marketing with dynamic allocation based on market response',
        roi: '212% ROI with faster-than-expected profitability in month 9',
        metrics: [
          { label: 'Revenue Y1', value: '$186M' },
          { label: 'Gross Margin', value: '38%' },
          { label: 'Market Share', value: '17.3%' }
        ]
      },
      outcomes: [
        'Exceeded market share target, achieving 17.3%',
        'All three product lines profitable within first year',
        'Successfully navigated global chip shortage',
        'Maintained 99.2% supply continuity despite disruptions',
        'Launched in 2 additional markets ahead of schedule',
        'Won "Innovation of the Year" award in Japan'
      ],
      quote: {
        text: 'The ability to see how supply chain risks immediately impacted our financial forecasts was revolutionary. We adjusted our strategy three times mid-launch and still exceeded targets.',
        author: 'Hiroshi Tanaka',
        role: 'VP Product Strategy, TechNova Electronics'
      }
    }
  },
  {
    name: 'Dubai',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop&q=80',
    alt: 'Dubai skyline with Burj Khalifa',
    story: {
      city: 'Dubai',
      country: 'United Arab Emirates',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop&q=80',
      company: 'Desert Solar Ventures',
      industry: 'Renewable Energy',
      year: '2024',
      overview: 'Desert Solar pioneered the largest solar farm project in the Middle East, requiring intricate coordination of strategy, environmental risks, and complex project financing across a 5-year development cycle.',
      strategy: {
        objective: 'Develop 2GW solar capacity serving 300,000 homes while establishing regional clean energy leadership',
        approach: 'Phased construction with government partnership, innovative financing, and technology partnerships',
        metrics: [
          { label: 'Capacity', value: '2GW' },
          { label: 'Homes Served', value: '300,000' },
          { label: 'Project Duration', value: '5 years' }
        ]
      },
      risk: {
        challenge: 'Extreme weather conditions, regulatory changes, technology obsolescence, and geopolitical factors',
        mitigation: 'Advanced weather modeling, regulatory tracking system, modular design for upgrades, and diversified partnerships',
        metrics: [
          { label: 'Risk Categories', value: '8' },
          { label: 'Contingency Plans', value: '15' },
          { label: 'On-time Milestones', value: '94%' }
        ]
      },
      finance: {
        investment: '$1.2B project financing through blend of government backing, green bonds, and private equity',
        roi: '18% IRR over 25-year lifecycle with 8-year payback period',
        metrics: [
          { label: 'Total Financing', value: '$1.2B' },
          { label: 'Annual Revenue', value: '$180M' },
          { label: 'Carbon Offset', value: '1.5M tons/year' }
        ]
      },
      outcomes: [
        'Completed Phase 1 ahead of schedule and under budget',
        'Secured additional $400M for expansion',
        'Created 2,100 jobs during construction',
        'Achieved 99.7% operational uptime',
        'Offset 1.5M tons of CO2 annually',
        'Became blueprint for 3 additional regional projects'
      ],
      quote: {
        text: 'Managing a billion-dollar renewable project requires seeing the future clearly. Lumina ONE connected our 5-year strategy to daily risks and real-time financial impacts.',
        author: 'Dr. Fatima Al-Rashid',
        role: 'CEO, Desert Solar Ventures'
      }
    }
  },
  {
    name: 'Singapore',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop&q=80',
    alt: 'Singapore Marina Bay skyline',
    story: {
      city: 'Singapore',
      country: 'Singapore',
      imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop&q=80',
      company: 'MedTech Innovations',
      industry: 'Healthcare Technology',
      year: '2023',
      overview: 'MedTech Innovations launched AI-powered diagnostic platform across Southeast Asia, navigating complex healthcare regulations while managing R&D investments and market entry risks.',
      strategy: {
        objective: 'Deploy AI diagnostic tools in 150 hospitals across 6 countries within 2 years',
        approach: 'Hub model from Singapore with localized regulatory compliance and physician training programs',
        metrics: [
          { label: 'Target Hospitals', value: '150' },
          { label: 'Countries', value: '6' },
          { label: 'Deployment', value: '24 months' }
        ]
      },
      risk: {
        challenge: 'Medical device regulations varying by country, data privacy laws, and physician adoption resistance',
        mitigation: 'Country-specific regulatory teams, federated learning architecture, and comprehensive training programs',
        metrics: [
          { label: 'Regulatory Hurdles', value: '34' },
          { label: 'Approvals Secured', value: '34' },
          { label: 'Adoption Rate', value: '87%' }
        ]
      },
      finance: {
        investment: '$32M for R&D, regulatory, and market development with milestone-based funding',
        roi: '245% ROI with subscription model generating recurring revenue',
        metrics: [
          { label: 'ARR', value: '$48M' },
          { label: 'LTV/CAC', value: '4.2x' },
          { label: 'Gross Margin', value: '76%' }
        ]
      },
      outcomes: [
        'Deployed in 162 hospitals, exceeding target by 8%',
        'Achieved regulatory approval in all 6 countries',
        '87% physician adoption rate',
        'Processed 2.1M diagnostic scans',
        'Reduced diagnosis time by 63%',
        'Expanded to 3 additional countries'
      ],
      quote: {
        text: 'Healthcare moves slow, but our decisions needed to be fast. Lumina ONE showed us exactly where regulatory risks would delay launches, allowing us to adjust our financial runway proactively.',
        author: 'Dr. Wei Zhang',
        role: 'Chief Medical Officer, MedTech Innovations'
      }
    }
  },
  {
    name: 'Hong Kong',
    imageUrl: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=400&fit=crop&q=80',
    alt: 'Hong Kong Victoria Harbour skyline',
    story: {
      city: 'Hong Kong',
      country: 'Hong Kong SAR',
      imageUrl: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=400&fit=crop&q=80',
      company: 'PacificLogistics Group',
      industry: 'Supply Chain & Logistics',
      year: '2024',
      overview: 'PacificLogistics transformed regional supply chain operations through AI-powered route optimization and automated warehousing, requiring precise risk-finance trade-offs.',
      strategy: {
        objective: 'Reduce delivery times by 40% while expanding to 20 new cities across Asia-Pacific',
        approach: 'Hub-and-spoke model with automated facilities and predictive routing algorithms',
        metrics: [
          { label: 'New Cities', value: '20' },
          { label: 'Time Reduction', value: '40%' },
          { label: 'Automation', value: '85%' }
        ]
      },
      risk: {
        challenge: 'Port congestion, customs delays, infrastructure dependencies, and tech integration complexity',
        mitigation: 'Multi-port strategy, customs pre-clearance systems, redundant routing, and gradual tech rollout',
        metrics: [
          { label: 'Delay Events', value: '1,240' },
          { label: 'Mitigated', value: '1,187' },
          { label: 'On-time Rate', value: '96%' }
        ]
      },
      finance: {
        investment: '$92M for warehouse automation, fleet expansion, and technology infrastructure',
        roi: '198% ROI with 35% reduction in operating costs',
        metrics: [
          { label: 'Cost Reduction', value: '35%' },
          { label: 'Volume Increase', value: '127%' },
          { label: 'EBITDA Margin', value: '28%' }
        ]
      },
      outcomes: [
        'Achieved 42% reduction in delivery times',
        'Expanded to 23 cities ahead of schedule',
        '96% on-time delivery rate maintained',
        'Automated 85% of warehouse operations',
        'Reduced carbon footprint by 31%',
        'Customer satisfaction increased to 4.7/5'
      ],
      quote: {
        text: 'Logistics is all about managing the unexpected. Having our strategic expansion plans automatically adjust for port delays and cost overruns kept us profitable through massive growth.',
        author: 'Michael Wong',
        role: 'COO, PacificLogistics Group'
      }
    }
  },
  {
    name: 'London',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&q=80',
    alt: 'London skyline with Thames River',
    story: {
      city: 'London',
      country: 'United Kingdom',
      imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&q=80',
      company: 'UrbanMobility Solutions',
      industry: 'Transportation Technology',
      year: '2023',
      overview: 'UrbanMobility revolutionized city transportation with electric micro-mobility fleet, balancing rapid expansion with safety risks and infrastructure investments.',
      strategy: {
        objective: 'Deploy 50,000 e-scooters and e-bikes across 15 European cities',
        approach: 'City partnership model with integrated transport apps and sustainable operations',
        metrics: [
          { label: 'Fleet Size', value: '50,000' },
          { label: 'Cities', value: '15' },
          { label: 'Target Users', value: '5M' }
        ]
      },
      risk: {
        challenge: 'Safety regulations, vandalism, battery fires, and public perception challenges',
        mitigation: 'Safety certification, GPS tracking, fire-safe batteries, and community engagement programs',
        metrics: [
          { label: 'Safety Incidents', value: '0.02%' },
          { label: 'Vandalism Rate', value: '3.1%' },
          { label: 'Uptime', value: '94%' }
        ]
      },
      finance: {
        investment: '$67M for fleet, charging infrastructure, and operational systems',
        roi: '156% ROI with subscription and pay-per-ride revenue streams',
        metrics: [
          { label: 'Revenue Y1', value: '$104M' },
          { label: 'Rides Delivered', value: '42M' },
          { label: 'Unit Economics', value: 'Positive M6' }
        ]
      },
      outcomes: [
        'Registered 5.8M users, exceeding target by 16%',
        'Delivered 42M rides in first year',
        'Achieved positive unit economics in month 6',
        'Safety incident rate below 0.02%',
        'Reduced urban car trips by estimated 12%',
        'Expanded to 18 cities'
      ],
      quote: {
        text: 'Every city had different regulations and risk profiles. Lumina ONE let us model city-specific strategies while maintaining overall financial discipline across the entire expansion.',
        author: 'Sophie Bergström',
        role: 'Head of European Operations, UrbanMobility Solutions'
      }
    }
  },
  {
    name: 'Shanghai',
    imageUrl: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&h=400&fit=crop&q=80',
    alt: 'Shanghai Pudong skyline',
    story: {
      city: 'Shanghai',
      country: 'China',
      imageUrl: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&h=400&fit=crop&q=80',
      company: 'CloudStream Technologies',
      industry: 'Enterprise Software',
      year: '2024',
      overview: 'CloudStream built China\'s fastest-growing enterprise cloud platform, navigating data sovereignty requirements while scaling infrastructure and managing burn rate.',
      strategy: {
        objective: 'Capture 20% of Chinese enterprise cloud market with 10,000 business customers',
        approach: 'Localized data centers, enterprise sales team, and industry-specific solutions',
        metrics: [
          { label: 'Market Share', value: '20%' },
          { label: 'Target Customers', value: '10,000' },
          { label: 'Data Centers', value: '8 regions' }
        ]
      },
      risk: {
        challenge: 'Data sovereignty laws, infrastructure scaling, competitive pressure, and enterprise sales cycles',
        mitigation: 'China-only data architecture, over-provisioned capacity, competitive monitoring, and long-term contracts',
        metrics: [
          { label: 'Compliance Score', value: '100%' },
          { label: 'Uptime SLA', value: '99.95%' },
          { label: 'Churn Rate', value: '1.8%' }
        ]
      },
      finance: {
        investment: '$125M for infrastructure, sales, and R&D with Series B funding',
        roi: '340% revenue growth with path to profitability in 18 months',
        metrics: [
          { label: 'ARR', value: '$218M' },
          { label: 'Growth Rate', value: '340%' },
          { label: 'CAC Payback', value: '11 months' }
        ]
      },
      outcomes: [
        'Acquired 12,400 enterprise customers',
        'Achieved 22% market share',
        '340% year-over-year revenue growth',
        '100% compliance with data regulations',
        'Maintained 99.95% uptime',
        'Secured $180M Series C at $1.2B valuation'
      ],
      quote: {
        text: 'Scaling infrastructure in China requires perfect timing. Too early burns cash, too late loses customers. Lumina ONE\'s integrated view helped us scale exactly when financials and demand aligned.',
        author: 'Dr. Li Chen',
        role: 'Founder & CEO, CloudStream Technologies'
      }
    }
  },
  {
    name: 'Paris',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop&q=80',
    alt: 'Paris skyline with Eiffel Tower',
    story: {
      city: 'Paris',
      country: 'France',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop&q=80',
      company: 'LuxeRetail Group',
      industry: 'Luxury Retail',
      year: '2023',
      overview: 'LuxeRetail transformed from traditional boutiques to omnichannel luxury experience, balancing brand heritage with digital innovation and managing inventory risk.',
      strategy: {
        objective: 'Launch digital flagship experience while opening 25 new physical boutiques across Europe',
        approach: 'Phygital strategy combining AR try-on, personalized online shopping, and elevated in-store experience',
        metrics: [
          { label: 'New Boutiques', value: '25' },
          { label: 'Digital Platform', value: 'EU-wide' },
          { label: 'Revenue Mix', value: '40% digital' }
        ]
      },
      risk: {
        challenge: 'Brand dilution, inventory obsolescence, counterfeit products, and customer experience consistency',
        mitigation: 'Strict brand guidelines, AI demand forecasting, blockchain authentication, and unified training',
        metrics: [
          { label: 'Brand Score', value: '9.2/10' },
          { label: 'Inventory Turn', value: '4.2x' },
          { label: 'Counterfeits', value: '0' }
        ]
      },
      finance: {
        investment: '$54M for digital platform, boutique expansion, and inventory',
        roi: '215% ROI with digital channel contributing 43% of revenue',
        metrics: [
          { label: 'Revenue', value: '€186M' },
          { label: 'Digital %', value: '43%' },
          { label: 'Margin', value: '62%' }
        ]
      },
      outcomes: [
        'Opened 28 boutiques across 12 countries',
        'Digital sales exceeded target at 43% mix',
        'Customer lifetime value increased 78%',
        'Zero counterfeit incidents',
        'Brand perception score of 9.2/10',
        'Featured in Vogue Innovation Award'
      ],
      quote: {
        text: 'Luxury is about perfection. Lumina ONE helped us see how every strategic decision—from boutique locations to digital features—impacted both brand value and financial returns.',
        author: 'Marie Dubois',
        role: 'Chief Digital Officer, LuxeRetail Group'
      }
    }
  },
  {
    name: 'Chicago',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&q=80',
    alt: 'Chicago downtown skyline',
    story: {
      city: 'Chicago',
      country: 'United States',
      imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&q=80',
      company: 'AgriTech Innovations',
      industry: 'Agricultural Technology',
      year: '2024',
      overview: 'AgriTech deployed precision farming platform across American Midwest, balancing farmer adoption with technology risks and seasonal revenue cycles.',
      strategy: {
        objective: 'Deploy AI-powered crop optimization to 5,000 farms across 8 states',
        approach: 'Subscription model with hardware + software, agronomist partnerships, and pilot programs',
        metrics: [
          { label: 'Target Farms', value: '5,000' },
          { label: 'States', value: '8' },
          { label: 'Acreage', value: '2M acres' }
        ]
      },
      risk: {
        challenge: 'Weather dependency, farmer tech adoption, equipment reliability, and commodity price volatility',
        mitigation: 'Weather insurance partnerships, hands-on training, redundant sensors, and flexible pricing',
        metrics: [
          { label: 'Adoption Rate', value: '78%' },
          { label: 'Uptime', value: '97%' },
          { label: 'Renewal Rate', value: '89%' }
        ]
      },
      finance: {
        investment: '$38M for R&D, hardware manufacturing, and farmer support',
        roi: '189% ROI with 89% customer renewal demonstrating strong unit economics',
        metrics: [
          { label: 'ARR', value: '$64M' },
          { label: 'LTV/CAC', value: '5.1x' },
          { label: 'Yield Increase', value: '23% avg' }
        ]
      },
      outcomes: [
        'Deployed across 5,400 farms and 2.1M acres',
        'Farmers achieved average 23% yield increase',
        '78% adoption rate among target farmers',
        '89% annual renewal rate',
        'Reduced water usage by 18%',
        'Expanded to 3 additional states'
      ],
      quote: {
        text: 'Farming has thin margins and high stakes. Lumina ONE showed us how weather risks and equipment failures would impact our financial model, letting us price subscriptions correctly from day one.',
        author: 'James Morrison',
        role: 'VP Strategy, AgriTech Innovations'
      }
    }
  },
  {
    name: 'Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=400&fit=crop&q=80',
    alt: 'Sydney Opera House and skyline',
    story: {
      city: 'Sydney',
      country: 'Australia',
      imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=400&fit=crop&q=80',
      company: 'OceanTech Marine',
      industry: 'Marine Technology',
      year: '2023',
      overview: 'OceanTech pioneered autonomous underwater monitoring systems for marine conservation and commercial fishing, navigating R&D risks and environmental impact financing.',
      strategy: {
        objective: 'Deploy 500 autonomous marine monitors across Pacific protecting 100,000 sq km of ocean',
        approach: 'Partnership model with governments, NGOs, and fishing industry for sustainable ocean management',
        metrics: [
          { label: 'Monitors', value: '500 units' },
          { label: 'Coverage', value: '100K sq km' },
          { label: 'Partners', value: '15 orgs' }
        ]
      },
      risk: {
        challenge: 'Harsh marine environment, equipment loss, regulatory complexity, and wildlife interference',
        mitigation: 'Ruggedized design, GPS tracking, multi-country compliance team, and bio-safe materials',
        metrics: [
          { label: 'Equipment Loss', value: '2.1%' },
          { label: 'Data Accuracy', value: '98.7%' },
          { label: 'Uptime', value: '91%' }
        ]
      },
      finance: {
        investment: '$28M combining impact investment, grants, and commercial contracts',
        roi: 'Triple bottom line: 165% financial ROI plus significant environmental and social impact',
        metrics: [
          { label: 'Revenue', value: '$46M' },
          { label: 'Protected Species', value: '47' },
          { label: 'Illegal Activity Prevented', value: '234 incidents' }
        ]
      },
      outcomes: [
        'Deployed 520 monitors exceeding target',
        'Protected 47 endangered species',
        'Prevented 234 illegal fishing incidents',
        'Data accuracy of 98.7%',
        'Secured $35M expansion funding',
        'Won UN Ocean Innovation Award'
      ],
      quote: {
        text: 'Impact investing requires proving both environmental and financial returns. Lumina ONE let us show investors exactly how ocean protection translated to sustainable revenue.',
        author: 'Dr. Emma Richardson',
        role: 'Founder & Chief Scientist, OceanTech Marine'
      }
    }
  }
]

function CityImage({ city, index, theme, onClick }: { city: CitySkyline; index: number; theme: 'dark' | 'white'; onClick: () => void }) {
  // Improved visibility for both themes with better contrast
  // Dark theme: increased opacity for better visibility on dark backgrounds
  // White theme: solid and visible
  const imageOpacity = theme === 'dark' ? 'opacity-70' : 'opacity-90'
  const hoverOpacity = theme === 'dark' ? 'group-hover:opacity-90' : 'group-hover:opacity-100'
  const borderColor = theme === 'dark' ? 'border-white/20' : 'border-gray-300'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const textSecondary = theme === 'dark' ? 'text-white/90' : 'text-gray-600'
  const gradientOverlay = theme === 'dark'
    ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
    : 'bg-gradient-to-t from-white/80 via-white/40 to-transparent'

  return (
    <div
      className="relative flex-shrink-0 h-[280px] w-[500px] group cursor-pointer pointer-events-auto"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
      onClick={onClick}
    >
      {/* City image with premium effects */}
      <div className={`relative h-full w-full rounded-lg overflow-hidden border ${borderColor} shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500`}>
        <img
          src={city.imageUrl}
          alt={city.alt}
          className={`w-full h-full object-cover ${imageOpacity} ${hoverOpacity} group-hover:scale-110 transition-all duration-500`}
          loading="lazy"
        />

        {/* Gradient overlay for depth */}
        <div className={`absolute inset-0 ${gradientOverlay}`} />

        {/* City label */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className={`${textColor} text-xl font-semibold tracking-tight drop-shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            {city.name}
          </div>
          <div className={`${textSecondary} text-sm mt-1 drop-shadow`}>
            Click to explore success story →
          </div>
        </div>

        {/* Enhanced glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />

        {/* Hover indicator */}
        <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} backdrop-blur-sm rounded-full p-2`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export function WorldCitiesSkyline({ theme = 'dark' }: { theme?: 'dark' | 'white' }) {
  const [selectedStory, setSelectedStory] = useState<CityStory | null>(null)

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <style>{`
          @keyframes scrollCitiesRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .cities-scroll {
            animation: scrollCitiesRight 180s linear infinite;
          }
          .cities-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Gradient overlay at bottom for seamless blend */}
        <div className={`absolute bottom-0 left-0 right-0 h-40 ${theme === 'dark' ? 'bg-gradient-to-t from-black via-black/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'} z-10 pointer-events-none`} />

        {/* Top fade for seamless integration */}
        <div className={`absolute top-0 left-0 right-0 h-40 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-black/50 to-transparent' : 'bg-gradient-to-b from-white via-white/50 to-transparent'} z-10 pointer-events-none`} />

        {/* Scrolling cities container */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end pb-8">
          <div className="cities-scroll flex items-end gap-8 will-change-transform">
            {/* Render cities twice for seamless infinite loop */}
            {[...citySkylines, ...citySkylines].map((city, index) => (
              <CityImage
                key={`${city.name}-${index}`}
                city={city}
                index={index}
                theme={theme}
                onClick={() => setSelectedStory(city.story)}
              />
            ))}
          </div>
        </div>

        {/* Premium atmospheric glow effects */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

        {/* Subtle light rays effect */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(99, 102, 241, 0.08), transparent)'
        }} />
      </div>

      {/* City Story Modal */}
      {selectedStory && (
        <CityStoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
          theme={theme}
        />
      )}
    </>
  )
}
