import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import blackbox from "../src/Images/blackbox.png";
import Button from '@mui/material/Button';

export default function SimpleAccordion() {
  return (
    <section className="faqSection position-relative">
    <div className="container">
      <h1 className="fw-800 w-530">Fequently <br></br>
asked questions</h1>
<div className='row mt-5'>
    <div className='col-lg-8'>
    <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>The expense windows adapted sir. Wrong widen drawn.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Six curiosity day assurance bed necessary?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Produce say the ten moments parties?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Simple innate summer fat appear basket his desire joy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mb-3'>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Outward clothes promise at gravity do excited?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className='col-lg-4'>
        <div className='faqMail'>
            <img src={blackbox} alt=""/>
            <h5 className='fw-800 mt-4 text-center'>Do you have more questions?</h5>
            <p className='mt-4 text-center'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            <Button variant="contained" >Shoot a Direct Mail</Button>
        </div>
    </div>
</div>
   
</div>
</section>
  )
}
