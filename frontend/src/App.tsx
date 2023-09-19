import { AboutUs } from "components/AboutUs";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Resume } from "components/Resume";
import { useCallback, useEffect, useState } from "react";
import { Visitor } from "types";

const backendFunctionUrl =
  "https://fcoeevbghvh6yitgaptyl4eg4a0vaxrw.lambda-url.us-east-1.on.aws";

function App() {
  const [visitor, setVisitor] = useState<Visitor>({
    id: "1",
    numberOfVisitors: 0,
  });
  const fetchVisitor = useCallback(async () => {
    try {
      const response = await fetch(backendFunctionUrl, {
        method: "GET",
      });
      const visitor = await response.json();
      setVisitor(visitor);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchVisitor();
  }, [fetchVisitor]);

  return (
    <main>
      <Header visitor={visitor} />
      <AboutUs />
      <Resume />
      <Footer />
    </main>
  );
}

export default App;
