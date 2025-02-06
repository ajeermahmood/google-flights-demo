import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const questions = [
    { q: "How can I find last-minute flight deals?", a: "Check our deals section for discounts." },
    { q: "How can I find cheap flights to anywhere?", a: "Use flexible dates for the best prices." },
  ];

  return (
    <>
      {questions.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}