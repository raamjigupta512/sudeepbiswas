const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'pt',
  format: 'a4'
});

// Page dimensions: 595.28 x 841.89 pt
const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();

// Theme colors
const navy = [7, 26, 45]; // #071A2D
const brightBlue = [22, 119, 210]; // #1677D2
const cyan = [66, 184, 255]; // #42B8FF
const darkText = [19, 34, 56];
const mutedText = [100, 116, 139];
const lightBg = [245, 248, 252];
const border = [226, 232, 240];

// Top Header banner
doc.setFillColor(...navy);
doc.rect(0, 0, pageWidth, 110, 'F');

// Accent line
doc.setFillColor(...cyan);
doc.rect(0, 110, pageWidth, 4, 'F');

// Header Text
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(26);
doc.text('SUDEEP BISWAS', 40, 48);

doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
doc.setTextColor(...cyan);
doc.text('VICE PRESIDENT – ITC INFOTECH  |  TECHNOLOGY LEADER  |  SAP STRATEGIST', 40, 68);

doc.setFontSize(9);
doc.setTextColor(200, 215, 235);
doc.text('Bengaluru, Karnataka, India  |  sudeep28@gmail.com  |  +91 9972999742  |  linkedin.com/in/sudeep-biswas-17b1761', 40, 88);

// Body Layout
let y = 140;

// Section: Executive Summary
doc.setTextColor(...navy);
doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.text('EXECUTIVE PROFILE & VALUE PROPOSITION', 40, y);
doc.setDrawColor(...brightBlue);
doc.setLineWidth(1.5);
doc.line(40, y + 5, 120, y + 5);
y += 22;

doc.setTextColor(...darkText);
doc.setFont('helvetica', 'normal');
doc.setFontSize(9.5);
const summaryText = "Nearly three decades of distinguished leadership helping Fortune 500 and global enterprises simplify digital transformation. Renowned for architecting predictable, resilient, and customer-centric SAP and enterprise software ecosystems. Track record of scaling global delivery practices (up to 1,300+ consultants), optimizing P&L portfolios, and driving systemic business value across Maersk, Mindtree, Infosys, HCL Technologies, Capgemini Ernst & Young, Asian Paints, and Siemens.";
const splitSummary = doc.splitTextToSize(summaryText, pageWidth - 80);
doc.text(splitSummary, 40, y);
y += splitSummary.length * 13 + 12;

// Key Metrics Grid Banner
doc.setFillColor(...lightBg);
doc.roundedRect(40, y, pageWidth - 80, 52, 4, 4, 'F');
doc.setDrawColor(...border);
doc.setLineWidth(0.8);
doc.roundedRect(40, y, pageWidth - 80, 52, 4, 4, 'S');

const metrics = [
  { val: '3 Decades', label: 'Global Experience' },
  { val: '650+', label: 'SAP Consultants Led' },
  { val: '40%', label: 'TCO Reduction' },
  { val: '30%', label: 'Cycle Time Reduction' },
  { val: '>97%', label: 'SLA & KPI Rate' },
  { val: '<2%', label: 'Change Failure Rate' }
];

const colW = (pageWidth - 80) / metrics.length;
metrics.forEach((m, idx) => {
  const cx = 40 + idx * colW + colW / 2;
  doc.setTextColor(...brightBlue);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text(m.val, cx, y + 22, { align: 'center' });
  doc.setTextColor(...mutedText);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(m.label, cx, y + 37, { align: 'center' });
  
  if (idx < metrics.length - 1) {
    doc.setDrawColor(210, 220, 235);
    doc.line(40 + (idx + 1) * colW, y + 10, 40 + (idx + 1) * colW, y + 42);
  }
});

y += 72;

// Career Trajectory
doc.setTextColor(...navy);
doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.text('CAREER TRAJECTORY & APPOINTMENTS', 40, y);
doc.line(40, y + 5, 120, y + 5);
y += 20;

