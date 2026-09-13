import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  BarChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Users, TrendingUp, Briefcase, Award, CheckCircle2 } from 'lucide-react';

interface EraData {
  era: string;
  periodName: string;
  decade: string;
  company: string;
  role: string;
  teamsLed: number;
  practiceScale: number;
  projectsEra: number;
  cumulativeProjects: number;
  highlight: string;
}

const GROWTH_DATA: EraData[] = [
  {
    era: '1995–00',
    periodName: 'Industrial Systems & Supply Chain',
    decade: 'Decade 1',
    company: 'Siemens & Asian Paints',
    role: 'Systems Engineer → Area Manager',
    teamsLed: 40,
    practiceScale: 75,
    projectsEra: 6,
    cumulativeProjects: 6,
    highlight: 'Rigorous engineering diagnostic foundation & regional dealer supply chain logistics.',
  },
  {
    era: '2001–05',
    periodName: 'ERP Advisory & Global Practice',
    decade: 'Decade 1',
    company: 'Capgemini & HCL Technologies',
    role: 'Manager (ERP Advisory & JDE)',
    teamsLed: 150,
    practiceScale: 150,
    projectsEra: 14,
    cumulativeProjects: 20,
    highlight: 'Scaled North America specialized enterprise practice to ~150 consultants.',
  },
  {
    era: '2005–10',
    periodName: 'Global Delivery & Large Programs',
    decade: 'Decade 2',
    company: 'Infosys',
    role: 'Group Project Manager (SAP)',
    teamsLed: 320,
    practiceScale: 450,
    projectsEra: 18,
    cumulativeProjects: 38,
    highlight: 'Formulated Infosys flagship large-program rollout frameworks across multi-country sites.',
  },
  {
    era: '2011–15',
    periodName: 'Portfolio P&L & Global Delivery',
    decade: 'Decade 2',
    company: 'Infosys',
    role: 'Senior Delivery & Portfolio Leader',
    teamsLed: 480,
    practiceScale: 750,
    projectsEra: 22,
    cumulativeProjects: 60,
    highlight: 'Multi-million dollar portfolio P&L stewardship, sustaining >97% SLA & KPI compliance.',
  },
  {
    era: '2015–20',
    periodName: 'Practice Scale & Hypergrowth',
    decade: 'Decade 3',
    company: 'Mindtree',
    role: 'Associate Vice President (Enterprise SAP)',
    teamsLed: 650,
    practiceScale: 1300,
    projectsEra: 26,
    cumulativeProjects: 86,
    highlight: 'Scaled global practice from ~300 to 1,300+ consultants with top-quartile margin & 89% ESAT.',
  },
  {
    era: '2020–25+',
    periodName: 'Clean-Core Platforms & Enterprise VP',
    decade: 'Decade 3+',
    company: 'Maersk & ITC Infotech',
    role: 'GM (Maersk O2C) & Vice President',
    teamsLed: 650,
    practiceScale: 1400,
    projectsEra: 28,
    cumulativeProjects: 114,
    highlight: 'Greenfield S/4HANA Order-to-Cash transformation, DevSecOps automation, and GenAI adoption.',
  },
];

type ChartViewMode = 'combined' | 'teams' | 'projects';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color?: string;
    dataKey?: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const matchingData = GROWTH_DATA.find((item) => item.era === label);
  if (!matchingData) return null;

  return (
    <div className="bg-[#081F33]/95 backdrop-blur-md border border-[#1677D2]/80 p-4 rounded shadow-2xl max-w-xs text-xs text-white z-50">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-700/70">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#42B8FF] block">
            {matchingData.decade}
          </span>
          <span className="font-serif font-bold text-sm text-white">{matchingData.era}</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1677D2]/20 border border-[#1677D2]/40 text-[#42B8FF]">
          {matchingData.company}
        </span>
      </div>

      <div className="text-[11px] font-medium text-slate-200 mb-2">
        <span className="text-slate-400 font-normal">Role: </span>
        {matchingData.role}
      </div>

      <div className="space-y-1.5 py-2 my-1 border-y border-slate-700/50">
        <div className="flex justify-between items-center">
          <span className="text-slate-300 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#42B8FF]" />
            <span>Practice Reach:</span>
          </span>
          <span className="font-mono font-bold text-[#42B8FF]">
            {matchingData.practiceScale.toLocaleString()}+ consultants
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-300 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1677D2]" />
            <span>Direct Teams Built:</span>
          </span>
          <span className="font-mono font-bold text-white">
            {matchingData.teamsLed}+ professionals
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-300 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>Cumulative Programs:</span>
          </span>
          <span className="font-mono font-bold text-[#38BDF8]">
            {matchingData.cumulativeProjects}+ major projects
          </span>
        </div>
      </div>

      <div className="pt-2 text-[11px] text-slate-300 font-light leading-relaxed italic">
        "{matchingData.highlight}"
      </div>
    </div>
  );
};

