export interface Post {
  image: string;
  id: number;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Onboarding",
    content: `Tijdens mijn eerste week bij Trans-IT werd ik meteen opgenomen in het team. 
    De eerste dag waren we bezig met de onboarding. Hierbij hebben we allerij tools moeten downloaden, zoals GitKraken voor versiebeheer en Cursor als IDE. 
    Vanaf de volgende dagen kreeg ik al direct Jira-tickets toegewezen door mijn mentor, waardoor ik meteen in aanraking kwam met de bestaande codebase. 
    In het begin was het best uitdagend om mijn weg te vinden in zo'n grote codebase, maar dankzij de begeleiding van mijn mentor kon ik al snel mijn eerste stappen zetten. 

    Daarnaast heb ik kennisgemaakt met het team, dat bestaat uit vijf leden. 
    Elke dag houden we een stand-up meeting om 9:30, zowel op kantoor als remote. 
    Tijdens deze meetings vertelt ieder teamlid kort wat hij of zij de vorige dag gedaan heeft en wat de plannen zijn voor de dag.
    
    `,
    tags: ["teambuilding", "introductie"],
    date: "2025-09-01",
    image: "/Onboarding_Checklist.png",
  },
  {
    id: 2,
    title: "Leren door onderzoek te doen",
    content:
      "Ik ben gestart met het implementeren van een component in React...",
    tags: ["code", "lessons learned"],
    date: "2025-09-08",
    image: "/befriending-errors-1.png",
  },
];
