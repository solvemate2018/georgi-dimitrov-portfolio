import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const navigation = [
    {
        name: 'home',
        href: 'home',
    },
    {
        name: 'about',
        href: 'about',
    },
    {
        name: 'projects',
        href: 'projects',
    },
    {
        name: 'contact',
        href: 'contact',
    }
]

export const socials = [
    {
        icon: <FaEnvelope />,
        href: 'mailto:georgi.dimitrov.1112@gmail.com',
    },
    {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/georgi-dim/',
    },
    {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/dimitrov_2001/',
    },
    {
        icon: <FaFacebook />,
        href: 'https://www.facebook.com/profile.php?id=100005329482768',
    }
]

export const projects = [
    {
        title: 'Flight Manager ✈️',
        description: 'An app for managing an airline, which includes managing ticket reservations, passengers and flights. (C#)',
        href: '',
        imageSrc: '',
    },
    {
        title: 'Corona Portal 🦠',
        description: 'An app for booking slots for corona tests and vaccinations.(Java)',
        href: '',
        imageSrc: '',
    },
    {
        title: 'Cinema XX 🎞️',
        description: 'An app for managing movie theaters and selling tickets.(Java)',
        href: '',
        imageSrc: '',
    },
    {
        title: '24-hour project (Exam) ⏱️',
        description: 'A 24-hour exam during which I had to create a voting system for incoming elections.',
        href: '',
        imageSrc: '',
    },
    {
        title: 'Make Impact',
        description: 'A mobile app for sustainable trading and education on finances and investing.',
        href: '',
        imageSrc: '',
    }
]