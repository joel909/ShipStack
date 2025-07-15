import app from "./app";
import 'dotenv/config';
const PORT = process.env.PORT || 8000;

//console.log(process.env.SUPABASE_URL);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

