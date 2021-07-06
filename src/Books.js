const books = {
  fiction: [
    {
      name: "The Kite Runner",
      author: "Khaled Hosseini",
      rating: "4.5/5",
      image: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg"
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      rating: "3.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
    },
    {
      name: "The Book Thief",
      author: "Markus Zusak",
      rating: "5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg"
    },
    {
      name: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/10/A_Thousand_Splendid_Suns.gif"
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkein",
      rating: "3/5",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG"
    }
  ],

  thriller: [
    {
      name: "The Da Vinci Code",
      author: "Dan Brown",
      rating: "4/5",
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"
    },
    {
      name: "Angels and Demons",
      author: "Dan Brown",
      rating: "4.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/AngelsAndDemons.jpg"
    },
    {
      name: "Origin",
      author: "Dan Brown",
      rating: "5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Origin_%28Dan_Brown_novel_cover%29.jpg"
    },
    {
      name: "Deception Point",
      author: "Dan Brown",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/4/4a/DeceptionPointDanBrownNovel.jpg"
    },
    {
      name: "Digital Fortress",
      author: "Dan Brown",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/DigitalFortress.jpg"
    }
  ],
  fantasy: [
    {
      name: "Six of Crows",
      author: "Leigh Bardugo",
      rating: "4.5/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/10/Six_of_Crows_by_Leigh_Bardugo_book_cover.jpeg"
    },
    {
      name: "Throne of Glass",
      author: "Sarah J. Maas",
      rating: "3.5/5",
      image: "https://images-na.ssl-images-amazon.com/images/I/61airD26MML.jpg"
    },
    {
      name: "A Court of Thorns and Roses",
      author: "Leigh Bardugo",
      rating: "3.5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546406962l/16096824._SY475_.jpg"
    },
    {
      name: "Cinder",
      author: "Merissa Meyer",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Cinder_%28Official_Book_Cover%29_by_Marissa_Meyer.png"
    },
    {
      name: "The Cruel Prince",
      author: "Holly Black",
      rating: "3/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574535986l/26032825._SY475_.jpg"
    }
  ],
  romance: [
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      rating: "3.5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg"
    },
    {
      name: "The Hating Game",
      author: "Sally Thorne",
      rating: "4/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1467138679l/25883848._SY475_.jpg"
    },
    {
      name: "The Fault in Our Stars",
      author: "John Green",
      rating: "4/5",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg"
    },
    {
      name: "Eleanor and Park",
      author: "Rainbow Rowell",
      rating: "3/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341952742l/15745753.jpg"
    },
    {
      name: "Me Before You",
      author: "Jojo Moyes",
      rating: "4/5",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Me_Before_You.jpg"
    }
  ],
  biography: [
    {
      name: "Wings of Fire",
      author: "Dr. APJ Abdul Kalam with Arun Tiwari",
      rating: "5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg"
    },
    {
      name: "Steve Jobs",
      author: "Walter Isaacson",
      rating: "5/5",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560819186l/52054094._SX318_SY475_.jpg"
    }
  ],
  selfHelp: [
    {
      name: "The Science of Mind Management",
      author: "Swami Mukundananda",
      rating: "5/5",
      image:
        "https://rukminim1.flixcart.com/image/312/312/khp664w0-0/regionalbooks/c/q/k/the-science-of-mind-management-generic-paperback-with-spacehaven-original-imafxnm8tcfh9hjz.jpeg?q=70"
    },
    {
      name: "Seven Mindsets for Success, Happiness and Fulfilment",
      author: "Swami Mukundananda",
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
