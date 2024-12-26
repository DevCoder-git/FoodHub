import React from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.department}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                </div>
              </div>
              
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;