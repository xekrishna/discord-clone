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
  id: number;
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
  { id: 1, src: "/avatars/1.jpg", serverName: "Meow's Paradise",
    categories: [{
      id: 1,
      name: 'Onboarding',
      channels: [
        {
          id: 1,
          name: 'Welcome',
          description: 'well',
          messages: 'sip sip'
        },
        {
          id: 2,
          name: 'Rules',
          description: 'well',
          messages: 'sip sip'
        },
        {
          id: 3,
          name: 'Announcements',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    },{
      id: 2,
      name: 'General',
      channels: [
        {
          id: 1,
          name: 'Lounge',
          description: 'well',
          messages: 'sip sip'
        },
        {
          id: 2,
          name: 'Media',
          description: 'well',
          messages: 'sip sip'
        },
        {
          id: 3,
          name: 'Memes',
          description: 'well',
          messages: 'sip sip'
        }
      ]
    }]
     },
  { id: 2, src: "/avatars/2.jpg", serverName: 'Sanzu &apos; shit',
    categories: [{
      id:1,
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
      id: 1,
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
      id: 1,
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
