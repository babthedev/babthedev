const data = {
    name:'Abdulrahman Bello',
    projects:[
        {
            title:'Drag',
            id: 1,
            description: 'Drag is a fintech savings app. This app allows users to track and manage their finances in real time.',
            accentColor: 'green-700',
            url: "https://dragsave.netlify.app"
        },
        {
            title:'IICWIN',
            id: 2,
            description: 'IICWIN is a non-profit organization.',
            accentColor: 'orange-700',
            url: "https://iicwin.netlify.app"
        },
    ],
    profileImage:'',
    about: [
        {
            header: 'About Me',
            paragraph: 'I am Abdulrahman a 19 year old Frontend Software Engineer. My core technologies include: HTML, CSS, SASS, Vanilla JS, React JS, Figma.',
        },
        {
            header: 'Engineering',
            paragraph: 'Navigating the realm of JavaScript applications, I leverage the right tools while maintaining the ability to independently engineer swift, resilient solutions priotizing performance and scalability.',
        },
        {
            header: 'Defining Factor',
            paragraph: 'Dedicated to the artistry of frontend development, specializing in crafting products that are both solid and scalable, providing users with seamless experience.',
        },
        {
            header: 'Design',
            paragraph: 'Step into my world, where I break free from the artboard and dive into stylesheets - playing with font sizes arranging layouts of different elements. My goal is to create user experience that blend functionality and fashion.',
        }
    ],
    contact: {
            header: 'Reach out to me!',
            paragraph: 'Got a question or proposal, or just want to say hello? Go ahead.',
            name:{
                label:'Your name',
                placeholder:'Enter your name',
            },
            email:{
                label:'Your Email Address',
                placeholder:'Enter your email address',
            },
            message:{
                label:'Your Message',
                placeholder:'Hi, I will like to reach out to you ....',
            },
        }
}

export default data