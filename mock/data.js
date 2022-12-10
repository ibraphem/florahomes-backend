import bcrypt from "bcryptjs"

export const users = [
    {
      firstName: "Ibrahim",
      lastName: "Akinola",
      email: "ibraphem@outlook.com",
      phone: "08077764909",
      password: bcrypt.hashSync('123456'),
      role: 'admin',
    },
    {
      firstName: "Oluwafemi",
      lastName: "Olayioye",
      email: "ibraphem@gmail.com",
      phone: "07031259185",
      password: bcrypt.hashSync('123456'),
      role: 'ownEarner',
    },
  ]

  export const properties = [
    {
        name: "Fern Island",
        photo: "https://www.florahomesgc.com/static/media/fern_i9.70ad6e3c.jpg",
        currentPricePerUnit: "20000",
        title: "Gazette",
        area: "Ibeju-Lekki",
    },
    {
        name: "Flora City",
        photo: "https://www.florahomesgc.com/static/media/fern-building.fc8f0b5e.jpg",
        currentPricePerUnit: "70000",
        title: "Govt. Excision",
        area: "Oju Agbe",
    },

]