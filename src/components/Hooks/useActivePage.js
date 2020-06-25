import { useState, useEffect } from "react";

export default function useActivePage(page) {
  [activePage, setActivePage] = useState(null);

  setActivePage(page);
}
