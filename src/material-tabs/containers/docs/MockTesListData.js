const items = [
  {
    name: "U Fokusu",
    //Icon: InboxIcon,
    expanded: false,
    children: [
      { name: "Baronija", Icon: MailIcon },
      { name: "Baronija 2", Icon: MailIcon },
    ],
  },
  {
    name: "Postpaid",
    //Icon: ContactsIcon,
    expanded: false,
    children: [
      {
        name: "Postpaid (Postpejd)",
        //Icon: ContactMailIcon,
        pages: [
          { title: "Uvod u Postpaid" },
          { title: "Kosmos placanja" },
          { title: "Digitalni Servisi" },
        ],
      },
      {
        name: "Prodajne aktivnosti",
        //Icon: ContactMailIcon,
        pages: [
          { title: "Finalizacija ugovora" },
          { title: "Dodavanje opreme i servisa" },
          { title: "Prodaja pametnih satova i narukvica" },
        ],
      },
      {
        name: "Postprodajne aktivnosti",
        //Icon: ContactMailIcon,
        pages: [
          { title: "Overa Broja" },
          { title: "Obracunsko stanje" },
          { title: "Novi nacin placanja" },
        ],
      },
      {
        name: "Kampanje",
        //Icon: ContactMailIcon,
        pages: [
          { title: "Drivey" },
          { title: "GAM kampanje" },
          { title: "Plavi petak" },
        ],
      },
    ],
  },
  {
    name: "Prepaid",
    //Icon: InboxIcon,
    expanded: false,
    children: [{ name: "Baronija" }, { name: "Baronija 2" }],
  },
];
