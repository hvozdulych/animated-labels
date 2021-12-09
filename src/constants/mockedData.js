import ad from "../assets/images/ad.jpeg"
import bw from "../assets/images/bw.jpeg"
import ck from "../assets/images/ck.jpeg"
import dj from "../assets/images/dj.jpeg"
import hp from "../assets/images/hp.jpeg"
import jsp from "../assets/images/jsp.jpeg"
import tr from "../assets/images/tr.jpeg"
import ts from "../assets/images/ts.jpeg"

export const MOCK_DATA = [
  {
    id: 1,
    firstName: "Bruce",
    lastName: "Wayne",
    photo: bw,
    details: {
      title: "Dark Knight",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    alignment: "center"
  },
  {
    id: 2,
    firstName: "Jack",
    lastName: "Sparrow",
    photo: jsp,
    details: {
      title: "Pirate",
      desc: "Et dolore magna aliqua. Suspendisse interdum consectetur libero id"
    },
    alignment: "center"
  },
  {
    id: 3,
    firstName: "Davy",
    lastName: "Jones",
    photo: dj,
    details: {
      title: "Squid Pirate",
      desc: "Pharetra massa massa ultricies mi. Orci eu lobortis elementum nibh tellus molestie. Massa sed elementum tempus egestas sed. Neque vitae tempus quam"
    },
    alignment: "center"
  },
  {
    id: 4,
    firstName: "Harry",
    lastName: "Potter",
    photo: hp,
    details: {
      title: "Wizard",
      desc: "Eget nulla facilisi etiam dignissim diam quis enim lobortis."
    },
    alignment: "right"
  },
  {
    id: 5,
    firstName: "Tom",
    lastName: "Riddle",
    photo: tr,
    details: {
      title: "He Who Must Not Be Named",
      desc: "Duis convallis convallis tellus id interdum velit laoreet id donec. Augue lacus viverra vitae congue eu consequat ac felis donec."
    },
    alignment: "left"
  },
  {
    id: 6,
    firstName: "Albus",
    lastName: "Dumbledore",
    photo: ad,
    details: {
      title: "Hogwarts Headmaster",
      desc: "Leo integer malesuada nunc vel risus commodo. Euismod in pellentesque massa placerat duis ultricies lacus sed."
    },
    alignment: "center"
  },
  {
    id: 7,
    firstName: "Clark",
    lastName: "Kent",
    photo: ck,
    details: {
      title: "Superman",
      desc: "Ac tortor dignissim convallis aenean et tortor at risus viverra. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer."
    },
    alignment: "center"
  },
  {
    id: 8,
    firstName: "Tony",
    lastName: "Stark",
    photo: ts,
    details: {
      title: "Genius, Billionaire, Playboy, Philanthropist.",
      desc: "Quis imperdiet massa tincidunt nunc pulvinar sapien et."
    },
    alignment: "right"
  }
]
