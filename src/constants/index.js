import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    mysql,
    vue,
    php,
    laravel,
    bootstrap,
    csharp,
    laptop,
    hamburger,
    dashboard,
    musicnote,
    portfolio,
    photo,
    tictactoe
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: vue,
        name: "vue",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "backend",
    }
];

export const experiences = [
    {
        title: "Full Stack Web Developer Trainee",
        company_name: "Boolean Careers",
        icon: laptop,
        iconBg: "#accbe1",
        date: "Gennaio 2023 - Luglio 2023",
        points: [
            "Ho sviluppato e mantenuto applicazioni web usando Vue, Laravel, MySql e tecnologie annesse.",
            "Ho collaborato con colleghi per sviluppare applicazioni di alta qualità.",
            "Ho implementato design reattivi e garantito la compatibilità tra browser.",
            "Ho realizzato API funzionali con autorizzazioni di accesso per garantire la sicurezza delle stesse.",
            "Ho partecipato alle revisioni del codice e fornito feedback costruttivi ad altri sviluppatori.",
        ],
    },
    {
        title: "Full Stack Web Developer Trainee",
        company_name: "Experis Academy",
        icon: laptop,
        iconBg: "#fbc3bc",
        date: "Novembre 2023 - Dicembre 2023",
        points: [
            "Ho sviluppato e mantenuto applicazioni web usando React, Express, MySql e tecnologie annesse.",
            "Ho collaborato con colleghi per sviluppare applicazioni di alta qualità.",
            "Ho implementato design reattivi e garantito la compatibilità tra browser.",
            "Ho realizzato API funzionali con autorizzazioni di accesso per garantire la sicurezza delle stesse.",
            "Ho partecipato alle revisioni del codice e fornito feedback costruttivi ad altri sviluppatori.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "Lavoratore autonomo",
        icon: laptop,
        iconBg: "#b7e4c7",
        date: "Dicembre 2023 - In corso",
        points: [
            "Ho sviluppato e mantenuto questo sito web usando React, Three e tecnologie annesse.",
            "Ho collaborato con colleghi per sviluppare API funzionali con autorizzazioni di accesso per garantire la sicurezza di un sito vetrina.",
            "Ho studiato C# e applicato le nozioni apprese per realizzare piccole applicazioni console.",
            "Sto sviluppando con Next un'applicazione dove gli utenti possono salvare i prompt più utilizzati per interrogare le AI."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Il Mio Portfolio',
        description: `Ho realizzato questo fantastico portfolio con "React", sperimentando "Three", una tecnologia che non avevo ancora esplorato.`,
        link: 'https://github.com/RicchiutiLucia/laravel-deliveboo-team7.',
    },
    {
        iconUrl: photo,
        theme: 'btn-back-black',
        name: 'Full Stack Fotoalbum',
        description: `Ho realizzato con "Express", "MySql", "React" e "Tailwind" un'applicazione che consente di accedere alla dashboard, caricare e modificare fotografie da mostrare nella homepage`,
        link: 'https://github.com/AndreaFermo/react-il-mio-fotoalbum',
    },
    {
        iconUrl: dashboard,
        theme: 'btn-back-green',
        name: 'CRM Dashboard',
        description: `Ho realizzato con "Html", "CSS" e "Bootstrap" una dashboard responsive per la gestione di un istituto scolastico.`,
        link: 'https://github.com/AndreaFermo/html-css-bootstrap-dashboard/blob/main/index.html',
    },
    {
        iconUrl: musicnote,
        theme: 'btn-back-blue',
        name: 'Spotify Layout Clone',
        description: `Ho riprodotto con "Html" e "CSS" il layout della nota applicazione "Spotify"`,
        link: 'https://github.com/AndreaFermo/html-css-spotifyweb',
    },
    {
        iconUrl: hamburger,
        theme: 'btn-back-yellow',
        name: 'Full Stack Deliveroo Clone',
        description: `Ho collaborato con alcuni talentuosi colleghi per sviluppare un sito web ispirato al noto servizio "Deliveroo", utilizzando "MySql" ed i framework "Laravel" e "Vue". Il sito consente ai ristoratori di registrarsi, caricare e modificare i propri piatti. Gli utenti hanno la possibilità di navigare tra i piatti disponibili, aggiungere articoli al carrello, effettuare ordini e completare transazioni online.`,
        
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    },
    {
        iconUrl: tictactoe,
        theme: 'btn-back-pink',
        name: 'TicTacToe',
        description: `Ho realizzato la mia versione del celebre gioco Tris, un'applicazione console con funzionalità di multigiocatore locale in "C#".`,
        link: 'https://github.com/adrianhajdin/social_media_app',
    }    
];