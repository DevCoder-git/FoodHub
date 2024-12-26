import React from 'react';
import { Briefcase, DollarSign, MapPin, Clock } from 'lucide-react';
import JobList from './components/JobList';
import CareerHero from './components/CareerHero';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $160k'
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100k - $140k'
  },
  {
    id: 3,
    title: 'UX Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90k - $130k'
  }
];

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <CareerHero />
      <JobList jobs={jobOpenings} />
    </div>
  );
};

export default Careers;