import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const tabData = [
  {
    title: "Find the cheapest days to fly",
    desc: "The Date grid and Price graph make it easy to see the best flight deals",
    icon: (
      <CalendarMonthOutlinedIcon
        sx={{
          color: "#1a73e8",
          width: 40,
          height: 40,
          "@media (max-width: 650px)": {
            width: 25,
            height: 25,
          },
        }}
      />
    ),
    content: {
      title: "Insightful tools help you choose your trip dates",
      desc: "If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.",
      img: "/images/insights/dates_benefits_dark.svg",
    },
  },
  {
    title: "See the whole picture with price insights",
    desc: "Price history and trend data show you when to book to get the best price on your flight",
    icon: (
      <TimelineOutlinedIcon
        sx={{
          color: "#1a73e8",
          width: 40,
          height: 40,
          "@media (max-width: 650px)": {
            width: 25,
            height: 25,
          },
        }}
      />
    ),
    content: {
      title: "Get smart insights about flight prices",
      desc: "Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.",
      img: "/images/insights/price_insights_benefits_dark.svg",
    },
  },
  {
    title: "Track prices for a trip",
    desc: "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.",
    icon: (
      <NotificationAddOutlinedIcon
        sx={{
          color: "#1a73e8",
          width: 40,
          height: 40,
          "@media (max-width: 650px)": {
            width: 25,
            height: 25,
          },
        }}
      />
    ),
    content: {
      title:
        "Monitor flight prices and make sure you never miss a price change",
      desc: "Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.",
      img: "/images/insights/tracking_prices_benefits_dark.svg",
    },
  },
];

export default function FlightInsights() {
  const [selectedTab, setSelectedTab] = useState(0);

  const isSmallScreen = useMediaQuery("(max-width:650px)");

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Useful tools to help you find the best deals
      </Typography>
      {isSmallScreen ? (
        <Box>
          {tabData.map((item, i) => (
            <Accordion
              key={i}
              sx={{
                boxShadow: "none",
                backgroundColor: "#8ab4f81f",
                backgroundImage: "none",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box display="flex">
                  {item.icon}
                  <Box pl={2}>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="subtitle2">{item.desc}</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ p: "0px 57px 16px" }}>
                <Divider sx={{ mb: 2, background: "#5f6368" }} />
                <Typography variant="subtitle1">
                  {item.content.title}
                </Typography>
                <Typography variant="subtitle2" mt={1}>
                  {item.content.desc}
                </Typography>

                <Image
                  src={item.content.img}
                  alt="Benefits"
                  width={250}
                  height={300}
                  className="mt-4"
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: 5,
            mt: 2,
          }}
        >
          {/* Left Side Tabs */}
          <Tabs
            orientation="vertical"
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            sx={{
              "@media (max-width: 1024px)": {
                maxWidth: 280,
              },
              // borderRight: "none",
              overflow: "visible",

              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTabs-scroller": {
                overflow: "visible !important",
                "& .MuiTabs-flexContainer": {
                  overflow: "visible !important",
                  "& .MuiButtonBase-root": {
                    overflow: "visible !important",
                    background: "#8ab4f81f",
                    border: "1px solid #8ab4f899",
                    borderRadius: "16px",
                    minHeight: "180px",
                    marginBottom: "13px",
                  },
                },
              },
            }}
          >
            {tabData.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      gap: 1,
                      minHeight: "150px",
                      position: "relative", // allows absolute positioning of the arrow
                      overflow: "visible", // ensure arrow isn't clipped
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="start">
                      {tab.icon}
                      <Box>
                        <Typography
                          variant="subtitle1"
                          textTransform="none"
                          fontWeight={500}
                          sx={{ textWrap: "balance", lineHeight: "1.2" }}
                        >
                          {tab.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          textTransform="none"
                          mt={1}
                        >
                          {tab.desc}
                        </Typography>
                      </Box>
                    </Stack>

                    {selectedTab === index && (
                      <Box className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10">
                        <div className="relative h-[26px] w-[26px] rotate-[-135deg] bg-[#202124] border-b border-l border-[#8ab4f899] clip-path-triangle">
                          <div className="absolute inset-0 bg-[#8ab4f81f]"></div>
                        </div>
                      </Box>
                    )}
                  </Box>
                }
                sx={{
                  alignItems: "flex-start",
                  color: "white",
                  textAlign: "left",
                  backgroundColor:
                    selectedTab === index ? "#394457" : "#202124",
                  borderRadius: 2,
                  mb: 1,
                  p: 2,
                  "&:hover": { backgroundColor: "#2a2c36" },
                }}
              />
            ))}
          </Tabs>

          {/* Right Side Content */}
          <Paper
            sx={{
              flex: 1,
              p: 3,
              bgcolor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
              color: "white",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, textWrap: "balance" }}>
              {tabData[selectedTab].content.title}
            </Typography>
            <Typography variant="subtitle2">
              {tabData[selectedTab].content.desc}
            </Typography>
            <Image
              className="mt-5"
              src={tabData[selectedTab].content.img}
              alt="insight-img"
              height={300}
              width={460}
            />
          </Paper>
        </Box>
      )}
    </Box>
  );
}
