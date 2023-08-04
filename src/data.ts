import { IMessage } from "./types";

export const conversation: IMessage[] = [
  {
    id: "1",
    text: "Hi Jane!",
    createdAt: new Date("2023-02-01T05:00:00Z"),
    user: { id: "1", name: "John" },
  },
  {
    id: "2",
    text: "Hello John!",
    createdAt: new Date("2023-02-01T05:01:00Z"),
    user: { id: "2", name: "Jane" },
  },
  {
    id: "3",
    text: "How are you doing?",
    createdAt: new Date("2023-02-01T05:02:00Z"),
    user: { id: "1", name: "John" },
  },
  {
    id: "4",
    text: "I am doing well, thank you! How about you?",
    createdAt: new Date("2023-02-01T05:03:00Z"),
    user: { id: "2", name: "Jane" },
  },
  {
    id: "5",
    text: "Great! What did you do today?",
    createdAt: new Date("2023-02-01T05:04:00Z"),
    user: { id: "1", name: "John" },
  },
  {
    id: "6",
    text: "I went shopping and did a little bit of reading. What about you?",
    createdAt: new Date("2023-02-01T05:05:00Z"),
    user: { id: "2", name: "Jane" },
  },
  {
    id: "7",
    text: "Sounds like a fun day! I spent my day coding.",
    createdAt: new Date("2023-02-01T05:06:00Z"),
    user: { id: "1", name: "John" },
  },
  {
    id: "8",
    text: "As usual, Mr. Programmer!",
    createdAt: new Date("2023-02-01T05:07:00Z"),
    user: { id: "2", name: "Jane" },
  },
  {
    id: "9",
    text: "Haha yes, guilty as charged!",
    createdAt: new Date("2023-02-01T05:08:00Z"),
    user: { id: "1", name: "John" },
  },
  // {
  //   id: "10",
  //   text: "Do you ever take a break?",
  //   createdAt: new Date("2023-02-01T05:09:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
  // {
  //   id: "11",
  //   text: "Yes of course, breaks are important too.",
  //   createdAt: new Date("2023-02-01T05:10:00Z"),
  //   user: { id: "1", name: "John" },
  // },
  // {
  //   id: "12",
  //   text: "That’s good to hear.",
  //   createdAt: new Date("2023-02-01T05:11:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
  // {
  //   id: "13",
  //   text: "Do you enjoy shopping?",
  //   createdAt: new Date("2023-02-01T05:12:00Z"),
  //   user: { id: "1", name: "John" },
  // },
  // {
  //   id: "14",
  //   text: "Yes, especially when there are sales!",
  //   createdAt: new Date("2023-02-01T05:13:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
  // {
  //   id: "15",
  //   text: "I can imagine!",
  //   createdAt: new Date("2023-02-01T05:14:00Z"),
  //   user: { id: "1", name: "John" },
  // },
  // {
  //   id: "16",
  //   text: "How about you, do you like shopping?",
  //   createdAt: new Date("2023-02-01T05:15:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
  // {
  //   id: "17",
  //   text: "Not really, I prefer online shopping.",
  //   createdAt: new Date("2023-02-01T05:16:00Z"),
  //   user: { id: "1", name: "John" },
  // },
  // {
  //   id: "18",
  //   text: "I see, different strokes for different folks.",
  //   createdAt: new Date("2023-02-01T05:17:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
  // {
  //   id: "19",
  //   text: "Indeed!",
  //   createdAt: new Date("2023-02-01T05:18:00Z"),
  //   user: { id: "1", name: "John" },
  // },
  // {
  //   id: "20",
  //   text: "It was nice chatting!",
  //   createdAt: new Date("2023-02-01T05:19:00Z"),
  //   user: { id: "2", name: "Jane" },
  // },
];
