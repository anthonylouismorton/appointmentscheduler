import React, { useState } from 'react';
import FitTestSelection from './FitTestSelection'
import ContactInformation from './ContactInformation'
import Scheduler from './Scheduler'

function LandingPage() {
  const [openScheduler, setOpenScheduler] = useState(false);

  return (
    <>
      {!openScheduler ?
      <>
      <FitTestSelection setOpenScheduler={setOpenScheduler}/>
      <ContactInformation />
      </>
      :
      <Scheduler />
      }
    </>
  );
}

export default LandingPage;