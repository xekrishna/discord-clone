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
  messages?: Messages[]
}

interface Messages {
  id: number;
  sender: string;
  senderName: string;
  senderAvatar: string
  message: string;
  createdAt: string;
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
          messages: [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        },
        {
          id: 2,
          name: 'Rules',
          description: 'well',
          messages:  [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        },
        {
          id: 3,
          name: 'Announcements',
          description: 'well',
          messages:  [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
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
          messages:  [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        },
        {
          id: 2,
          name: 'Media',
          description: 'well',
          messages: [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        },
        {
          id: 3,
          name: 'Memes',
          description: 'well',
          messages: [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
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
          name: 'Bleh',
          description: 'well',
          messages: [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        }, {
          id: 2,
          name: 'Bleh',
          description: 'well',
          messages: [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        },
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
          messages:  [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
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
          messages:  [
            {
            id:1, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1036082624'
          },{
            id:2, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1037082624'
          },{
            id:3, sender: 'xesanzu', senderAvatar: '/avatars/1.jpg', senderName: 'Sanzu', message: 'wassup!!?', createdAt: '1039082624'
          },{
            id:3, sender: 'xerumi', senderAvatar: '/avatars/2.jpg', senderName: 'Rumi', message: 'good!?', createdAt: '1040082624'
          },
        ]
        }
      ]
    }]
   },
];




export const PlusIcon = PiPlus;
export const DiscordIcon = BsDiscord;