export const CareerGrowthChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<ChartViewMode>('combined');

  return (
    <div className="mt-14 bg-[#081F33] border border-slate-800 rounded-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
      {/* Background ambient accents */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#1677D2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#42B8FF]/08 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Interactive Mode Selectors */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-700/60 relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10.5px] font-bold tracking-[0.22em] text-[#42B8FF] uppercase mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-[#42B8FF]" />
            <span>QUANTITATIVE EXECUTIVE EVOLUTION</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            3-Decade Organizational & Project Scale
          </h3>
          <p className="text-[14px] text-slate-300 font-light mt-1 max-w-2xl leading-relaxed">
            Historical growth in global talent practices, high-retention consulting teams, and cumulative enterprise transformation programs delivered.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center bg-[#051525] p-1 rounded border border-slate-700/80 shrink-0 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('combined')}
            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              viewMode === 'combined'
                ? 'bg-[#1677D2] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Combined View
          </button>
          <button
            type="button"
            onClick={() => setViewMode('teams')}
            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              viewMode === 'teams'
                ? 'bg-[#1677D2] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Practice & Teams
          </button>
          <button
            type="button"
            onClick={() => setViewMode('projects')}
            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              viewMode === 'projects'
                ? 'bg-[#1677D2] text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Transformations
          </button>
        </div>
      </div>

      {/* KPI Highlights Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-slate-700/60 relative z-10">
        <div className="bg-[#051525]/70 border border-slate-800 p-4 rounded">
          <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
            Peak Practice Scale
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#42B8FF] mt-1">
            1,300+
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Mindtree SAP Practice</div>
        </div>

        <div className="bg-[#051525]/70 border border-slate-800 p-4 rounded">
          <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
            Consultants Built & Led
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            650+
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Direct Coaching & Teams</div>
        </div>

        <div className="bg-[#051525]/70 border border-slate-800 p-4 rounded">
          <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
            Cumulative Programs
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#38BDF8] mt-1">
            110+
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">Enterprise Engagements</div>
        </div>

        <div className="bg-[#051525]/70 border border-slate-800 p-4 rounded">
          <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
            Sustained Trajectory
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            30 Years
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">1995 to Present Day</div>
        </div>
      </div>

      {/* Main Animated Recharts Surface */}
      <div className="pt-6 relative z-10">
        <div className="w-full h-[320px] sm:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            {viewMode === 'combined' ? (
              <ComposedChart
                data={GROWTH_DATA}
                margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
              >
                <defs>
                  <linearGradient id="practiceAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#42B8FF" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#1677D2" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="projectsBarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#1677D2" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis
                  dataKey="era"
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'monospace' }}
                  tickLine={{ stroke: '#334155' }}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#94A3B8"
                  domain={[0, 1500]}
                  tick={{ fill: '#94A3B8', fontSize: 11 }}
                  tickLine={{ stroke: '#334155' }}
                  label={{
                    value: 'Practice Scale / Consultants',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#94A3B8',
                    fontSize: 11,
                    style: { textAnchor: 'middle' },
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#38BDF8"
                  domain={[0, 130]}
                  tick={{ fill: '#38BDF8', fontSize: 11 }}
                  tickLine={{ stroke: '#38BDF8' }}
                  label={{
                    value: 'Cumulative Projects',
                    angle: 90,
                    position: 'insideRight',
                    fill: '#38BDF8',
                    fontSize: 11,
                    style: { textAnchor: 'middle' },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  height={36}
                  formatter={(value) => (
                    <span className="text-xs text-slate-300 font-medium tracking-wide">
                      {value}
                    </span>
                  )}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="practiceScale"
                  name="Practice Reach (Consultants)"
                  stroke="#42B8FF"
                  strokeWidth={2.5}
                  fill="url(#practiceAreaGradient)"
                  isAnimationActive={true}
                  animationDuration={1200}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="teamsLed"
                  name="Direct Teams Built (Leadership)"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#FFFFFF', stroke: '#1677D2', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#42B8FF' }}
                  isAnimationActive={true}
                  animationDuration={1400}
                />
                <Bar
                  yAxisId="right"
                  dataKey="cumulativeProjects"
                  name="Cumulative Transformations"
                  fill="url(#projectsBarGradient)"
                  radius={[4, 4, 0, 0]}
                  barSize={24}
                  isAnimationActive={true}
                  animationDuration={1000}
                />
              </ComposedChart>
            ) : viewMode === 'teams' ? (
              <AreaChart
                data={GROWTH_DATA}
                margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
              >
                <defs>
                  <linearGradient id="teamsOnlyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#42B8FF" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#071A2D" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="directTeamsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1677D2" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#071A2D" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis
                  dataKey="era"
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'monospace' }}
                />
                <YAxis
                  stroke="#94A3B8"
                  domain={[0, 1500]}
                  tick={{ fill: '#94A3B8', fontSize: 11 }}
                  label={{
                    value: 'Number of Consultants Led',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#94A3B8',
                    fontSize: 11,
                    style: { textAnchor: 'middle' },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  height={36}
                  formatter={(value) => (
                    <span className="text-xs text-slate-300 font-medium tracking-wide">
                      {value}
                    </span>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="practiceScale"
                  name="Global SAP Practice Scale (Consultants)"
                  stroke="#42B8FF"
                  strokeWidth={3}
                  fill="url(#teamsOnlyGradient)"
                  isAnimationActive={true}
                  animationDuration={1200}
                />
                <Area
                  type="monotone"
                  dataKey="teamsLed"
                  name="Direct Teams Built & Coached"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  fill="url(#directTeamsGradient)"
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </AreaChart>
            ) : (
              <BarChart
                data={GROWTH_DATA}
                margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
              >
                <defs>
                  <linearGradient id="barProjectsEraGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity={1} />
                    <stop offset="100%" stopColor="#1677D2" stopOpacity={0.8} />
                  </linearGradient>
                  <linearGradient id="barProjectsCumGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis
                  dataKey="era"
                  stroke="#94A3B8"
                  tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'monospace' }}
                />
                <YAxis
                  stroke="#94A3B8"
                  domain={[0, 120]}
                  tick={{ fill: '#94A3B8', fontSize: 11 }}
                  label={{
                    value: 'Transformation Engagements',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#94A3B8',
                    fontSize: 11,
                    style: { textAnchor: 'middle' },
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="top"
                  height={36}
                  formatter={(value) => (
                    <span className="text-xs text-slate-300 font-medium tracking-wide">
                      {value}
                    </span>
                  )}
                />
                <Bar
                  dataKey="projectsEra"
                  name="Transformations Completed in Era"
                  fill="url(#barProjectsEraGradient)"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                  isAnimationActive={true}
                  animationDuration={1000}
                />
                <Bar
                  dataKey="cumulativeProjects"
                  name="Cumulative Engagements"
                  fill="url(#barProjectsCumGradient)"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                  isAnimationActive={true}
                  animationDuration={1300}
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer Insight Context */}
      <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#42B8FF]" />
          <span>Continuous executive expansion across 3 decades (1995–2025+)</span>
        </div>
        <div className="text-slate-400">
          Source: Verified Executive Milestones & Practice Records
        </div>
      </div>
    </div>
  );
};
