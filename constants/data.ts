import { BsDiscord } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";

interface User  {
  id: number;
  src: string;
  username: string;
  usertag: string;
};

interface Server  {
  id: number;
  src: string;
  serverName: string;
  categories: Categories[]
};

interface Categories {
  name: string;
  channels: Channels[]
}

interface Channels {
  id: number;
  name: string;
  description?: string;
  messages: string
}

export const userData: User[] = [
  { id: 1, src: "/avatars/1.jpg", username: 'Sanzu', usertag: '@xesanzu' },
  { id: 2, src: "/avatars/2.jpg", username:'Rumi', usertag: "@xerumi"},
];

export const serverData: Server[] = [
  { id: 1, src: "/avatars/1.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
     },
  { id: 2, src: "/avatars/2.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 3, src: "/avatars/3.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 4, src: "/avatars/4.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 5, src: "/avatars/5.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 6, src: "/avatars/6.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 7, src: "/avatars/7.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 8, src: "/avatars/3.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
  { id: 9, src: "/avatars/1.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      name: 'Welcome',
      channels: [
        {
          id: 1,
          name: 'Welcome to',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
   },
];

export const PlusIcon = PiPlus;
export const DiscordIcon = BsDiscord;
