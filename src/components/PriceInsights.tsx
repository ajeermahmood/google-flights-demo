import { Card, CardContent, Typography } from "@mui/material";

export default function PriceInsights() {
  return (
    <Card variant="outlined" sx={{ p: 2, mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Find the cheapest days to fly</Typography>
        <Typography variant="body2">
          Use the Date grid and Price graph to get the best deals.
        </Typography>
      </CardContent>
    </Card>
  );
}