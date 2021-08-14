const books = {
  fiction: [
    {
      name: "The Kite Runner",
      author: "Khaled Hosseini",
      description:
        "A heart touching story set in the district of Kabul, which tells the story of Amir, a young boy. The story is set against a backdrop of tumultuous events, and depicts a story with the relationship between a father and son.",
      rating: "4.5/5",
      image: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg"
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      description:
        "A of a 11 year old boy Harry, who discovers on the night of his eleventh birthday of his magical heritage. The book revolves around the adventures faced by Harry in the Hogwarts School of Witchcraft and Wizardry, with his friends Hermione, and Ron.",
      rating: "3.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
    },
    {
      name: "The Book Thief",
      author: "Markus Zusak",
      description:
        "Narrated from the point of view of Death, this beautiful book tells the story and adventures of Liesel Meminger set in Nazi Germany during the Second World War.",
      rating: "5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg"
    },
    {
      name: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      description:
        "The book revolves around the story of a mother-daughter duo, and how their life intersects when both are faced with similar tragedies and are forced to accept marriage proposals.",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/10/A_Thousand_Splendid_Suns.gif"
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkein",
      description:
        "A children's fantasy, The Hobbit follows the quest of home-loving Bilbo Baggins, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory.",
      rating: "3/5",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG"
    }
  ],

  thriller: [
    {
      name: "The Da Vinci Code",
      author: "Dan Brown",
      description:
        "The Da Vinci Code follows 'symbologist' Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
      rating: "4/5",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"
    },
    {
      name: "Angels and Demons",
      author: "Dan Brown",
      description:
        "World-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a cryptic symbol seared into the chest of a murdered physicist. Langdon joins forces in Rome with the mysterious scientist Vittoria Vetra, who together embark on a frantic hunt to find about the underground organization who has a deadly vendetta against the Catholic Church.",
      rating: "4.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/AngelsAndDemons.jpg"
    },
    {
      name: "Origin",
      author: "Dan Brown",
      description:
        "Robert Langdon, Harvard professor of symbology and religious iconology, arrives at the ultramodern Guggenheim Museum Bilbao to attend a major announcement—the unveiling of a discovery that “will change the face of science forever.” The book unfolds how Langdon helps the world discover the answers to the two fundamental questions on human existence, discovered by Langdon's dear student Edmond Kirsch.",
      rating: "5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Origin_%28Dan_Brown_novel_cover%29.jpg"
    },
    {
      name: "Deception Point",
      author: "Dan Brown",
      description:
        "The book revolves around the story of intelligence analyst Rachel Sexton, who along with a scholar Michael Tolland, help to uncover the truth behind NASA's satellite discovery of an astonishingly rare object buried deep in the Arctic ice, that proclaims as a much-needed victory for NASA policy and the impending presidential election.",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4a/DeceptionPointDanBrownNovel.jpg"
    },
    {
      name: "Digital Fortress",
      author: "Dan Brown",
      description:
        "When the National Security Agency's invincible code-breaking machine encounters a mysterious code it cannot break, the agency calls its head cryptographer, Susan Fletcher, a brilliant and beautiful mathematician. What she uncovers sends shock waves through the corridors of power. The NSA is being held hostage... not by guns or bombs, but by a code so ingeniously complex that if released it would cripple U.S. intelligence. Story revolves around Susan Fletcher, and her battles to save the agency she believes in, her life, and the life of the man she loves.",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/DigitalFortress.jpg"
    }
  ],
  fantasy: [
    {
      name: "Six of Crows",
      author: "Leigh Bardugo",
      description:
        "Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone.",
      rating: "4.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/10/Six_of_Crows_by_Leigh_Bardugo_book_cover.jpeg"
    },
    {
      name: "Throne of Glass",
      author: "Sarah J. Maas",
      description:
        "After serving out a year of hard labor in the salt mines of Endovier for her crimes, 18-year-old assassin Celaena Sardothien is dragged before the Crown Prince. Prince Dorian offers her her freedom on one condition: she must act as his champion in a competition to find a new royal assassin. As the other champions start turning up dead, Celaena tries to figure out who the killer is before she becomes a victim.",
      rating: "3.5/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/61airD26MML.jpg"
    },
    {
      name: "A Court of Thorns and Roses",
      author: "Sarah J. Maas",
      description:
        "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price.",
      rating: "3.5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546406962l/16096824._SY475_.jpg"
    },
    {
      name: "Cinder",
      author: "Merissa Meyer",
      description:
        "Humans and androids crowd the raucous streets of New Beijing. A deadly plague ravages the population. From space, a ruthless Lunar people watch, waiting to make their move. No one knows that Earth’s fate hinges on one girl... Cinder, a gifted mechanic, who is a cyborg.",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png"
    },
    {
      name: "The Cruel Prince",
      author: "Holly Black",
      description:
        "Jude was seven when her parents were murdered and she and her two sisters were stolen away to live in the treacherous High Court of Faerie. Ten years later, Jude wants nothing more than to belong there, despite her mortality. But many of the fey despise humans. Especially Prince Cardan, the youngest and wickedest son of the High King. To win a place at the Court, she must defy him–and face the consequences...",
      rating: "3/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574535986l/26032825._SY475_.jpg"
    }
  ],
  romance: [
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England",
      rating: "3.5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg"
    },
    {
      name: "The Hating Game",
      author: "Sally Thorne",
      description:
        "Fun, witty and humorous story of Lucy Hutton, who's charming, accommodating and prides herself on being loved by everyone at Bexley & Gamin. Everyone loves her except for the coldly efficient, impeccably attired, physically intimidating Joshua Templeman. And the feeling is mutual. Sharing offices together they are entrenched in an addictive, ridiculous never-ending game of one-upmanship. Soon Lucy starts wondering maybe she doesn’t hate Joshua Templeman. And maybe, he doesn’t hate her either.",
      rating: "4/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1467138679l/25883848._SY475_.jpg"
    },
    {
      name: "The Fault in Our Stars",
      author: "John Green",
      description:
        "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg"
    },
    {
      name: "Eleanor and Park",
      author: "Rainbow Rowell",
      description:
        "Eleanor is the new girl in town. Park is the boy at the back of the bus. Slowly, steadily, through late-night conversations and an ever-growing stack of mix tapes, Eleanor and Park fall for each other. They fall in love the way you do the first time, when you're young, and you feel as if you have nothing and everything to lose.",
      rating: "3/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341952742l/15745753.jpg"
    },
    {
      name: "Me Before You",
      author: "Jojo Moyes",
      description:
        "They had nothing in common until love gave them everything to lose. Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will acerbic, moody, bossy—but Lou refuses to treat him with kid gloves, and soon his happiness means more to her than she expected. When she learns that Will has shocking plans of his own, she sets out to show him that life is still worth living.",
      rating: "4/5",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Me_Before_You.jpg"
    }
  ],
  biography: [
    {
      name: "Wings of Fire",
      author: "Dr. APJ Abdul Kalam with Arun Tiwari",
      description:
        "This is the story of Dr. APJ Abdul Kalam's rise from obscurity and his personal and professional struggles. This is also the saga of independent India's struggle for technological self-sufficiency and defensive autonomy-a story as much about politics, domestic and international, as it is about science.",
      rating: "5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg"
    },
    {
      name: "Steve Jobs",
      author: "Walter Isaacson",
      description:
        "This is the story of the Apple cofounder Steve Jobs, which is based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues.",
      rating: "5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560819186l/52054094._SX318_SY475_.jpg"
    },
    {
      name: "Surely You're Joking, Mr. Feynman!",
      author: "Richard Feynman",
      description:
        "Here is the account of Richard Feynman, winner of the Nobel Prize in physics, thrived on outrageous adventures. This book contains Feynman's life in all its eccentrics—a combustible mixture of high intelligence, unlimited curiosity, and raging chutzpah",
      rating: "5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504936953l/35167685.jpg"
    }
  ],
  selfHelp: [
    {
      name: "The Science of Mind Management",
      author: "Swami Mukundananda",
      description:
        "The book contains divine knowledge and teachings from the Bhagvat Gita and the vedic scriptures. It tries to describe the various aspects of human mind and shares techniques and tools to manage it.",
      rating: "5/5",
      image:
        "https://rukminim1.flixcart.com/image/312/312/khp664w0-0/regionalbooks/c/q/k/the-science-of-mind-management-generic-paperback-with-spacehaven-original-imafxnm8tcfh9hjz.jpeg?q=70"
    },
    {
      name: "Seven Mindsets for Success, Happiness and Fulfilment",
      author: "Swami Mukundananda",
      description:
        "This book talks about the importance of having the right mindset to suceed with anything in life.",
      rating: "5/5",
      image:
        "https://rukminim1.flixcart.com/image/416/416/k1nw9zk0/book/3/9/2/7-mindsets-for-success-happiness-and-fulfillment-original-imafh4f6uag4nfkg.jpeg?q=70"
    },
    {
      name: "Attitude is Everything",
      author: "Jeff Keller",
      rating: "5/5",
      image:
        "https://rukminim1.flixcart.com/image/416/416/khxqt8w0-0/book/x/o/v/attitude-is-everything-change-your-attitude-change-your-life-original-imafxtvesfbk8rje.jpeg?q=70"
    }
  ]
};

export { books };
