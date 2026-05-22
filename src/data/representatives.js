// Cache of representatives data from the Google Sheet response
// This serves as an immediate local fallback in case the real-time fetch fails or is blocked.
export const cachedRepresentatives = [
  {
    id: 1,
    college: "University Of Engineering And Management Kolkata",
    reps: [
      { name: "Arkapriyo Pal", whatsapp: "9051613609", email: "arkapriyopal@gmail.com" },
      { name: "Rohit Dasgupta", whatsapp: "9883744589", email: "rohitdas20791@gmail.com" }
    ]
  },
  {
    id: 2,
    college: "Netaji Subhash Engineering College",
    reps: [
      { name: "Swastika Banerjee", whatsapp: "7439131697", email: "swastikabanerjee.bme2023@nsec.ac.in" },
      { name: "Shambo Das", whatsapp: "7439435618", email: "shambodas.ece2023@nsec.ac.in" }
    ]
  },
  {
    id: 3,
    college: "Basanti Devi College",
    reps: [
      { name: "Nayanika Deb", whatsapp: "6289356453", email: "nayanikadeb24@gmail.com" },
      { name: "Sarah Qamar", whatsapp: "9830247427", email: "sarahqamar.pratt@gmail.com" }
    ]
  },
  {
    id: 4,
    college: "The Heritage Academy",
    reps: [
      { name: "Ronit Paul", whatsapp: "6290464869", email: "ronit.paul.cs29@tha.edu.in" },
      { name: "Devangsh Maru", whatsapp: "7439136936", email: "devangsh.maru.cs29@tha.edu.in" }
    ]
  },
  {
    id: 5,
    college: "Asutosh College",
    reps: [
      { name: "Shristi Roy", whatsapp: "6294245510", email: "rshristi156@gmail.com" }
    ]
  },
  {
    id: 6,
    college: "St. Thomas' College of Engineering & Technology",
    reps: [
      { name: "Arghyadeep Roy", whatsapp: "7439137061", email: "arghyaadeep.roy@gmail.com" },
      { name: "Archishman Mandal", whatsapp: "9474695951", email: "archismanmandal49257@gmail.com" }
    ]
  },
  {
    id: 7,
    college: "Gokhale Memorial Girls College",
    reps: [
      { name: "Ishani Mukherjee", whatsapp: "7439770057", email: "ishanimukherjee425@gmail.com" },
      { name: "Aratrika Ghosh", whatsapp: "9007777936", email: "ghosharatrika7@gmail.com" }
    ]
  },
  {
    id: 8,
    college: "Meghnad Saha Institute of Technology",
    reps: [
      { name: "Aswat Jana", whatsapp: "7003480969", email: "Futurelion109@gmail.com" },
      { name: "Lopamudra Behuria", whatsapp: "8337024845", email: "lbehuria2006@gmail.com" }
    ]
  },
  {
    id: 9,
    college: "Future Institute of Engineering and Management",
    reps: [
      { name: "Debarati Bhanja", whatsapp: "8583003705", email: "debaratibhanja13@gmail.com" },
      { name: "Gargi Dutta", whatsapp: "8016307004", email: "gargidutta801@gmail.com" }
    ]
  },
  {
    id: 10,
    college: "Calcutta University",
    reps: [
      { name: "TRISHUL NASKAR", whatsapp: "9002214965", email: "trishulnaskar14112001@gmail.com" },
      { name: "SHUBHAM DEY", whatsapp: "9123996647", email: "shubham13dey@gmail.com" }
    ]
  },
  {
    id: 11,
    college: "Heritage Institute of Technology",
    reps: [
      { name: "Rajib Ghosh", whatsapp: "8653530911", email: "rajibghoshjgm@gmail.com" }
    ]
  }
];

// Export CSV URL for dynamic runtime updates
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/13FKi69E8zNZhruXpD0DJrfUVP06ywMl-VIahsExEFpk/export?format=csv";

// Parses CSV lines into a robust structures list
function parseCSV(csvText) {
  const lines = [];
  let currentLine = [];
  let inQuotes = false;
  let currentValue = "";

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentValue += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentLine.push(currentValue.trim());
      currentValue = "";
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      currentLine.push(currentValue.trim());
      if (currentLine.some(val => val !== "")) {
        lines.push(currentLine);
      }
      currentLine = [];
      currentValue = "";
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
    } else {
      currentValue += char;
    }
  }
  
  if (currentValue || currentLine.length > 0) {
    currentLine.push(currentValue.trim());
    lines.push(currentLine);
  }

  if (lines.length <= 1) return [];

  const headers = lines[0];
  const dataRows = lines.slice(1);

  const parsed = [];
  let idCounter = 1;

  dataRows.forEach((row) => {
    if (row.length < 3) return;

    // Normalizing college name
    let collegeName = row[1] || "";
    collegeName = collegeName.trim().replace(/\s+/g, " ");
    if (!collegeName) return;

    // Clean up Representative 1
    const rep1Name = (row[2] || "").trim();
    const rep1Whatsapp = (row[3] || "").trim().replace(/[\s+-]/g, "");
    const rep1Email = (row[4] || "").trim();

    // Clean up Representative 2
    const rep2Name = (row[6] || "").trim();
    const rep2Whatsapp = (row[7] || "").trim().replace(/[\s+-]/g, "");
    const rep2Email = (row[8] || "").trim();

    const reps = [];
    if (rep1Name && rep1Name.toLowerCase() !== "na" && rep1Name.toLowerCase() !== "n/a") {
      reps.push({ name: rep1Name, whatsapp: rep1Whatsapp, email: rep1Email });
    }
    if (rep2Name && rep2Name.toLowerCase() !== "na" && rep2Name.toLowerCase() !== "n/a") {
      reps.push({ name: rep2Name, whatsapp: rep2Whatsapp, email: rep2Email });
    }

    if (reps.length > 0) {
      // Avoid duplicate colleges, merge representatives if needed
      const existing = parsed.find(item => item.college.toLowerCase() === collegeName.toLowerCase());
      if (existing) {
        reps.forEach(newRep => {
          if (!existing.reps.some(r => r.name.toLowerCase() === newRep.name.toLowerCase())) {
            existing.reps.push(newRep);
          }
        });
      } else {
        parsed.push({
          id: idCounter++,
          college: collegeName,
          reps: reps
        });
      }
    }
  });

  return parsed;
}

// Fetches live data from Google Sheet with timeout and fallback
export async function getLiveRepresentatives() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout for fast response

    const response = await fetch(SHEET_CSV_URL, {
      signal: controller.signal,
      headers: {
        'pragma': 'no-cache',
        'cache-control': 'no-cache'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    const parsedData = parseCSV(text);
    
    if (parsedData && parsedData.length > 0) {
      return parsedData;
    }
    
    return cachedRepresentatives;
  } catch (error) {
    console.warn("Unable to fetch live representatives, falling back to cached roster:", error);
    return cachedRepresentatives;
  }
}
