export interface TarotBaseCard {
  id: string;
  name: string;
  type: 'major' | 'minor';
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles';
  image: string;
}

export const TAROT_CARDS: TarotBaseCard[] = [
  // Major Arcana
  { id: '0', name: 'The Fool', type: 'major', image: '/tarot-cards/major/young-traveler-cliff-dog.jpg' },
  { id: '1', name: 'The Magician', type: 'major', image: '/tarot-cards/major/robed-figure-altar-elements.jpg' },
  { id: '2', name: 'The High Priestess', type: 'major', image: '/tarot-cards/major/seated-figure-pillars-scroll-moon.jpg' },
  { id: '3', name: 'The Empress', type: 'major', image: '/tarot-cards/major/regal-woman-throne-nature.jpg' },
  { id: '4', name: 'The Emperor', type: 'major', image: '/tarot-cards/major/powerful-figure-stone-throne-ram.jpg' },
  { id: '5', name: 'The Hierophant', type: 'major', image: '/tarot-cards/major/pope-figure-two-acolytes-pillars.jpg' },
  { id: '6', name: 'The Lovers', type: 'major', image: '/tarot-cards/major/man-woman-garden-angel.jpg' },
  { id: '7', name: 'The Chariot', type: 'major', image: '/tarot-cards/major/warrior-chariot-sphinxes.jpg' },
  { id: '8', name: 'Strength', type: 'major', image: '/tarot-cards/major/woman-taming-lion.jpg' },
  { id: '9', name: 'The Hermit', type: 'major', image: '/tarot-cards/major/old-man-lantern-mountain.jpg' },
  { id: '10', name: 'Wheel of Fortune', type: 'major', image: '/tarot-cards/major/wheel-sphinx-creatures-clouds.jpg' },
  { id: '11', name: 'Justice', type: 'major', image: '/tarot-cards/major/seated-figure-sword-scales-pillars.jpg' },
  { id: '12', name: 'The Hanged Man', type: 'major', image: '/tarot-cards/major/man-upside-down-tree-halo.jpg' },
  { id: '13', name: 'Death', type: 'major', image: '/tarot-cards/major/skeleton-knight-white-horse-flag.jpg' },
  { id: '14', name: 'Temperance', type: 'major', image: '/tarot-cards/major/angel-pouring-water-cups.jpg' },
  { id: '15', name: 'The Devil', type: 'major', image: '/tarot-cards/major/horned-figure-chains-couple.jpg' },
  { id: '16', name: 'The Tower', type: 'major', image: '/tarot-cards/major/tower-lightning-falling-figures.jpg' },
  { id: '17', name: 'The Star', type: 'major', image: '/tarot-cards/major/woman-pouring-water-stars-bird.jpg' },
  { id: '18', name: 'The Moon', type: 'major', image: '/tarot-cards/major/moon-face-towers-wolf-dog.jpg' },
  { id: '19', name: 'The Sun', type: 'major', image: '/tarot-cards/major/sun-face-child-white-horse.jpg' },
  { id: '20', name: 'Judgement', type: 'major', image: '/tarot-cards/major/angel-trumpet-rising-figures.jpg' },
  { id: '21', name: 'The World', type: 'major', image: '/tarot-cards/major/dancing-figure-wreath-creatures.jpg' },

  // Minor Arcana - Wands
  { id: 'w1', name: 'Ace of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/hand-cloud-flowering-wand.jpg' },
  { id: 'w2', name: 'Two of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/figure-globe-castle-two-wands.jpg' },
  { id: 'w3', name: 'Three of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/figure-cliff-three-wands-ships.jpg' },
  { id: 'w4', name: 'Four of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/canopy-four-wands-celebration.jpg' },
  { id: 'w5', name: 'Five of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/five-figures-battle-wands.jpg' },
  { id: 'w6', name: 'Six of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/victor-wreath-horse-six-wands.jpg' },
  { id: 'w7', name: 'Seven of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/figure-defending-wand-high-ground.jpg' },
  { id: 'w8', name: 'Eight of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/eight-wands-flying-air.jpg' },
  { id: 'w9', name: 'Nine of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/wounded-figure-nine-wands-defense.jpg' },
  { id: 'w10', name: 'Ten of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/figure-carrying-ten-wands-village.jpg' },
  { id: 'w11', name: 'Page of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/messenger-tall-wand-desert.jpg' },
  { id: 'w12', name: 'Knight of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/knight-charging-wand-desert.jpg' },
  { id: 'w13', name: 'Queen of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/queen-throne-lions-sunflower-wand.jpg' },
  { id: 'w14', name: 'King of Wands', type: 'minor', suit: 'wands', image: '/tarot-cards/minor/wands/king-throne-salamander-wand.jpg' },

  // Minor Arcana - Cups
  { id: 'c1', name: 'Ace of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/hand-cloud-overflowing-cup-dove.jpg' },
  { id: 'c2', name: 'Two of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/couple-exchanging-cups-lion-caduceus.jpg' },
  { id: 'c3', name: 'Three of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/three-women-raising-cups-garden.jpg' },
  { id: 'c4', name: 'Four of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/figure-tree-three-cups-hand-cloud.jpg' },
  { id: 'c5', name: 'Five of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/cloaked-figure-spilled-cups-bridge.jpg' },
  { id: 'c6', name: 'Six of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/children-garden-cups-flowers.jpg' },
  { id: 'c7', name: 'Seven of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/silhouette-seven-cups-visions-clouds.jpg' },
  { id: 'c8', name: 'Eight of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/figure-walking-away-stacked-cups-moon.jpg' },
  { id: 'c9', name: 'Nine of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/satisfied-figure-nine-cups-arc.jpg' },
  { id: 'c10', name: 'Ten of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/family-rainbow-ten-cups-home.jpg' },
  { id: 'c11', name: 'Page of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/messenger-cup-fish-ocean.jpg' },
  { id: 'c12', name: 'Knight of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/knight-white-horse-offering-cup.jpg' },
  { id: 'c13', name: 'Queen of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/queen-throne-sea-cup.jpg' },
  { id: 'c14', name: 'King of Cups', type: 'minor', suit: 'cups', image: '/tarot-cards/minor/cups/king-throne-turbulent-sea-cup.jpg' },

  // Minor Arcana - Swords
  { id: 's1', name: 'Ace of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/hand-cloud-upright-sword-crown.jpg' },
  { id: 's2', name: 'Two of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/blindfolded-figure-crossed-swords-moon.jpg' },
  { id: 's3', name: 'Three of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/heart-pierced-three-swords-rain.jpg' },
  { id: 's4', name: 'Four of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/knight-tomb-three-swords-wall.jpg' },
  { id: 's5', name: 'Five of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/figure-three-swords-defeated-figures.jpg' },
  { id: 's6', name: 'Six of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/figure-boat-six-swords-ferryman.jpg' },
  { id: 's7', name: 'Seven of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/figure-sneaking-five-swords-camp.jpg' },
  { id: 's8', name: 'Eight of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/bound-blindfolded-eight-swords.jpg' },
  { id: 's9', name: 'Nine of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/figure-bed-head-hands-nine-swords.jpg' },
  { id: 's10', name: 'Ten of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/figure-face-down-ten-swords-back.jpg' },
  { id: 's11', name: 'Page of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/messenger-upright-sword-windswept.jpg' },
  { id: 's12', name: 'Knight of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/knight-charging-sword-stormy.jpg' },
  { id: 's13', name: 'Queen of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/queen-throne-upright-sword-clouds.jpg' },
  { id: 's14', name: 'King of Swords', type: 'minor', suit: 'swords', image: '/tarot-cards/minor/swords/king-throne-upright-sword-butterfly.jpg' },

  // Minor Arcana - Pentacles
  { id: 'p1', name: 'Ace of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/hand-cloud-golden-pentacle-garden.jpg' },
  { id: 'p2', name: 'Two of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/figure-juggling-two-pentacles-ships.jpg' },
  { id: 'p3', name: 'Three of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/sculptor-working-archway-figures.jpg' },
  { id: 'p4', name: 'Four of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/figure-clutching-four-pentacles-city.jpg' },
  { id: 'p5', name: 'Five of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/two-figures-snow-stained-glass.jpg' },
  { id: 'p6', name: 'Six of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/merchant-scales-giving-coins.jpg' },
  { id: 'p7', name: 'Seven of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/farmer-resting-seven-pentacles-bush.jpg' },
  { id: 'p8', name: 'Eight of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/craftsman-workbench-eight-pentacles.jpg' },
  { id: 'p9', name: 'Nine of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/woman-falcon-vineyard-nine-pentacles.jpg' },
  { id: 'p10', name: 'Ten of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/family-dogs-archway-ten-pentacles.jpg' },
  { id: 'p11', name: 'Page of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/messenger-studying-pentacle-field.jpg' },
  { id: 'p12', name: 'Knight of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/knight-heavy-horse-pentacle-field.jpg' },
  { id: 'p13', name: 'Queen of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/queen-throne-garden-pentacle-rabbit.jpg' },
  { id: 'p14', name: 'King of Pentacles', type: 'minor', suit: 'pentacles', image: '/tarot-cards/minor/pentacles/king-throne-bulls-pentacle-castle.jpg' },
];
