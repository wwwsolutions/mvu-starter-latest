const Model = {
  tours: {
    title: 'Most popular tours',
    cards: [
      // CARD 1
      {
        order: 1,
        tourName: 'The sea explorer',
        details: ['3 day tour', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hostels', 'Difficulty: very easy'],
        priceText: 'Only',
        priceValue: '$297',
        btnCta: { href: '#popup', title: 'Book now!' },
      },

      // CARD 2
      {
        order: 2,
        tourName: 'The forest hiker',
        details: ['7 day tour', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium'],
        priceText: 'Only',
        priceValue: '$497',
        btnCta: { href: '#popup', title: 'Book now!' },
      },

      // CARD 3
      {
        order: 3,
        tourName: 'The snow adventurer',
        details: ['5 day tour', 'Up to 15 people', '3 tour guides', 'Sleep in cozy hostels', 'Difficulty: hard'],
        priceText: 'Only',
        priceValue: '$897',
        btnCta: { href: '#popup', title: 'Book now!' },
      },
    ],
    btn: { href: '#', title: 'Book now!' },

  }
};

export { Model as toursModel };

