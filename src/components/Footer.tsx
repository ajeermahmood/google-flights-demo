"use client";
import LanguageIcon from "@mui/icons-material/Language";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {
  Box,
  Divider,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "./CustomButton";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ color: "white", py: 4 }}>
      <Divider sx={{ backgroundColor: "#4a4d52", mb: 4 }} />
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        justifyContent="center"
        spacing={2}
        sx={{
          mb: 2,
        }}
      >
        <CustomButton
          icon={<LanguageIcon />}
          text="Language · English (United States)"
          active={false}
          fontSize={12}
        />
        <CustomButton
          icon={<RoomOutlinedIcon />}
          text="Location · United Arab Emirates"
          active={false}
          fontSize={12}
        />
        <CustomButton
          icon={<PaymentsOutlinedIcon />}
          text="Currency · AED"
          active={false}
          fontSize={12}
        />
      </Stack>

      {/* Text Section */}
      <Typography variant="body2" color="#9aa0a6" align="center" sx={{ mb: 2 }}>
        Current language and currency options applied: English (United States) -
        United Arab Emirates - AED
        <br />
        Displayed currencies may differ from the currencies used to purchase
        flights.{" "}
        <Link href="#" color="primary" underline="hover">
          Learn more
        </Link>
      </Typography>

      <Typography
        variant="body2"
        color="#9aa0a6"
        align="center"
        sx={{ mb: 3, mx: "auto" }}
      >
        Prices are final prices and include all taxes and fees, including
        payment fees for the cheapest common payment method (which may differ
        depending on the provider). Additional charges may apply for other types
        of payment, luggage, meals, WLAN, or other additional services. Prices,
        availability, and travel details are provided based on the latest
        information received from our partners. This information is reflected in
        the results within a period of less than 24 hours. Additional conditions
        may also be applied by our partners. You should then check prices and
        conditions with the service providers before booking.
      </Typography>

      {/* Footer Links */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {[
          "About",
          "Privacy",
          "Terms",
          "Join user studies",
          "Feedback",
          "Help Center",
        ].map((text) => (
          <Link
            key={text}
            href="#"
            color="primary"
            underline="hover"
            variant="body2"
          >
            {text}
          </Link>
        ))}
      </Stack>
      <Divider sx={{ backgroundColor: "#4a4d52", mb: 2, mt: 4 }} />
    </Box>
  );
};

export default Footer;
