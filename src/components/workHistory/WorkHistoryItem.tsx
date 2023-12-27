import React from 'react';
import { useModalLauncher } from 'contexts';
import { Job } from 'constants/types';
import { formatJobDate } from 'components/helpers';
import ExpandedHistoryModal from './ExpandedHistoryModal';

export interface WorkHistoryItemProps {
  job: Job;
  activeJob: boolean;
};

export const WorkHistoryItem = ({ job, activeJob }: WorkHistoryItemProps) => {
  const { openModal } = useModalLauncher();
  const includeDay = false;
  const capitalize = true;
  const formattedStartDate = formatJobDate(job.startDate, 'short', includeDay, capitalize);
  const formattedEndDate = formatJobDate(job.endDate, 'short', includeDay, capitalize);

  return (
    <li className={activeJob ? 'current-item' : 'past-item'}>
      <div className={`date ${activeJob ? 'date-current' : 'date-past'}`}>{`${formattedStartDate} - ${formattedEndDate}`}</div>
      <button className="modal-button" onClick={() => openModal(<ExpandedHistoryModal job={job}/>)}>
        <div className="title text-left">{`${job.title} @ ${job.companyName}`}</div>
        <div className="descr text-left">{job.blurb}</div>
      </button>
      
      <br />
    </li>
  )

};

export default WorkHistoryItem;