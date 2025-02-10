import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const questions = [
    {
      q: "How can I find last-minute flight deals?",
      a: `Finding last-minute flights is easy on Google Flights.
Select your departure and destination cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available.
You can even check for flights departing today.
To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.`,
    },
    {
      q: "How can I find cheap flights for a weekend getaway?",
      a: `It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips.
Just enter your departure and destination cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select Search to see flight options and book the deal.
You can also turn on price tracking to get alerts if the price changes for a route or flight.`,
    },
    {
      q: "How can I find cheap flights to anywhere?",
      a: `You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose Anywhere as the destination, and select Explore.
You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear.
You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip.
If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.`,
    },
    {
      q: "How can I get flight alerts for my trip?",
      a: `You can track flight prices for specific dates or, if your plans are flexible, any dates. To get flight alerts for a specific round trip, choose your dates and flights and select Search. Then, you can turn on price tracking.`,
    },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Frequently asked questions
      </Typography>
      <Box sx={{ mt: 0 }}>
        {questions.map((item, i) => (
          <Accordion
            key={i}
            sx={{
              boxShadow: "none",
              background: "transparent",
              backgroundColor: "transparent",
              backgroundImage: "none",
              "& .MuiButtonBase-root": {
                padding: 0,
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <Typography color="#bdc1c6">{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