const career = [
  { role: 'Vice President', company: 'ITC Infotech', period: '2023 – Present', loc: 'Bengaluru, India', desc: 'Leading strategic enterprise transformation and digital capabilities across global accounts.' },
  { role: 'General Manager – Order-to-Cash Platform', company: 'A.P. Moller – Maersk', period: '2020 – 2023', loc: 'Bengaluru, India', desc: 'Co-Product Owner & Sr Engineering Manager for global strategic New Finance & Tax Platform (SAP S/4HANA greenfield transformation).' },
  { role: 'Associate Vice President', company: 'Mindtree', period: '2015 – 2020', loc: 'Bengaluru, India', desc: 'P&L, Pre-Sales, Delivery Leadership; instrumental in scaling SAP practice from few hundred consultants to 1,300+.' },
  { role: 'Group Project Manager', company: 'Infosys', period: '2005 – 2015', loc: 'Bengaluru & Global', desc: '10 years leading large SAP program rollouts, methodology development, account governance and client transformation.' },
  { role: 'Manager', company: 'HCL Technologies', period: '2004 – 2005', loc: 'Canada & India', desc: 'JD Edwards solution architecture and scaling enterprise consulting practice to ~150 consultants.' },
  { role: 'Manager', company: 'Capgemini Ernst & Young', period: '2001 – 2004', loc: 'India', desc: 'Business consulting, ERP systems implementation and enterprise process modernization.' },
  { role: 'Area Manager', company: 'Asian Paints', period: '1998 – 2001', loc: 'India', desc: 'Supply chain management, field operations, dealer networks and enterprise execution.' },
  { role: 'Executive Trainee', company: 'Siemens', period: '1995', loc: 'India', desc: 'Industrial engineering, electrical systems and systems operations foundations.' }
];

career.slice(0, 5).forEach((item) => {
  doc.setFillColor(...brightBlue);
  doc.circle(44, y - 3, 3, 'F');
  
  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(`${item.role} – ${item.company}`, 55, y);
  
  doc.setTextColor(...mutedText);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(`${item.period}  |  ${item.loc}`, pageWidth - 40, y, { align: 'right' });
  
  y += 13;
  doc.setTextColor(...darkText);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const descLines = doc.splitTextToSize(item.desc, pageWidth - 95);
  doc.text(descLines, 55, y);
  y += descLines.length * 11 + 6;
});

// Case Studies Spotlight
y += 6;
doc.setTextColor(...navy);
doc.setFont('helvetica', 'bold');
doc.setFontSize(13);
doc.text('STRATEGIC TRANSFORMATIONS & IMPACT', 40, y);
doc.line(40, y + 5, 120, y + 5);
y += 20;

const cases = [
  {
    title: 'Maersk: New Finance & Tax Platform (SAP S/4HANA)',
    detail: 'Strategic core transformation for the global shipping leader. Engineered Order-to-Cash process optimization, automated tax workflows, and systemic data harmonization across international supply chains.'
  },
  {
    title: 'Mindtree: Scaling Enterprise SAP Practice to 1,300+ Consultants',
    detail: 'Orchestrated talent scaling, capability incubation, global presales, and high-margin P&L delivery, earning consistent 89% employee satisfaction and industry leadership recognition.'
  }
];

cases.forEach((c) => {
  doc.setFillColor(...brightBlue);
  doc.circle(44, y - 3, 2.5, 'F');
  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(c.title, 55, y);
  y += 12;
  doc.setTextColor(...darkText);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const clines = doc.splitTextToSize(c.detail, pageWidth - 95);
  doc.text(clines, 55, y);
  y += clines.length * 11 + 6;
});

// Education & Governance
y += 6;
doc.setFillColor(...lightBg);
doc.roundedRect(40, y, pageWidth - 80, 50, 4, 4, 'F');
doc.setDrawColor(...border);
doc.roundedRect(40, y, pageWidth - 80, 50, 4, 4, 'S');

doc.setTextColor(...navy);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('ACADEMIC PEDIGREE', 55, y + 18);

doc.setFont('helvetica', 'normal');
doc.setTextColor(...darkText);
doc.setFontSize(8.5);
doc.text('• SPJIMR (SP Jain Institute of Management & Research): MBA, Marketing (1996 – 1998)', 55, y + 32);
doc.text('• VJTI (Veermata Jijabai Technological Institute): Bachelor of Engineering (B.E.), Electrical Engineering (1991 – 1995)', 55, y + 43);

// Footer
doc.setTextColor(...mutedText);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.text('Official Executive Profile — Sudeep Biswas  |  Generated for confidential evaluation', pageWidth / 2, pageHeight - 20, { align: 'center' });

const outputPath = path.join(__dirname, '..', 'public', 'Sudeep Biswas Executive Profile.pdf');
fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
console.log('PDF successfully created at:', outputPath);
